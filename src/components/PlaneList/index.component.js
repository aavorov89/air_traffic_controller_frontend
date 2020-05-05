import React from 'react'
import Plane from "../Plane";

const PlaneList = (props) => (
  <React.Fragment>
    <h2>Traffic control center</h2>
    <div className="table-responsive">
      <table className="table table-striped table-sm table-dark">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>From</th>
          <th>To</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        { props.planes.length ?
          (props.planes.map((plane) => <Plane startPlane={props.startPlane} key={plane.id}
                                              id={plane.id} name={plane.name} status={plane.status}
                                              from={plane.from} to={plane.to} />)) :
          null }
        </tbody>
      </table>
    </div>
  </React.Fragment>
)

export default PlaneList;