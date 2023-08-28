import { AppBar, Toolbar, Typography } from "@mui/material";

const HeaderRedux = () => {
  return (
    <AppBar position="static">
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h4"></Typography>
        <Typography variant="caption">Username:</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderRedux;
