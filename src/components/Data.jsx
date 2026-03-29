import React, { useState } from 'react';

const DataForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const data = { name, phone, email };

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbzxU9e3ixU0PMMo1eYVgfbw6mM8T9y6mCsOR2qXllEDQ0CFwMdKuX4cCxiOfOyWQ138nA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setResponse(JSON.stringify(result)); // Set the response to state
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Submit Your Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Response:</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default DataForm;