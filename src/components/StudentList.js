import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";

const StudentList = () => {
  const [arr,setArr] = useState([]);
  useEffect(() => {
    Axios.get("https://crudoperations-of5p.onrender.com/students")
    .then((res) => {
      if (res.status === 200) {
        setArr(res.data);
      } else {
        Promise.reject();
      }
  })
  .catch((err) => alert(err));
  }, []);
  const ListItems = () => {
    return arr.map((val, index) => {
      return <StudentListRow obj= { val }/>
    })
  }
  
  return (
    <table style={{maxWidth:"80%", margin:"50px auto"}}
    className="table table-bordered table-striped table-success">
      <thead>
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Email</th>
          <th className="text-center">Roll Number</th> 
          <th className="text-center">Action</th>       
        </tr>
      </thead>
      <tbody>
        {ListItems()}
      </tbody>
    </table>
  )
}
export default StudentList;
