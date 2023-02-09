import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function ClassVI() {
  const [student, setStudent] = useState({ name: '', age: '', course: '' });
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    setStudents([...students, student]);
    setStudent({ name: '', age: '', course: '' });
  };

  const deleteStudent = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
    setSelectedStudent({});
  };

  const selectStudent = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
     
      <h1>Add Student grade VI</h1>
      <Link to="/Project"><button></button></Link>
   
       <table  align='center'>
      <tbody>
        <tr>
        <td>Name</td>
      <td>Age</td>
      <td>Course</td>
      <td>Delete</td>
      <td>View</td>
        </tr>
     
        {students.map((student, index) => (
          
            
          <tr key={student.name}>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td> {student.course}</td>
            <td><ul onClick={() => deleteStudent(index)}>🗑️</ul></td>
            <td><button onClick={() => selectStudent(student)}>View Profile</button></td>
            
          </tr>
        ))}
        </tbody>
      </table>
      {selectedStudent.name ? (
        <StudentProfile student={selectedStudent} />
      ) : (
        <div>No student selected</div>
      )}
      <input
        type="text"
        placeholder="Enter student name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter student age"
        value={student.age}
        onChange={(e) => setStudent({ ...student, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter student course"
        value={student.course}
        onChange={(e) => setStudent({ ...student, course: e.target.value })}
      />
      <button onClick={addStudent}>Add Student</button>
    
    </div>
  );
}

function StudentProfile({ student }) {
  return (
    <div>
      <h3>{student.name}'s Profile:</h3>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default ClassVI;