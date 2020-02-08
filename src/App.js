import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

    state= {
        textLength: null,
        textArray: null
    };

    inputLengthHandler= (event) =>{
        this.setState({ textLength: event.target.value.length})
        this.setState({textArray: event.target.value.split('')})
    };

    deleteCharHandler= (index) => {
        console.log('Character deleted');
        // assign text array to variable
        const text = this.state.textArray;
        // delete the index character from array
        text.splice(index, 1);

        // Use joint to create a new string
        const newText = text.join('');

        this.setState({textArray: newText.split('')});
        this.setState({textLength: newText.length});

    };

    render() {

        let characterList = null;

        if(this.state.textArray != null){
        characterList=(
                        <div>
                            {this.state.textArray.map((character, index) =>{

                                return <CharComponent
                                    letter={character}
                                    key={index}
                                    delete={ () => {this.deleteCharHandler(index)}}
                                    />
                            })}
                        </div>);
        }

        let input = null;
        if(this.state.textArray ===null){
            input= (<input type="text" placeholder="input something" onChange={this.inputLengthHandler} />);
        }
        else { input= <input type="text" placeholder="input something" onChange={this.inputLengthHandler} value={this.state.textArray.join('')} />}

        return (
          <div className="App">

              <h1>ES6 String Manipulation with React</h1>
              <div className='SolutionOne'>
                  Enter some text
                  {input}
                  <p>String length: {this.state.textLength}</p>
              </div>

              <ValidationComponent textLength={this.state.textLength}/>

              {characterList}
          </div>
    );
  }
}

export default App;
