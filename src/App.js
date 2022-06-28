
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Students from './component/Students';
import Contact from './component/Contact';
import NavBar from './component/NavBar';
import StudentEdit from './component/StudentEdit';
import NewStudents from './component/NewStudents';
import Detail from './component/Detail';


function App() {
  return (
    <Detail>
    <div className="App">
<BrowserRouter>
<NavBar/>
<Routes>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/Students" element={<Students/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/StudentEdit/:id" element={<StudentEdit/>}/>
  <Route path="/NewStudents" element={<NewStudents/>}/>
</Routes>
</BrowserRouter>

    </div>
    </Detail>
  );
}

export default App;
