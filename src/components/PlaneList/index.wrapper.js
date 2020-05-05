import React from 'react'

export default function wrapper(Component) {
  return class PlaneListWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.startPlane = this.startPlane.bind(this);
    }
    componentDidMount() {
      this.props.requestApiData();
    }

    startPlane(id) {
      this.props.enqueueJob(id);
    }

    render = () => {
      return (
        <Component
          {...this.props}
          startPlane={this.startPlane}
        />
      )
    }
  }
}