import { Box, Tab, Tabs } from "@mui/material";
import { Fragment, ReactNode, SyntheticEvent, useState } from "react";
import HeaderRedux from "./HeaderRedux";
import CounterRedux from "./CounterRedux";
import FooterRedux from "./FooterRedux";
import AcademyInfo from "./Academy";
import UserProfile from "./User";

const ReduxComponent = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <HeaderRedux />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            {/* <Tab label="User Profile"></Tab> */}
            <Tab label="Counter"></Tab>
            <Tab label="Academy Info"></Tab>
            <Tab label="User Profile"></Tab>
          </Tabs>
        </Box>
        {/* <CustomTabPanel value={value} index={0}>
          <UserProfile />
        </CustomTabPanel> */}
        <CustomTabPanel value={value} index={0}>
          <CounterRedux />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AcademyInfo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <UserProfile />
        </CustomTabPanel>
      </Box>
      <FooterRedux />
    </Fragment>
  );
};
interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default ReduxComponent;
