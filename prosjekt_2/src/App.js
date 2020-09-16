import React, {Component} from 'react';
import Header from "./components/Header";
import Country from "./components/Country";
import bark from "./sound/bark.mp3";
import {Howl, Howler} from 'howler';

const audioClip = [
  {sound: bark, label: 'bark'}
]


class App extends Component {
  soundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }
  renderButtonAndSOund = () => {
    return audioClip.map((soundObj,index) => {
      return(
        <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      )
    })
  }
  render() {
    Howler.volume(1.0)
    return <div className="App">
      {this.renderButtonAndSOund()}
    <div>;
  }
  return (
    <div>
      <Header />
      <Country
      name = "Colombia"
      description = "Teste Colombia"
      />
      <Country
      name = "Norway"
      description = "Teste Norway"
      />
      <Country
      name = "Italy"
      description = "Teste Italy"
      />
      <Country
      name = "Norway"
      description = "Teste Norway"
      />
      <Country
      name = "Colombia"
      description = "Teste Colombia"
      />
      <Country
      name = "Norway"
      description = "Teste Norway"
      />
      <Country
      name = "Italy"
      description = "Teste Italy"
      />
      <Country
      name = "Norway"
      description = "Teste Norway"
      />
    </div>
  );
};

export default App;
