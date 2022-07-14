import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

export default function DetailsCard(props) {
  return (
    <Card variant="outlined" 
    sx={{ 
      minWidth: 275,
    }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.platform}
        </Typography>
        <Typography variant="body2">
          <Stack direction="row" spacing={1}>
            <Tooltip title="Genre of the game" placement="top" arrow>
              <Chip label={props.genre} />
            </Tooltip>
            <Tooltip title="Overall Score" placement="top" arrow>
              <Chip label={props.score} />
            </Tooltip>
            <Tooltip title="Editors choice" placement="top" arrow>
              <Chip label={props.editors_choice} />
            </Tooltip>
          </Stack>
        </Typography>
      </CardContent>
    </Card>
  );
}
