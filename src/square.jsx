import React, { Component } from 'react';
import './squares.css';

class Square extends React.Component {
    state = {
        clicked: false
    }

    render() { 
        let squareColor = 'whiteSquare';
        if(this.state.clicked === false){
            squareColor = 'whiteSquare';
        }else{
            squareColor = 'blackSquare';
        }
        return (
            <div onClick={this.updateCounts} class={squareColor}></div>
        );
    }

    updateCounts = () => {
        console.log(this.props);
        if (this.state.clicked === false){
            this.setState({clicked: this.state.clicked = true});
            this.props.onClickCallFunc("Increment");
        }else{
            this.setState({clicked: this.state.clicked = false});
            this.props.onClickCallFunc("Decrement");
        }
    }
    
}
 
export default Square;