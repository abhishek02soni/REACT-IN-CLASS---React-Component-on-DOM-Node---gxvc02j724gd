import React from "react";
import name from "./name";
import description from "./description";
const App = () => {
  return(
    <div id="main">
      <name data-ns-test="project-name"/>
      <description data-ns-test="project-description"/>
    </div>
  )
}
export default App;

