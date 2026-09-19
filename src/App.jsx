// import Aaditya from "./components/Aaditya";
// import Parent from "./components/ParentChild/Parent";
import ShowHide from "./components/assignment/ShowHide";
import NameDisplay from "./components/assignment/NameDisplay";
import LikeButton from "./components/assignment/LikeButton";
import Student from "./components/assignment/Student";
import Employee from "./components/assignment/Employee";
import Product from "./components/assignment/Product";
import StudentInfo from "./components/assignment/StudentInfo";

function App() {
  return (
     <>
       {/* <Aaditya />
       <Parent />  */}
      {/* <CounterApp /> */}
      <hr />
<ShowHide />
<hr />
<NameDisplay />
<hr />
<LikeButton />
<hr />

<h2>4. Student Component</h2>
<Student
  name="Ram Sharma"
  rollNumber={12}
  address="Bharatpur, Chitwan"
  contactNumber="9800000000"
/>
<StudentInfo />
<hr />

<h2>5. Employee Component</h2>
<Employee
  employeeName="Sita Karki"
  position="Software Engineer"
  department="IT"
  salary="Rs. 80,000"
/>
<Employee
  employeeName="Hari Thapa"
  position="Accountant"
  department="Finance"
  salary="Rs. 60,000"
/>
<StudentInfo />
<hr />

<h2>6. Product Component</h2>
<Product productName="Laptop" price="Rs. 95,000" category="Electronics" quantity={5} />
<Product productName="Notebook" price="Rs. 120" category="Stationery" quantity={50} />
<Product productName="Water Bottle" price="Rs. 450" category="Accessories" quantity={20} />
<StudentInfo />
     
    

    </>
  );
}

export default App;