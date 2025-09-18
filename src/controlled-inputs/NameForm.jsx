import React from "react";
import { useState } from "react";

export default function NameForm() {
  //Multiple Inputs
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${form.firstName} ${form.lastName}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="boder border-2"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="boder border-2"
          value={form.lastName}
          onChange={handleChange}
        />

        <button type="submit" className="p-2 bg-amber-200">
          submit
        </button>
      </form>
    </div>
  );
}
