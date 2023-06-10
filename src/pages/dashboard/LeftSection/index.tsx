import { useState, ChangeEvent, KeyboardEvent } from "react";
import { TextField, Button, Box, Container } from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import { setUserName } from "store/action/dashboard";
import { actionSearch } from "store/action/dashboard/actionSearch";
import { useAppDispatch } from "store/store";
import { Label, Description } from "components/Typography";
import {
  GridFromrecently,
  WrapperRecently,
  WrapperFirstInitialization,
} from "./style";
import { FirstInitializationSchema } from "interface/accordion";

import Git from "assets/img/git.png";

function LeftSection({ setIsFirstInitialization }: FirstInitializationSchema) {
  const dispatch = useAppDispatch();
  const [inputUserName, setInputUserName] = useState<string>("");
  const [recent, setRecent] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputUserName(event.target.value);
  };

  const handleRemoveRecently = (val: string) => {
    const temp = recent.filter((item) => val !== item);
    setRecent(temp);
  };

  const handleAddFromrecently = (val: string) => {
    setInputUserName(val);
  };
  const handleSearch = () => {
    if (!recent.includes(inputUserName)) {
      const temp = [inputUserName, ...recent];
      setRecent(temp);
    }
    setIsFirstInitialization(false);
    dispatch(setUserName(inputUserName));
    dispatch(actionSearch(inputUserName));
  };

  const handleKeypress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <Container>
      <TextField
        value={inputUserName}
        id="outlined-basic"
        label="Find a user github"
        variant="outlined"
        fullWidth
        onKeyDown={handleKeypress}
        onChange={handleChange}
        data-testid="input-user-name"
      />
      <Button
        disabled={!inputUserName}
        variant="contained"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={handleSearch}
        data-testid="button-search"
      >
        Search
      </Button>
      <WrapperRecently>
        {recent.length ? <Label>Recently searched :</Label> : <></>}
      </WrapperRecently>

      {recent.map((val: string, key: number) => (
        <GridFromrecently
          key={key}
          sx={{}}
          onClick={() => handleAddFromrecently(val)}
        >
          <Description sx={{ display: "flex", flex: 1, cursor: "pointer" }}>
            {val}
          </Description>

          <Box onClick={() => handleRemoveRecently(val)}>
            <DeleteOutlined sx={{ cursor: "pointer" }} />
          </Box>
        </GridFromrecently>
      ))}
      {recent.length > 0 && (
        <WrapperFirstInitialization>
          <img
            src={Git}
            alt="github-logo"
            style={{ height: "50%", width: "50%", opacity: 0.1 }}
          />
        </WrapperFirstInitialization>
      )}
    </Container>
  );
}

export default LeftSection;
