// Q4: Student component (receives everything through props)
const Student = ({ name, rollNumber, address, contactNumber }) => {
  return (
    <div style={{ border: "1px solid #999", padding: "8px", margin: "8px 0" }}>
      <p>Name: {name}</p>
      <p>Roll Number: {rollNumber}</p>
      <p>Address: {address}</p>
      <p>Contact Number: {contactNumber}</p>
    </div>
  );
};

export default Student;
