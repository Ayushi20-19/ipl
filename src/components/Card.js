import React from "react";
import "./card.css";
const Card = ({ matchData }) => {
  const {
    id,
    year,
    date,
    city,
    tossWin,
    tossDecision,
    team1,
    team2,
    winner,
    winByRun,
    winByWicket,
    playerOfMatch,
  } = matchData;
  return (
    <div key={id}>
      <div className='date-wrapper'>
        <div className='date'>
          <span>{year}</span>
          <span>{date}</span>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='team1'>{team1}</div>
        <div className='content'>
          <div className='toss-wrapper'>
            <div className='box1'>
              Match in {city}, {tossWin} wins toss and decides to {tossDecision}
              .
            </div>
            {/* <div className='box2'>toss decision</div> */}
          </div>
          <div className='win'>
            <div className='winner'>
              Winner- <span>{winner}</span>
            </div>
            <div className='run'>
              <div>
                Win by run- <span>{winByRun}</span>
              </div>
              <div>
                Win by Wicket- <span>{winByWicket}</span>
              </div>
            </div>
          </div>
          <div className='player'>
            Player of Match- <span>{playerOfMatch}</span>
          </div>
        </div>
        <div className='team2'>{team2}</div>
      </div>
    </div>
  );
};

export default Card;
