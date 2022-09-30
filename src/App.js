// import logo from "./logo.svg";
import "./App.css";
import Exercise from "./component/Exercise/Exercise";
import Header from "./component/Header/Header";
import Question from "./component/Question/Question";

function App() {
  return (
    <div>
      <Header></Header>
      <Exercise></Exercise>
      <Question></Question>
    </div>
  );
}

export default App;
