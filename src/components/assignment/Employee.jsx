// Q5: Employee component
const Employee = ({ employeeName, position, department, salary }) => {
  return (
    <div style={{ border: "1px solid #999", padding: "8px", margin: "8px 0" }}>
      <p>Employee Name: {employeeName}</p>
      <p>Position: {position}</p>
      <p>Department: {department}</p>
      <p>Salary: {salary}</p>
    </div>
  );
};

export default Employee;
