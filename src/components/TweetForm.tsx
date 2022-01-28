import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

const TweetForm: React.FC<TypeProps> = ({ defaultValues, setMessage }) => {
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
    <Form>
      <TextInput>
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
      </TextInput>
      <TextInput>
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
      </TextInput>
      <ButtonContainer>
        <Button
          className="tweet_button"
          variant="contained"
          onClick={handleSubmit((fields) => onTweet(fields))}
        >
          Tweet
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default TweetForm;

const Form = styled.form`
  width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextInput = styled.div`
  padding-bottom: 40px;
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
`;
