import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [tweetKr, setTweetKr] = useState("");
  const [tweetJp, setTweetJp] = useState("");
  const [textFormat, setTextFormat] = useState(
    `＜簡単表現＞\n\n【韓国語】\n・${tweetKr}\n\n【日本語】\n・${tweetJp}\n\n#韓国語 #ハングル #korean #勉強`
  );

  useEffect(() => {
    setTextFormat(
      `＜簡単表現＞\n\n【韓国語】\n・${tweetKr}\n\n【日本語】\n・${tweetJp}\n\n#韓国語 #ハングル #korean #勉強`
    );
  }, [tweetKr, tweetJp]);

  const onHandleTweetValue = (e: any) => {
    e.preventDefault();
    switch (e.target.name) {
      case "tweetKr":
        setTweetKr(e.target.value);
        break;
      case "tweetJp":
        setTweetJp(e.target.value);
        break;
    }
  };

  const onTweet = async () => {
    const endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/twitter-manager`;

    try {
      const res = await axios.post(endpoint, textFormat);
      return {
        statusCode: 200,
        body: JSON.stringify(res),
      };
    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify(e),
      };
    }
  };

  return (
    <div className="App">
      <form className="tweet_form" action="">
        <div className="tweet_input_box">
          <TextField
            className="tweet_input"
            id="standard-basic"
            label="韓国語"
            variant="standard"
            name="tweetKr"
            onChange={onHandleTweetValue}
          />
        </div>
        <div className="tweet_input_box">
          <TextField
            className="tweet_input"
            id="standard-basic"
            label="日本語"
            variant="standard"
            name="tweetJp"
            onChange={onHandleTweetValue}
          />
        </div>
        <div className="tweet_button_box">
          <Button
            className="tweet_button"
            variant="contained"
            onClick={onTweet}
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
