import React, { Component } from "react";

/** A single joke, along with vote up/down buttons. */

function Joke({ vote, votes, text, id }) {
  function upVote(evt) { vote(id, +1) }
  function downVote(evt) { vote(id, -1) }

    return (
      <div className="Joke">
        <div className="rating">
          <button onClick={upVote}>
            <i className="thumbs-up" />
          </button>

          <button onClick={downVote}>
           <i className="thumbs-down" />
          </button>

          {votes}
        </div>

      <div className="joke-text">{text}</div>
    </div>
  );
}

export default Joke;
