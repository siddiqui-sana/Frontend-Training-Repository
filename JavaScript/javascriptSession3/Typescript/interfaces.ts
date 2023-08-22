// interface Validator {
//     isValid(value: string | number);
// }

// interface ValidatorMessage {
//     setMessage(message: String);
// }

// class EmailValidator implements Validator {
//     isValid(value: string | number){
//         console.log("Some logic");
//     }
// }

interface Validator {
    isValid(value: string | number);
}

interface ValidatorMessage {
    setMessage(message: String);
}

class EmailValidator implements Validator, ValidatorMessage {
    setMessage(message: string){
        console.log("another interface implementation")
    }
    isValid(value: string | number){
        console.log("Validation logic");
    }
}