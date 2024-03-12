import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const images = [
  'https://i.imgur.com/Ahcm1En_d.webp?maxwidth=520&shape=thumb&fidelity=high' ,
  '' ,
]

function MyImg () {

  const [src , ] = useState('https://i.imgur.com/XZKfBG5.jpeg');

  return <img src={src} />
}

function VideoPlayer() {

  const width = 300 ;

  return (
    <div>
      <video width={width} height={width / 2} controls>
        <source src="https://i.imgur.com/OsGoOf0.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <MyImg />
      <MyImg />
      <MyImg /> 
      <VideoPlayer />
    </div>
  );
}

export default App;
