import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increaseCountA, increaseCountB } from "../actions/counter.action";

const CounterRedux = () => {
  const dispatch = useDispatch();
  const counterState: any = useSelector((state: any) => state.counterReducer);
  console.log("counterState", counterState);
  const academyState: any = useSelector((state: any) => state.academyReducer);
  console.log("academyState", academyState);
  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          dispatch(increaseCountA(2));
        }}
      >
        Add count number A
      </Button>
      <Typography className="ml-2 mr-2 mb-2 mt-2">
        Counter number A: {counterState.countA}
      </Typography>
      <Typography className="ml-2 mr-2 mb-2">
        Total: {counterState.total}
      </Typography>
      <Typography className="ml-2 mr-2 mb-2">
        Counter number B: {counterState.countB}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          dispatch(increaseCountB(3));
        }}
      >
        Add count number B
      </Button>
      <div>Data:</div>
    </div>
  );
};
export default CounterRedux;
