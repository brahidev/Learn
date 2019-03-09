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
        if (declaringWinner(squares) || squares[i]) {
            return;
        }
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
        const winner = declaringWinner(current.square);
        let status;
        if(winner) {
            status = "Winner player: " + winner;
        } else {
            status = "The next Player is: " + (this.state.isNext ? 'X' : 'O');
        }
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
                        {status}
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
);

function declaringWinner(square){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return null;
}