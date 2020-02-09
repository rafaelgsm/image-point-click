import React from 'react';
import './App.css';

function App() {

  const handleClick = (event) => {
    var x = event.pageX - event.target.offsetLeft;
    var y = event.pageY - event.target.offsetTop;


    const imageWidth = event.target.clientWidth
    const imageHeight = event.target.clientHeight

    const x_percent = Math.round((100 * x / imageWidth) * 100) / 100
    const y_percent = Math.round((100 * y / imageHeight) * 100) / 100

    alert(`X = ${x_percent}%\nY = ${y_percent}%`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img onClick={handleClick} src="https://i.imgflip.com/7yhtr.jpg" alt="oh you" />
      </header>
    </div>
  );
}

export default App;
