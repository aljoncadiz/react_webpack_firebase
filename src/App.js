import React from "react";
import ReactDOM from "react-dom";
import './_variables.scss'
import './_common.scss'
import './_App.scss'
const App = () => {
  return (
    <div>
      <p>React here!!!! hot reload test</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));