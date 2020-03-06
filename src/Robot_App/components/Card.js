import React from "react";
import "./Card.css";

const Card = ({ name, id, email }) => {
  /* 
  const Card = (proprs) => {
    // for this <h2>{props.name}</h2>
  const { name, id, email} = props;
    // tfor this:  <h2>{name}</h2>
 */

  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <img
          alt="robots"
          src={`https://robohash.org/${id}`}
          height="200"
          width="200"
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
{
  /*  <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"> */
}
