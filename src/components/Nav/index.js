import React from "react";

function Nav (props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light fixed-top">
                <span className="navbar-brand mb-0 h1">React Memory Game</span>
                <span><h3>{props.message}</h3></span>
                <span className="float-right">Score: {props.score} | Top Score: {props.topScore}</span>
            </nav>
        </div>
    )

}

export default Nav;