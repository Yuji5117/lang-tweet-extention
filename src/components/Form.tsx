import { Controller, useForm } from "react-hook-form";
import axios from "axios";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface IFormTypes {
  tweetKr: string;
  tweetJp: string;
}

interface DefaultValues {
  tweetKr: string;
  tweetJp: string;
}

interface TypeProps {
  defaultValues: DefaultValues;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<TypeProps> = ({ defaultValues, setMessage }) => {
  const { handleSubmit, control, reset } = useForm<IFormTypes>();

  const onTweet = async (vocabs: DefaultValues): Promise<void> => {
    const { tweetKr, tweetJp } = vocabs;
    const endpoint = `http://localhost:3000/tweet`;
    // const endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/twitter-manager`;

    try {
      const res = await axios.post(endpoint, { tweetKr, tweetJp });
      setMessage(res.data.data.body);
      reset();
    } catch (e) {
      setMessage("ツイートに失敗しました");
      reset();
    }
  };

  return (
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
  );
};

export default Form;
