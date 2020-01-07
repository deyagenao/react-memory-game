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

  handleCardClick = id => {
    // check if inside past selection
    // call correct / incorrect
    this.state.pastSelections.includes(id) ? 
      this.incorrect() :
      this.correct(id) 
    
  }

  correct = id =>{
    console.log('well done');
    // score up
    // msg change
    this.state.pastSelections.push(id);
    this.setState({
      score: this.state.score + 1,
      message: 'Correct! Keep it up!'
    })
    
    // call shuffle
    this.shuffle(this.state.images);
  }

  incorrect = () =>{
    console.log('alright buddy');
    // reset score to 0 
    // msg change
    this.setState({
      score: 0,
      message: 'Wrong! Time to start over!',
    });
    
    this.shuffle(this.state.images);

  }
  shuffle = imagesArray => {
    // rearrange cards
    // set to state
    for (let i = imagesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagesArray[i], imagesArray[j]] = [
        imagesArray[j],
        imagesArray[i]
      ];
    };
    this.setState({images: imagesArray});
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

