import React, { useState } from 'react';
import './App.css'

function AdditivePersistence() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(calculateAdditivePersistence(Number(num)));
  };

  const calculateAdditivePersistence = (num) => {
    let strNum = num.toString();
    if (strNum.length === 1) return 0;
    let sum = 0;
    for (let char of strNum) {
      sum += parseInt(char, 10);
    }
    return 1 + calculateAdditivePersistence(sum);
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit} className="form">
            <label className="label">
                Number:
                <input type="number" value={num} onChange={handleChange} className="input" />
            </label>
            <button type="submit" className="button">Calculate</button>
        </form>
        {result !== null && <p className="result">Result: {result}</p>}
    </div>

  );
}

export default AdditivePersistence;
