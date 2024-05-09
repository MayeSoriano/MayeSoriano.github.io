import "./HomeImg2Styles.css";


import React, { Component } from 'react';

class HomeImg2 extends Component {
    render(){
    return (
         <div className="home-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
    );
}
}
export default HomeImg2;