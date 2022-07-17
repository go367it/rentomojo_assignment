import React, { useContext } from "react";
import { Stack, Box, Button } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FilterContext from "../Context/FilterContext";
import ViewList from "@mui/icons-material/ViewList";
import IconButton from "@mui/material/IconButton";
import GridOn from "@mui/icons-material/GridOn";
import Tooltip from "@mui/material/Tooltip";

export default function FilterTools() {
  const { grid, handleGrid } = useContext(FilterContext);

  return (
    <Box
      sx={{
        padding: "10px",
      }}
    >
      <Stack direction="row" spacing={2}>
        {/* for sorting according to score  */}
        <ScoreFilter />

        {/* for displaying in grid or list layout  */}
        <IconButton
          onClick={() => handleGrid()}
          aria-label="layout"
          size="large"
        >
          {grid ? (
            <Tooltip title="List View">
              <ViewList color="primary" />
            </Tooltip>
          ) : (
            <Tooltip title="Grid View">
              <GridOn color="primary" />
            </Tooltip>
          )}
        </IconButton>
      </Stack>
    </Box>
  );
}

// function for alert slider
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// function for score filter button
export function ScoreFilter() {
  const { scoreState, changeScoreState } = useContext(FilterContext); // for handling the state of asc and desc according to score

  const [open, setOpen] = React.useState(false);

  // function to open the snackbar
  async function handleClick() {
    await changeScoreState(); // changing the state for handling ascending and descending order
    setOpen(true); // changing the state for opening the snackbar
  }

  // for closing the snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClick}>
        Score
        <ImportExportIcon />
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} sx={{ width: "100%" }}>
          {scoreState
            ? "Sorted in Ascending Order"
            : "Sorted in descending Order"}
        </Alert>
      </Snackbar>
    </>
  );
}
