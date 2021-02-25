import React from 'react';
import './index.css';

function Display(props) {
  return (
  <div className="container">
    <thead className = ".responsive-table">
      <tr>
        <th>
          <img alt={props.firstName} src={props.picture} />
        </th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.city}</td>
      </tr>
    </thead>
  </div>
  );
}

export default Display;