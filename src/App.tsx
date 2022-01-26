import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import Header from "./components/Header";

function App() {
  const [tweetKr, setTweetKr] = useState<string>("");
  const [tweetJp, setTweetJp] = useState<string>("");
  const [textFormat, setTextFormat] = useState<string>(
    `＜簡単表現＞\n\n【韓国語】\n・${tweetKr}\n\n【日本語】\n・${tweetJp}\n\n#韓国語 #ハングル #korean #勉強`
  );
  const [tempNum, setTempNum] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const templates: string[] = [
    `＜簡単表現＞\n\n【韓国語】\n・${tweetKr}\n\n【日本語】\n・${tweetJp}\n\n#韓国語 #ハングル #korean #勉強`,
    `＜一言フレーズ一覧＞\n\n【日本語】\n・${tweetKr}\n\n【韓国語】\n・${tweetJp}`,
    `＜長文＞\n\n【日本語】\n・${tweetKr}\n\n【韓国語】\n・${tweetJp}`,
  ];

  useEffect(() => {
    setTextFormat(templates[tempNum]);
  }, [tweetKr, tweetJp, tempNum]);

  useEffect(() => {
    if (message === "ツイートされました！！") {
      setTweetKr("");
      setTweetJp("");
    }
  }, [message]);

  const onHandleTweetValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

  // const handleChangeTemplate = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setTempNum(e.target.value);
  // };

  const onTweet = async (): Promise<void> => {
    const endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/twitter-manager`;

    try {
      const res = await axios.post(endpoint, textFormat);
      setMessage(res.data);
    } catch (e) {
      setMessage("ツイートに失敗しました");
    }
  };

  return (
    <div className="App">
      <Header />
      <form className="tweet_form" action="">
        <div className="tweet_input_box">
          <TextField
            className="tweet_input"
            id="standard-basic"
            label="韓国語"
            variant="standard"
            name="tweetKr"
            onChange={onHandleTweetValue}
            value={tweetKr}
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
            value={tweetJp}
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
      {/* <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={tempNum}
        onChange={handleChangeTemplate}
        autoWidth
        label="Format"
      >
        <MenuItem value={1l}>簡単表現</MenuItem>
        <MenuItem value={2}>一言フレーズ一覧</MenuItem>
        <MenuItem value={3}>長文</MenuItem>
      </Select> */}
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
}

export default App;
