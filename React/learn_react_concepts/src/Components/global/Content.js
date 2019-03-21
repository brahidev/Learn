
//Components
import React, { Component } from 'react'

class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            num_one: 0,
            num_two: 0,
            result: 0
        };
    }
    handleClickSum() {
       this.setState({
          count: this.state.count + 1
       });
    }

    handleClickRes() {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : 0
        });
    }

    handleClickClear() {
        this.setState({
            count: 0
        });
    }

    handleResultClick() {
        this.setState({
            result: (this.state.num_one) + (this.state.num_two)
        });
    }

    handleChangeNumberOne(e) {
        this.setState({
            num_one: Number(e.target.value)
        });
    }

    handleChangeNumberTwo(e) {
        this.setState({
            num_two: Number(e.target.value)
        });
    }
    render() {
        return(
           <div>
               <h1>
                   { this.state.count }
               </h1>
               <div>
                    <button
                        onClick={() => this.handleClickSum()}
                    >
                        Añadir
                    </button>
                   <button
                       onClick={() => this.handleClickRes()}
                   >
                       Restar
                   </button>
                   <button
                       onClick={() => this.handleClickClear()}
                   >
                       Limpiar
                   </button>
               </div>
               <div>
                   <input type="number" id="number_one" placeholder="Numero Uno" value={this.state.num_one} onChange={(e) => this.handleChangeNumberOne(e)}/>
                   <input type="number" id="number_two" placeholder="Numero Dos" value={this.state.num_two} onChange={(e) => this.handleChangeNumberTwo(e)}/>
                   <button onClick={() => this.handleResultClick()}>
                       Sumar
                   </button>
                   <p>Resultado { this.state.result }</p>
               </div>
           </div>
        );
    }
}

export default Content