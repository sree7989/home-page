"use client";

import React, { useState } from "react";

export default function Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log({
        name,
        email,
        phone,
        country,
        age,
        experience,
        qualification,
        resume,
      });

      setLoading(false);
      alert("Form Submitted ✅");
    }, 1000);
  };

  return (
    <div className="bg-[#eef3ee] py-16 px-20 w-full">

      <h2 className="text-5xl font-bold mb-2">
  <span className="text-blue-700">Get In Touch With</span>{" "}
  <span className="text-red-600">VJC Overseas</span>
</h2>
      <p className="text-gray-900 mb-10">
        Contact Us With Your Immigration Related Enquiries
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">

        {/* NAME */}
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg border border-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* PHONE */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <span className="px-4 flex items-center bg-gray-100">+91</span>
          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 w-full outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg border border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* COUNTRY */}
        <input
          type="text"
          placeholder="Country"
          className="p-4 rounded-lg border border-gray-300"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

        {/* AGE */}
        <input
          type="number"
          placeholder="Age"
          className="p-4 rounded-lg border border-gray-300"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        {/* EXPERIENCE */}
        <select
          className="p-4 rounded-lg border border-gray-300"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        >
          <option value="">Select Experience</option>
          <option>Fresher</option>
          <option>1-2 Years</option>
          <option>3-5 Years</option>
          <option>5+ Years</option>
        </select>

        {/* QUALIFICATION */}
        <select
          className="p-4 rounded-lg border border-gray-300"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          required
        >
          <option value="">Select Your Qualification</option>
          <option>High School</option>
          <option>Bachelor</option>
          <option>Master</option>
          <option>Diploma</option>
        </select>
<div className="col-span-2">
  <label className="block text-sm mb-2 text-gray-600">
    Upload Resume
  </label>

  <input
    type="file"
    className="w-full p-3 border border-gray-300 rounded-lg bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-green-600 file:text-white hover:file:bg-green-700"
    onChange={(e) => setResume(e.target.files[0])}
    required
  />
</div>

        {/* TERMS */}
        <div className="flex items-center gap-2 col-span-3">
          <input type="checkbox" required />
          <p>I accept the Terms & Conditions</p>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="bg-green-700 text-white py-4 rounded-lg font-semibold col-span-1"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  );
}