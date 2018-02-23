import React from 'react';

export const DataCardContent = (props) => {
    return (
      <div className="data-card-content">
        <ul>
          <li>
            <div>
              Lives in {props.city + ', ' + props.state}
            </div>
          </li>
          <li>
            <div>
              Currently works at {props.company}
            </div>
          </li>
        </ul>
        <div className="connect-button-container">
          <a>
            <div className="connect-button">
              Connect with {props.name}
            </div>
          </a>
        </div>
      </div>
    );
   
}
