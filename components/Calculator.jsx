/* eslint-disable */
import React, { useState } from "react";

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("");
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    const amount =
      principal *
      Math.pow(
        1 + interestRate / compoundingFrequency,
        compoundingFrequency * time
      );
    const interest = amount - principal;
    setResult({ amount, interest });
  };

  return (
    <div className="compound-interest-calculator">
      <h1 className="text-lg font-bold ont-bold border-b-4 border-black mb-2 ">
        Compound Interest Calculator
      </h1>
      <div className="input-group">
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Interest Rate:</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Time (in years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Compounding Frequency:</label>
        <input
          type="number"
          value={compoundingFrequency}
          onChange={(e) => setCompoundingFrequency(parseFloat(e.target.value))}
        />
      </div>
      <div className="flex justify-center">
      <button
        onClick={calculateCompoundInterest}
        className=" border-solid px-1 border-black rounded-full bg-gray-600 text-white hover:bg-white hover:text-black transition duration-700"
      >
        Calculate
      </button>
      </div>
      {result && (
        <div className="result">
          <p>Final Amount: {result.amount}</p>
          <p>Interest Earned: {result.interest}</p>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
