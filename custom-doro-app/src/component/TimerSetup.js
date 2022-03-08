import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TimerSetup() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "15ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {" "}
        <TextField
          id="filled-number"
          label="Hours"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
      <div>
        {" "}
        <TextField
          id="filled-number"
          label="Minutes"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
    </Box>
  );
}
