import React from 'react';
import './Slide.css';

class Slide extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    render(){
        return(
            <div className="slide ">
                <img className="hero" src={this.props.hero} alt={this.props.text}></img>
                <img className="image" src={this.props.image} alt={this.props.text}></img>
                {<p className="text">{this.props.text}</p>}
            </div>
        );
    }
}

export default Slide;