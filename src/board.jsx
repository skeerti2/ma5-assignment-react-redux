import React, { Component } from 'react';
import Square from './square';

class Board extends React.Component {
    state = {
        counts: 0
    }
    render() { 
        return (
        <div>
            <h1>Counter<span class="counter-data">{this.state.counts}</span></h1>
            <div class="wrapper">
                <Square id={1} value={this.state.counts} onClickCallFunc={this.manageCounter}/>
                <Square id = {2} value={this.state.counts} onClickCallFunc={this.manageCounter}/>
                <Square id ={3} value={this.state.counts} onClickCallFunc={this.manageCounter}/>
                <Square id = {4} value={this.state.counts} onClickCallFunc={this.manageCounter}/>
            </div>
        </div>
        );
    }

    manageCounter = (type) =>{
        if(type === "Increment"){
            this.setState({counts: this.state.counts+1})
        }else{
            this.setState({counts: this.state.counts-1})
        }
    }
   
}
 
export default Board;