import "./App.css";
import React from "react";
import Header from "./Header/Header";
function App(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
      }}
      className="App"
    >
      <Header />
    </div>
  );
}

// export default App;

// class App extends React.Component {

//   constructor(props){
// super(props);
//     this.state = {};

//   }

//   render() {

//     return (
//       <div className="App">
//         <h1>Hello World</h1>
//       </div>
//     );
//   }
// }

export default App;
