import React from 'react';
import "./style.css";

function Card (props) {
    return(
        <div className="d-inline">
           <div className="card" id={props.id} key= {props.id} onClick={() => props.handleCardClick(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.url} />
            </div>
        </div> 
        </div>
        
    )
}

export default Card;