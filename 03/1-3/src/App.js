import "./App.css";
import { Button, Input, TextArea } from "./Components";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function App() {
  const buttonProps = {
    label: "Example label",
    bgColor: "carrot",
    color: "green",
    icon: { faUser },
  };

  const inputProps = {
    bgColor: "carrot",
    color: "silver",
    borderSize: "3px",
    borderRadius: 10,
    borderColor: "emerald",
  };

  const textAreaProps = {
    bgColor: "carrot",
    color: "silver",
    borderSize: "3px",
    borderRadius: 10,
    borderColor: "emerald",
  };

  return (
    <div className="App">
      <p>
        <p>Button:</p>
        <Button {...buttonProps}>Children label</Button>
      </p>
      <p>
        <p>Input type text:</p>
        <Input {...inputProps} />
      </p>
      <p>
        <p>TextArea:</p>
        <TextArea {...textAreaProps}> Example test</TextArea>
      </p>
    </div>
  );
}

export default App;
