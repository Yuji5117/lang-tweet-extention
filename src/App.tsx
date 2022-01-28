import { useState } from "react";
import "./App.css";

import Alert from "@mui/material/Alert";
import Header from "./components/Header";
import Form from "./components/Form";

interface DefaultValues {
  tweetKr: string;
  tweetJp: string;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const defaultValues: DefaultValues = {
    tweetKr: "",
    tweetJp: "",
  };

  return (
    <div className="App">
      <Header />
      <Form defaultValues={defaultValues} setMessage={setMessage} />
      {message === "ツイートされました！！" && (
        <div className="status_bar">
          <Alert severity="success">{message}</Alert>
        </div>
      )}
      {message === "ツイートに失敗しました" && (
        <div className="status_bar">
          <Alert severity="error">{message}</Alert>
        </div>
      )}
    </div>
  );
};

export default App;
