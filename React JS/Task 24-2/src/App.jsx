import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState(null);

  const handleEmailChange = (event) => {
    setError("");
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const result = pattern.test(email);
    console.log("Matches:", result);
    if (!result) {
      setError("Invalid Email");
      return;
    }
    setFormData({ email: email, password: password });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-100">
      <form
        className="flex items-center justify-center flex-col my-auto mx-12 p-10 shadow-md max-w-64 border-2 bg-white"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="block p-2 border border-gray-300 rounded"
            onChange={handleEmailChange}
            value={email}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="block p-2 border border-gray-300 rounded mt-2"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {formData && (
        <div className="bg-blue-100 h-56 rounded shadow-lg p-2">
          <p className="border-2 p-1 m-3 text-red-700">Email: <span className="font-mono">{formData.email}</span></p>
          <p className="border-2 p-1 m-3 text-green-700">Password: <span className="font-mono">{formData.password}</span></p>
        </div>
      )}
    </div>
  );
}

export default App;
