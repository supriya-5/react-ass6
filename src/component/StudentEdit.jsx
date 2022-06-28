import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import store from "./Detail";


function StudentEdit() {
  
    const [student, setStudent] = useContext(store);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  useEffect(() => {
    student.forEach((element) => {
      if (element.Id === id) {
        setName(element.Name);
        setAge(element.Age);
        setCourse(element.Course);
        setBatch(element.Batch);
      }
    });
  }, [id, student]);

  const submit = () => {
    setStudent((previousV) =>
      previousV.map((data) =>
        data.Id === id
          ? {
              Id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course,
            }
          : data
      )
    );
  };

  return (
    <>
      
        <label>Name</label>
        <input
          id="outlined-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      <label>Age</label>
        <input
          id="outlined-name"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

<label>course</label>
        <input
          id="outlined-name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

       
      <label>Batch</label> 
        <input
          id="outlined-name"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
      
      <button className="button1" style={{margin:"5px"}}>
        <Link to="/Students"className="new"> cancel </Link>
      </button>
      <button className="button2" onClick={submit}  style={{margin:"5px"}}>
        <Link to="/Students" className="new"> update </Link>
      </button>
    </>
  );
}

export default StudentEdit;
