let express = require("express");
const path = require("path");
const socketIo = require("socket.io");
const http = require("http");

let app = express();
//this line allows us to use body parsing meaning that we can now read the data in body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = http.createServer(app);
//the socket server is created .

const io = socketIo(server, { cors: { origin: "*" } });
let interval;
io.on("connection", (socket) => {
	console.log("new socket connection");
	if (interval) {
		clearInterval();
	}
	interval = setInterval(() => {
		const response = new Date();
		socket.emit("GetTime", response);
	}, 1500);
	socket.on("disconnect", () => {
		console.log("client disconnected");
		clearInterval(interval);
	});
});

let todos = [
	{ name: "read book", status: "complete" },
	{ name: "go to gym", status: "incomplete" },
];
app.get("/todos", function (request, response) {
	response.json(todos);
});
//:id means id can have any value. so it is variable.
app.get("/todos/:id", function (request, response) {
	let id = request.params.id;
	response.json(todos[id]);
});
app.post("/todos", function (request, response) {
	console.log(request.body);
	let { name, status } = request.body;
	let todosOb = { name: name, status: status };
	todos.push(todosOb);
	console.log(todos)
	response.json({ status: 1, msg: "operation to add todo is complete" });
});

app.get("/todoform", function (request, response) {
	let completePath = path.join(__dirname + "/todoform.html");
	response.sendFile(completePath);
});
app.delete("/todos/:id", function (request, response) {
	let newTodos = todos.filter((val, index) => {
		if (index == request.params.id) return false;
		return true;
	});
	todos = [...newTodos];
	console.log("deleted");
	response.json({ status: 1, msg: "operation delete  is complete" });
});
server.listen(3001);
console.log("simple api is running now!it doesnt need any backend");
