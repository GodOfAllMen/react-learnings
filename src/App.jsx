import React from "react";
// import Aaditya from "./components/Aaditya";
// import Parent from "./components/ParentChild/Parent";
import CounterApp from "./components/Counter/CounterApp";
import CreateAssignment from "./components/assignment/CreateAssignment";
import NewCreateAssignment from "./components/assignment/NewCreateAssignment";
import EmployeeForm from "./components/EmployeeForm";
import CreateProduct from "./components/CreateProduct";
import EventRegistration from "./components/EventRegistration";

function App() {
  return (
     <>
       {/* <Aaditya />
       <Parent />  */}
      {/* <CounterApp /> */}
     
      <NewCreateAssignment />
      <EmployeeForm />
      <CreateProduct />
      <EventRegistration />

    </>
  );
}

export default App;