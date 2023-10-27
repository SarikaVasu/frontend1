import StudentForm from './StudentForm';
import { useState } from 'react';
import Axios from 'axios';

const CreateStudent = () => {
    const [arr,setArr] = useState([]);

    //passed to child to get child data for parent
    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]};
        Axios.post('https://crudoperations-of5p.onrender.com/students/create-student',data)
        .then((res) => {
            if(res.status === 200) {
                alert("Student created successfully");
            }
            else
                Promise.reject();
        })
        .catch(err => alert(err));
        e.target.reset();
    }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <StudentForm getState = {getState}/>
        </form>
    </div>
  )
}

export default CreateStudent;
