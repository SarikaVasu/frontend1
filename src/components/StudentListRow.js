import Axios from "axios";
import { Link } from 'react-router-dom';

function StudentListRow(props) {
    const {_id, name, email, rollNo} = props.obj; //object destruction
    const handleClick = () => {
        Axios.delete("https://crudoperations-of5p.onrender.com/students/delete-student/"+ _id)
        .then((res) => {
            if(res.status === 200) {
                alert("Student Deleted Successfully");
                window.location.reload();
            } else {
                Promise.reject();
            }
        })
        .catch((err) => alert(err));
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td className="d-flex justify-content-center ">
                <Link class="text-decoration-none text-light" to={"/edit-student/"+_id}>
                    <button className="btn btn-success me-3">
                    Edit
                    </button>
                </Link>
                <button className="btn btn-danger" onClick = {handleClick} >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default StudentListRow;