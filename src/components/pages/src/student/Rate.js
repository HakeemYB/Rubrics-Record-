import React, { useState } from 'react';

function Rate() {
  const [student, setStudent] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { name: student, rating: 0 }]);
    setStudent('');
  };

  const rateStudent = (index, rating) => {
    const students = [...students];
    students[index].rating = rating;
    setStudents(students);
  };

  return (
    <div>
      <input type="text" placeholder="Enter student name" onChange={(e) => setStudent(e.target.value)} />
      <button onClick={() => addStudent(student)}> Add Student </button>
      <ul>
        {students.map((student, index) => (
          <li key={student.name}>
            {student.name}: {student.rating}
            <button onClick={() => rateStudent(index, student.rating + 1)}> + </button>
            <button onClick={() => rateStudent(index, student.rating - 1)}> - </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rate;