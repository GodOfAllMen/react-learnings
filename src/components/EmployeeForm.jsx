/*
=================================================
Student Details
=================================================
Name         : [Aaditya Adhikari]
Roll No.     : [5.]
Contact No.  : [97417792061]
Address      : [kamane]
Program      : [csit]
Semester     : [2nd]
=================================================
Task: Employee Registration Form
=================================================
*/

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  department: "IT",
  designation: "Intern",
  employmentType: "Full Time",
  salary: "",
  joiningDate: "",
  workFrom: "Office",
  skills: [],
  emergencyContact: "",
  isActive: false,
};

function EmployeeForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // generic field updater for text/select/date inputs
  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const updateCheckbox = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const updateSkills = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      if (checked) {
        return { ...prev, skills: [...prev.skills, value] };
      }
      return { ...prev, skills: prev.skills.filter((s) => s !== value) };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Employee name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.dob) newErrors.dob = "Date of birth is required";
    if (!form.salary) newErrors.salary = "Salary is required";
    else if (isNaN(form.salary) || Number(form.salary) <= 0)
      newErrors.salary = "Salary must be a positive number";
    if (!form.joiningDate) newErrors.joiningDate = "Joining date is required";
    if (!form.emergencyContact.trim())
      newErrors.emergencyContact = "Emergency contact is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // simulate an API call (no real backend needed for this task)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const annualSalary = form.salary && !isNaN(form.salary)
    ? Number(form.salary) * 12
    : 0;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name</label><br />
          <input type="text" name="name" value={form.name} onChange={updateField} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email</label><br />
          <input type="email" name="email" value={form.email} onChange={updateField} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Phone</label><br />
          <input type="text" name="phone" value={form.phone} onChange={updateField} />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <div>
          <label>Date of Birth</label><br />
          <input type="date" name="dob" value={form.dob} onChange={updateField} />
          {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
        </div>

        <div>
          <label>Department</label><br />
          <select name="department" value={form.department} onChange={updateField}>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div>
          <label>Designation</label><br />
          <select name="designation" value={form.designation} onChange={updateField}>
            <option value="Intern">Intern</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Accountant">Accountant</option>
          </select>
        </div>

        <div>
          <label>Employment Type</label><br />
          <label>
            <input
              type="radio"
              name="employmentType"
              value="Full Time"
              checked={form.employmentType === "Full Time"}
              onChange={updateField}
            /> Full Time
          </label>
          <label>
            <input
              type="radio"
              name="employmentType"
              value="Part Time"
              checked={form.employmentType === "Part Time"}
              onChange={updateField}
            /> Part Time
          </label>
          <label>
            <input
              type="radio"
              name="employmentType"
              value="Contract"
              checked={form.employmentType === "Contract"}
              onChange={updateField}
            /> Contract
          </label>
        </div>

        <div>
          <label>Salary (Monthly)</label><br />
          <input type="text" name="salary" value={form.salary} onChange={updateField} />
          {errors.salary && <p style={{ color: "red" }}>{errors.salary}</p>}
          {annualSalary > 0 && (
            <p>Annual Salary: {annualSalary.toLocaleString()}</p>
          )}
        </div>

        <div>
          <label>Joining Date</label><br />
          <input type="date" name="joiningDate" value={form.joiningDate} onChange={updateField} />
          {errors.joiningDate && <p style={{ color: "red" }}>{errors.joiningDate}</p>}
        </div>

        <div>
          <label>Work From</label><br />
          <label>
            <input
              type="radio"
              name="workFrom"
              value="Office"
              checked={form.workFrom === "Office"}
              onChange={updateField}
            /> Office
          </label>
          <label>
            <input
              type="radio"
              name="workFrom"
              value="Remote"
              checked={form.workFrom === "Remote"}
              onChange={updateField}
            /> Remote
          </label>
          <label>
            <input
              type="radio"
              name="workFrom"
              value="Hybrid"
              checked={form.workFrom === "Hybrid"}
              onChange={updateField}
            /> Hybrid
          </label>
        </div>

        <div>
          <label>Skills</label><br />
          {["JavaScript", "React", "Node.js", "Python", "SQL"].map((skill) => (
            <label key={skill} style={{ marginRight: 10 }}>
              <input
                type="checkbox"
                value={skill}
                checked={form.skills.includes(skill)}
                onChange={updateSkills}
              /> {skill}
            </label>
          ))}
        </div>

        <div>
          <label>Emergency Contact</label><br />
          <input
            type="text"
            name="emergencyContact"
            value={form.emergencyContact}
            onChange={updateField}
          />
          {errors.emergencyContact && (
            <p style={{ color: "red" }}>{errors.emergencyContact}</p>
          )}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={updateCheckbox}
            /> Active Employee
          </label>
        </div>

        <br />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>

        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <p style={{ color: "green" }}>Employee registered successfully!</p>}
        {status === "error" && <p style={{ color: "red" }}>Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}

export default EmployeeForm;
