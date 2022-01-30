import { useState } from "react";
import "./App.css";

import TweetForm from "./components/TweetForm";
import Header from "./components/Header";
import Alert from "@mui/material/Alert";
import axios from "axios";

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

  const onLikeTweet = async () => {
    const endpoint = `http://localhost:3000/likes`;

    try {
      const res = await axios.post(endpoint, { test: "#韓国語" });
      setMessage(res.data.data.body);
    } catch (e) {
      setMessage("ライクに失敗しました");
    }
  };

  return (
    <div className="App">
      <Header />
      <TweetForm defaultValues={defaultValues} setMessage={setMessage} />
      <button onClick={onLikeTweet}>Like</button>
      {message === "ツイートされました！！" && (
        <div className="status_bar">
          <Alert severity="success">{message}</Alert>
        </div>
      )}
      {message === "ライクしました！！" && (
        <div className="status_bar">
          <Alert severity="success">{message}</Alert>
        </div>
      )}
      {message === "ツイートに失敗しました" && (
        <div className="status_bar">
          <Alert severity="error">{message}</Alert>
        </div>
      )}
      {message === "ライクに失敗しました" && (
        <div className="status_bar">
          <Alert severity="error">{message}</Alert>
        </div>
      )}
    </div>
  );
};

export default App;
