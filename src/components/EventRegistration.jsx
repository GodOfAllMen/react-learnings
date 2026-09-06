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
Task: College Event Registration Form
=================================================
*/

import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  college: "",
  faculty: "BCA",
  semester: "1st",
  event: "Web Development Workshop",
  participationType: "Individual",
  teamMembers: "",
  foodPreference: "Vegetarian",
  requirements: [],
  comments: "",
  agreeToRules: false,
};

function EventRegistration() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // one shared function for text/select/textarea/radio inputs
  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const updateCheckbox = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const updateRequirements = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      if (checked) {
        return { ...prev, requirements: [...prev.requirements, value] };
      }
      return { ...prev, requirements: prev.requirements.filter((r) => r !== value) };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Participant name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.college.trim()) newErrors.college = "College name is required";
    if (form.participationType === "Team" && !form.teamMembers) {
      newErrors.teamMembers = "Number of team members is required for a team";
    }
    if (!form.agreeToRules) newErrors.agreeToRules = "You must agree to the event rules";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>College Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Participant Name</label><br />
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
          <label>College Name</label><br />
          <input type="text" name="college" value={form.college} onChange={updateField} />
          {errors.college && <p style={{ color: "red" }}>{errors.college}</p>}
        </div>

        <div>
          <label>Faculty</label><br />
          <select name="faculty" value={form.faculty} onChange={updateField}>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="BSc CSIT">BSc CSIT</option>
            <option value="BIT">BIT</option>
          </select>
        </div>

        <div>
          <label>Semester</label><br />
          <select name="semester" value={form.semester} onChange={updateField}>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
          </select>
        </div>

        <div>
          <label>Event</label><br />
          <select name="event" value={form.event} onChange={updateField}>
            <option value="Web Development Workshop">Web Development Workshop</option>
            <option value="AI Seminar">AI Seminar</option>
            <option value="Coding Competition">Coding Competition</option>
            <option value="UI/UX Workshop">UI/UX Workshop</option>
          </select>
        </div>

        <div>
          <label>Participation Type</label><br />
          <label>
            <input
              type="radio"
              name="participationType"
              value="Individual"
              checked={form.participationType === "Individual"}
              onChange={updateField}
            /> Individual
          </label>
          <label>
            <input
              type="radio"
              name="participationType"
              value="Team"
              checked={form.participationType === "Team"}
              onChange={updateField}
            /> Team
          </label>
        </div>

        {form.participationType === "Team" && (
          <div>
            <label>Number of Team Members</label><br />
            <input
              type="text"
              name="teamMembers"
              value={form.teamMembers}
              onChange={updateField}
            />
            {errors.teamMembers && <p style={{ color: "red" }}>{errors.teamMembers}</p>}
          </div>
        )}

        <div>
          <label>Food Preference</label><br />
          <label>
            <input
              type="radio"
              name="foodPreference"
              value="Vegetarian"
              checked={form.foodPreference === "Vegetarian"}
              onChange={updateField}
            /> Vegetarian
          </label>
          <label>
            <input
              type="radio"
              name="foodPreference"
              value="Non-Vegetarian"
              checked={form.foodPreference === "Non-Vegetarian"}
              onChange={updateField}
            /> Non-Vegetarian
          </label>
        </div>

        <div>
          <label>Requirements</label><br />
          {["Certificate", "Lunch", "Workshop Materials"].map((req) => (
            <label key={req} style={{ marginRight: 10 }}>
              <input
                type="checkbox"
                value={req}
                checked={form.requirements.includes(req)}
                onChange={updateRequirements}
              /> {req}
            </label>
          ))}
        </div>

        <div>
          <label>Comments / Special Request</label><br />
          <textarea name="comments" value={form.comments} onChange={updateField} />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="agreeToRules"
              checked={form.agreeToRules}
              onChange={updateCheckbox}
            /> I agree to the event rules
          </label>
          {errors.agreeToRules && <p style={{ color: "red" }}>{errors.agreeToRules}</p>}
        </div>

        <br />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Registering..." : "Register"}
        </button>

        {status === "loading" && <p>Registering...</p>}
        {status === "success" && (
          <p style={{ color: "green" }}>Registration successful!</p>
        )}
        {status === "error" && (
          <p style={{ color: "red" }}>Registration failed. Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default EventRegistration;
