import { useState } from "react";
import "./App.css";

import TweetForm from "./components/TweetForm";
import Header from "./components/Header";
import Alert from "@mui/material/Alert";

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
      <TweetForm defaultValues={defaultValues} setMessage={setMessage} />
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
