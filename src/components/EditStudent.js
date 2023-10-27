import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentForm  from "./StudentForm";
import Axios from "axios";

const EditStudent = () => {
    const [initialValue, setInitialValue] = useState({name:"", email:"", rollNo:""});
    const [newData, setnewData] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        Axios.get("https://crudoperations-of5p.onrender.com/students/update-student/"+id)
        .then((res) => {
            if(res.status === 200){
                const {name, email, rollNo} = res.data;
                setInitialValue({name, email, rollNo});  
            } else {
                Promise.reject();
            }
        })
        .catch((err) => alert(err))
    },[id])

    const getState = (childData) => {
        setnewData(childData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name:newData[0], email:newData[1], rollNo:newData[2]};
        Axios.put("https://crudoperations-of5p.onrender.com/students/update-student/"+id, data)
        .then((res) => {
            if(res.status === 200){
                alert("Student Updated Successfully!");
                window.location.assign('/#/student-list'); //after update redirect to student list page, #=> ref, use of hash routeRouter in app.js
            } else {
                Promise.reject();
            }
        })
        .catch((err) => alert(err))
    }
    
  return (
    <form onSubmit = {(e)=>handleSubmit(e)}>
        <StudentForm 
            getState={getState}
            nameValue={initialValue.name}
            emailValue={initialValue.email}
            rollNoValue={initialValue.rollNo}
        />
    </form>
  )
}

export default EditStudent;