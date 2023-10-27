import Nav from './components/Nav';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import {Routes, Route, HashRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element = {<CreateStudent />}></Route>
        <Route path="/create-student" element = {<CreateStudent />}></Route>
        <Route path="/student-list" element = {<StudentList />}></Route>
        <Route path="/edit-student/:id" element = {<EditStudent />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
