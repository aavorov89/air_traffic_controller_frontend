import React from "react";

const Plane = (props) => {
  let button;

  switch (props.status) {
    case 'normal':
      button = <button onClick={() => props.startPlane(props.id)} type="button" className="btn btn-primary">
        Start
      </button>;
    break;
    case 'active':
      button = <button type="button" className="btn btn-light">
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        In process...
      </button>
    break;
    case 'completed':
      button = <button type="button" className="btn btn-success">Done</button>;
    break;
    default:
      button = null
  }

  return (
    <tr>
      <td>{ 1000 + props.id }</td>
      <td>{ props.name }</td>
      <td>{ props.from }</td>
      <td>{ props.to }</td>
      <td>{ button }</td>
    </tr>
  );
};

export default Plane;