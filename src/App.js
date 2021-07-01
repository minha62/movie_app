import React from 'react';

function Movie({ fav }) { //props.fav == {fav}
  return <h3>I like {fav}</h3>;
}

const movieILike = [
  {}
]

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Movie fav="marvel" />
      <Movie fav="disney" />
      <Movie fav="ateez" />
    </div>
  );
}

export default App;
