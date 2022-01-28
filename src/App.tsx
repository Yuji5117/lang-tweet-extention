import { useState } from "react";
import axios from "axios";
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

  const onTweet = async (vocab: any): Promise<void> => {
    const { tweetKr, tweetJp } = vocab;
    const endpoint = `http://localhost:3000/tweet`;
    // const endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/twitter-manager`;

    try {
      const res = await axios.post(endpoint, { tweetKr, tweetJp });
      setMessage(res.data.data.body);
    } catch (e) {
      setMessage("ツイートに失敗しました");
    }
  };

  return (
    <div className="App">
      <Header />
      <Form defaultValues={defaultValues} onTweet={onTweet} />
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
