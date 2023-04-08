/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function PollingSection() {
  const [positiveVotes, setPositiveVotes] = useState(0);
  const [negativeVotes, setNegativeVotes] = useState(0);
  const totalVotes = positiveVotes + negativeVotes;
  const positivePercentage = totalVotes
    ? ((positiveVotes / totalVotes) * 100).toFixed(2)
    : 0;
  const negativePercentage = totalVotes
    ? ((negativeVotes / totalVotes) * 100).toFixed(2)
    : 0;

  const handleVote = (option) => {
    if (option === 'positive') {
      setPositiveVotes(positiveVotes + 1);
    } else {
      setNegativeVotes(negativeVotes + 1);
    }
  };

  return (
    <div className="PollSection">
      <h2 className="items-center text-xl font-bold border-b-2 border-b-slate-900 mx-10 mb-4">
        Your opinion for the Market
      </h2>
      <div className="VoteContainer container">
        <div className=" flex VoteDiv container">
          {/* <h6 className="buttonText">Positive</h6> */}
          <div className="flex">
            <button
              className="w-10  h-10 rounded-full PositiveButton pollbuttons"
              style={{
                backgroundImage: "url('./images/Positive_icon.jpg')",
                width: '100%',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '40px',
                height: '40px',
              }}
              onClick={() => handleVote('positive')}
            />
            <a className="self-center">Positive </a>
          </div>
          {/* <button
            className="w-10 h-10 rounded-full PositiveButton pollbuttons"
            onClick={() => handleVote("positive")}
          ></button> */}
          {/* <button class="w-44 h-12 border-4 border-green-500 rounded-full"></button> */}
          <ProgressBar
            className="lg:w-60 border-2 border-green-800 rounded-2xl   PositiveBar"
            now={positivePercentage}
            label={`${positivePercentage}% Positive`}
          />
        </div>

        <div className=" VoteDiv container">
          {/* <h6 className="buttonText">Negative</h6> */}
          <div className="flex">
            <button
              className="w-10 h-10 rounded-full NegativeButton pollbuttons"
              style={{
                backgroundImage: "url('./images/Negative_icon.jpg')",
                width: '100%',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '40px',
                height: '40px',
              }}
              onClick={() => handleVote('negative')}
            />
            <a className="self-center">Negative</a>
          </div>
          <ProgressBar
            className="lg:w-60 border-2 border-red-500 NegativeBar"
            now={negativePercentage}
            label={`${negativePercentage}% Negative`}
          />
        </div>
      </div>
    </div>
  );
}
