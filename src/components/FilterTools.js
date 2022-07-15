import React,{useState} from "react";
import { Stack, Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterTools = () => {

    const [score, setScore] = useState('');
    const [platform, setPlatform] = useState('')

  const handleChangeScore = (event) => {
    setScore(event.target.value);
  };

  const handleChangePlatform = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: "10px",
      }}
    >
      <Stack direction="row" spacing={2}>

        {/* for selecting score  */}

        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Score</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={score}
            label="Age"
            onChange={handleChangeScore}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        {/* for selecting platform  */}

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Platform</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={platform}
            label="Age"
            onChange={handleChangePlatform}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default FilterTools;
