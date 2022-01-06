import React, { useReducer } from "react";
//import ReactDOM from "react-dom";

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "toggleSHOWTEXT":
            return {count: state.count, showText: !state.showText}
        default:
            return state

    }
}

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, {count:0, showText: true });  //input to useReducer can be a function that updates the state

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  const buttonStyle = {
      backgroundColor: "#4CAF50", /* Green */
      border: "none",
      color: "white",
      padding: "20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      cursor: "pointer",
      borderRadius: "12px"
    
  }

  const counterStyle = {
    padding: "40px",
    margin: "4px 2px"
  }

  return (
    <div>
      <h1 style={counterStyle}>{state.count}</h1>
      <button style={buttonStyle}
        type="button"
        onClick={() => {
            dispatch({ type: "INCREMENT"});
            dispatch({ type: "toggleSHOWTEXT"});
    }}
      >Click here</button>
      {state.showText && <p style={myStyle}>This is a text</p>}
    </div>
  );
};

//ReactDOM.render(<FavoriteColor />, document.getElementById('root'));
export default ReducerTutorial;