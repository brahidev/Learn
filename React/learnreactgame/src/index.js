// Creator - Brahian Sánchez || @brahians0701@gmail.com

//Dependencies
import React, { Component } from 'react';
import  { render } from 'react-dom';

//Assets
import './index.css';

const Square = (props) => {
    return (
        <button className="square" onClick={() => props.onClick()}>
            { props.value }
        </button>
    );   
}

class Board extends Component {
    renderSquare(i) {
        return <Square 
                value={this.props.value[i]}
                onClick={() => this.props.onClick(i)} 
            />
    }
    render () {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        ); 
    }
}

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                square: Array(9).fill(null)
            }],
            isNext: true
        }
    }
    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1]
        const squares = current.square;
        squares[i] = this.state.isNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                square: squares
            }]),
            isNext: !this.state.isNext
        });
    }
    render () {
        const history = this.state.history;
        const current = history[history.length - 1];
        const state = "The next Player is: " + (this.state.isNext ? 'X' : 'O');
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        value={current.square}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="status">
                        {state}
                    </div>
                </div>
            </div>
        );
    }
}


//RENDER 

render(
    <Game />,
    document.getElementById('root')
)