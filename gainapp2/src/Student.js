import {useState} from "react";
const Student = () => {
    // let students = ["Kamran", "Sana", "Apporva", "Shri,","Nidhi"];
    return (
        <div>
            {
                students.map((val)=>{
                    return <div>{val}</div>
                }
                )
            }
        </div>
    );
};

export default Student;
