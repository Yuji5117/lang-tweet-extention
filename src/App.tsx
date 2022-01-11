import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tweetKr, setTweetKr] = useState("");
  const [tweetJp, setTweetJp] = useState("");
  const [textFormat, setTextFormat] = useState(
    `＜簡単表現＞\n\n【韓国語】\n・${tweetKr}\n\n【日本語】\n・${tweetJp}`
  );

  useEffect(() => {
    setTextFormat(`＜簡単表現＞\n\n【韓国語】\n・${tweetKr}\n\n【日本語】\n・${tweetJp}`);
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
      <form action="">
        <div className="tweet_form">
          <div>
            <input type="text" name="tweetKr" onChange={onHandleTweetValue} />
          </div>
          <div>
            <input type="text" name="tweetJp" onChange={onHandleTweetValue} />
          </div>
          <button onClick={onTweet}>Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default App;
