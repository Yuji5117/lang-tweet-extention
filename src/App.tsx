import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import Header from "./components/Header";

interface IFormTypes {
  tweetKr: string;
  tweetJp: string;
}

interface DefaultValues {
  tweetKr: string;
  tweetJp: string;
}

function App() {
  const [message, setMessage] = useState<string>("");
  const { handleSubmit, control } = useForm<IFormTypes>();

  const defaultValues: DefaultValues = {
    tweetKr: "",
    tweetJp: "",
  };

  const onTweet = async (vocab: any): Promise<void> => {
    console.log("vocab", vocab);
    const { tweetKr, tweetJp } = vocab;
    const endpoint = `http://localhost:3000/tweet`;
    // const endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/twitter-manager`;

    try {
      const res = await axios.post(endpoint, { tweetKr, tweetJp });
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
          <Controller
            name="tweetKr"
            defaultValue={defaultValues.tweetKr}
            control={control}
            render={({ field }) => (
              <TextField
                className="tweet_input"
                id="standard-basic"
                variant="standard"
                label="韓国語"
                {...field}
              />
            )}
          />
        </div>
        <div className="tweet_input_box">
          <Controller
            name="tweetJp"
            defaultValue={defaultValues.tweetJp}
            control={control}
            render={({ field }) => (
              <TextField
                className="tweet_input"
                id="standard-basic"
                variant="standard"
                label="日本語"
                {...field}
              />
            )}
          />
        </div>
        <div className="tweet_button_box">
          <Button
            className="tweet_button"
            variant="contained"
            onClick={handleSubmit((fields) => onTweet(fields))}
          >
            Tweet
          </Button>
        </div>
      </form>
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
