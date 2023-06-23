/* eslint-disable */ 
import React, { useState } from "react";

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [frequency, setFrequency] = useState(1); // New state for compound frequency
  const [compoundInterest, setCompoundInterest] = useState("");

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(tenure) / 12; // Convert tenure to years
    const n = parseInt(frequency);
    const compoundInterest = p * (Math.pow(1 + r / n, n * t) - 1);
    setCompoundInterest(compoundInterest.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-base text-white border-white font-bold ont-bold border-b-4 mb-2 text-center">
        Compound Interest Calculator
      </h2>
      <div className="bg-white p-2 rounded-lg">
        <div className="mb-4">
          <label className="block mb-2">Principal Amount:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="border-black border-2 px-2 py-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Annual Interest Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="border-black border-2 px-2 py-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Tenure (months):</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="border-black border-2 px-2 py-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Compound Frequency:</label>
          <select
            className="border-black border-2 px-2 py-1 rounded"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value={1}>Annually</option>
            <option value={2}>Semi-annually</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            onClick={calculateInterest}
            className="border-solid px-4 py-2 border-black rounded-full bg-gray-600 text-white hover:bg-white hover:text-black transition duration-700"
          >
            Calculate
          </button>
        </div>
      </div>
      {compoundInterest && (
        <div className="bg-white px-2 my-4 rounded-lg">
          <div>
            Your interest is {compoundInterest} 
            <br/>
            your principal amount is{" "}
            {principal}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
