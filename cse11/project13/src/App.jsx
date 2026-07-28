import React from 'react';
function App() {
  const students = [
    { id: 1, name: 'adarsh', age: 20 },
    { id: 2, name: 'abhishek', age: 22 },
    { id: 3, name: 'abhi', age: 21 },
  ];
  return (
    <div>
      <h1>Student List</h1>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;