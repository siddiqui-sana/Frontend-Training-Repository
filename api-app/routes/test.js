/*
C: POST
R: GET
U: PUT
D: DELETE
*/

const router = require('express').Router();
//GET : /test/id
// (path parameters): because they are accessed from the url
// Provision of (query parameters). these are defined in form of key value pair.
//:param : required data
//:param? : optional data

//Path params 
//router.get("/:id?", (req, res)=>{  //The parent path and handler
// return res.status(201).send(req.params);
//});

//Query Params
//?page=1&order=asc
router.get ("/:id?",(req,res)=>{        //get is to get data from url
    return res
    .status(201)
    .json({pathparams: req.params, queryparams: req.query});
})

//POST: /test When we want to give some data
router.post("/",(req,res)=>{
    return res.json({body: req.body})
})
module.exports=router;

//we can send data via url or body(for this parser should be enabled)