import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Robot_App/containers/App";
import * as serviceWorker from "./serviceWorker";
//import Card from "./Robot_App/Card";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
{
  /*
<div>
 
  manually....
  
  <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
  <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
  <Card id={robots[2].id} name={robots[1].name} email={robots[2].email} /> 

  
</div>
*/
}
