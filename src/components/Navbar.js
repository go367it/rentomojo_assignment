import * as React from "react";
import { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SearchContext from "../Context/SearchContext";
import GameContext from "../Context/GameContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const { search, handleSearch } = useContext(SearchContext); // global search state
  const { updateDetails, backupDetails } = useContext(GameContext); // global gameDetails state

  // when user presss enter on the keyboard
  const handleEnter = () => {
    const data = backupDetails;
    // when input field is not empty
    if (search != "") {
      let searchResult = [];
      data.forEach((element) => {
        const result = element.title.search(search);
        if (result != -1) {
          searchResult.push(element);
        }
      });
      // console.log(searchResult);
      updateDetails(searchResult);
    } 
    // when userfield is empty
    else {
      updateDetails(data);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Game World
          </Typography>
          <Search>
            <SearchIconWrapper
              sx={{
                cursor: "pointer",
              }}
            >
              <SearchIcon
                sx={{
                  cursor: "pointer",
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              onKeyDown={(e) => e.key === "Enter" && handleEnter()}
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
