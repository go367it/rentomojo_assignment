import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

export default function DetailsCard(props) {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        border: '1px solid #29b6f6',
        backgroundColor:'#e1f5fe'
      }}
    >
      <CardContent>
        <Typography sx={{ color: "#03a9f4" }} variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary">
          {props.platform}
        </Typography>
        <Typography variant="body2">
          <Stack direction="row" spacing={1}>
            <Tooltip title="Overall Score" placement="top" arrow>
              <Chip
                sx={{
                  backgroundColor: "#ffebee",
                  color: "#e53935",
                  border: "1px solid #e53935",
                }}
                label={props.score}
              />
            </Tooltip>
            <Tooltip title="Editors choice" placement="top" arrow>
              <Chip
                sx={{
                  backgroundColor: "#e8f5e9",
                  color: "#43a047",
                  border: "1px solid #43a047",
                }}
                label={props.editors_choice === "N" ? "No" : "Yes"}
              />
            </Tooltip>
            <Tooltip title="Genre of the game" placement="top" arrow>
              <Chip
                sx={{
                  backgroundColor: "#e1f5fe",
                  color: "#039be5",
                  border: "1px solid #039be5",
                }}
                label={props.genre}
              />
            </Tooltip>
          </Stack>
        </Typography>
      </CardContent>
    </Card>
  );
}
