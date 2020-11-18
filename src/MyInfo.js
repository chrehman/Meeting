import React from 'react';


class MyInfo extends React.Component {
    render() {
      return <div><h4>Name:{this.props.name} </h4><h4>RegNo:{this.props.regno} </h4></div>
    }
  }
  export default MyInfo;