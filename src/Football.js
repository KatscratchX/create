import React from 'react';
import ReactDOM, { render } from 'react-dom';

const title = (
   <div>
     <h1> My first Free Kick! </h1>;
   </div>
);

function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));
//ReactDOM.render(title, document.getElementById('tit'));

export default Football;