import { Controller, useForm } from "react-hook-form";

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
  onTweet: any;
}

const Form: React.FC<TypeProps> = ({ defaultValues, onTweet }) => {
  const { handleSubmit, control } = useForm<IFormTypes>();

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
