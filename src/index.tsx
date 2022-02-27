import "bulmaswatch/superhero/bulmaswatch.min.css";
import ReactDOM from "react-dom";
import CodeCell from "./components/code-sell";
import TextEditor from "./components/text-editor";

const App = () => {
  return (
    <div>
      <TextEditor />
      <CodeCell />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
