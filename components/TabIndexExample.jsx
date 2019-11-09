import React from "react";
import {
  TextField,
  Button,
  Link,
  Select,
  FormControl,
  InputLabel
} from "@material-ui/core";

const TabIndexExample = () => (
  <React.Fragment>
    <div>
      <Link href="#anchor">Anchor</Link>
    </div>
    <div>
      <Button variant="contained" color="primary">
        Button
      </Button>
    </div>
    <div>
      <TextField
        id="outlined-basic"
        label="Input"
        margin="normal"
        variant="outlined"
      />
    </div>
    <div>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Select</InputLabel>
        <Select
          native
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple"
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
    <div>
      <TextField
        id="outlined-multiline-static"
        label="Textarea"
        multiline
        rows="4"
        margin="normal"
        variant="outlined"
      />
    </div>
  </React.Fragment>
);

export default TabIndexExample;
