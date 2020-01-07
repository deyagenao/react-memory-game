import React from 'react';
import './App.css';
import images from './images.json';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';


class App extends React.Component {
  state = {
    images: images,
    score: 0,
    message: 'Play now!', 
    topScore: 0,
    pastSelections: []
  }

  handleCardClick = () => {
    // const cardId 
    // check if inside past selection
    // call correct / incorrect
  }

  correct = () =>{
    // score up
    this.setState({
      score: this.state.score + 1
    })
    // msg change
    // call shuffle
  }

  incorrect = () =>{
    // reset score to 0 
    this.setState({
      score: 0
    })
    // msg change
    // call shuffle

  }
  shuffle = () => {
    // rearage cards
    // set to state
  }
  
  render() {
    console.log(images);
    return (<div className="App">
      <Nav 
        message={this.state.message}
        score={this.state.score}
        topScore={this.state.topScore} /> 
      <Jumbotron /> 
      <Wrapper>
        {this.state.images.map(image => (
          <Card 
            handleCardClick={this.handleCardClick}
            id={image.id}
            key={image.id}
            name={image.name}
            url={image.url}
          />
        ))}
      </Wrapper>
      
    </div>
  )
    }
}

export default App;

