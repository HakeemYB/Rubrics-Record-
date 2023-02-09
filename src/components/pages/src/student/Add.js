import React, { useState } from 'react';

const AddStudentForm = () => {
  const [student, setStudent] = useState({ name: '', age: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    setStudent({ name: '', age: '' });
  };

  const handleDelete = (index) => {
    const students = JSON.parse(localStorage.getItem('students'));
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
  };

  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={student.age}
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>
      <ul >

        {(JSON.parse(localStorage.getItem('students')) || []).map(
          (s, index) => (
            <table className='topnav'>
    <tbody>
        <tr>
            <td> <li className='topnav' key={s.name + s.age}>
              {s.name} - {s.age}
            
            </li></td>
            <td> <button onClick={() => handleDelete(index)}>🗑️</button></td>
        </tr>
    </tbody>
</table>
           
          )
        )}
      </ul>
    </div>
  );
};

export default AddStudentForm;