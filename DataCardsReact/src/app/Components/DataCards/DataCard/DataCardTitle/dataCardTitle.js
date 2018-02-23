import React from 'react';

export const DataCardTitle = (props) => {
  let style = { backgroundImage: 'url(' + props.picture + ')' };

  return(
    <div className="data-card-title">
      <div style={ style } className="personal-picture"></div>
      <div className="name-age">
        <span className="name">{props.name}</span>
        <span className="age">{props.age}</span>
      </div>
    </div>
  );
}
