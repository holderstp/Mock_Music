import { AppBar, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { changeTheme } from "../actions/theme.action";
import { useDispatch } from "react-redux";

const FooterRedux = () => {
  useEffect(() => {
    console.log("Footer rendering");
  });
  const themeState = useSelector((state: any) => state.themeReducer);
  const dispatch = useDispatch();
  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{ top: "auto", bottom: 0 }}
      style={{ background: themeState.currentTheme }}
    >
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h4">Footer</Typography>
        {/* <Typography variant="caption">Counter computed:</Typography> */}
        <ButtonGroup
          color="secondary"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              dispatch(changeTheme("blue"));
            }}
          >
            Blue
          </Button>
          <Button
            onClick={() => {
              dispatch(changeTheme("purple"));
            }}
            variant="contained"
          >
            Purple
          </Button>
        </ButtonGroup>
        <Typography variant="caption">Counter action:</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default FooterRedux;
