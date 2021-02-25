import React from 'react';
import './index.css';

function Display(props) {
  return (
    <div className="container">
      <thead>
        <tr className="responsive-table">
          <th className="table-header">
            <img alt={props.firstName} src={props.picture} />
          </th>
          <td className="col-1">{props.firstName}</td>
          <td className="col-1">{props.lastName}</td>
          <td className="col-2">{props.city}</td>
          <td className="col-3">{props.phone}</td>
          <td className="col-4">{props.email}</td>
        </tr>
      </thead>
    </div>
  );
}

export default Display;