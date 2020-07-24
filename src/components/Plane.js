import React from "react";

const Plane = (props) => {
  let button;

  const { status, startPlane, id, name, from, to } = props;

  switch (status) {
    case 'normal':
      button = <button onClick={() => startPlane(id)} type="button" className="btn btn-primary">
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
      <td>{ 1000 + id }</td>
      <td>{ name }</td>
      <td>{ from }</td>
      <td>{ to }</td>
      <td>{ button }</td>
    </tr>
  );
};

export default Plane;