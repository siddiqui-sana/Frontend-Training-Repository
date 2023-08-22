//variables.ts
//To compile the file: tsc ./file-name.ts
//types: implicit
const a = 10;
//types: Explicit
const b: string = "test";
const t: number = JSON.parse("10");
//unios
const c: number | string = 'test';  // c can be either  number or a string
//enums
enum Month {
    Jan,
    Feb,
    March,
    April
}
const m: Month = Month.Feb;
//user-defined datatype: use keyword: types
type User = {
    name: string;
    age: number;
    email: string;
    //to MAKE ANY FIELD OPTIONAL: put ? infront of it. Example: email?: string;
};
const u: User={
    name: "test",
    age: 12,
    email: "",
};
//Intersections
type PersonDetails = {
    name: string;
    dob: Date;
};
type ContactDetails={
    email: string;
    phone: number;
};
type Identity={
    id: number;
};

type Customer = PersonDetails & ContactDetails;
type Employee = PersonDetails & ContactDetails & Identity;

//const cust: Customer = {};
//const emp: Employee = {};






