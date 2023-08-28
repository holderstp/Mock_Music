import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetUserAction } from "../actions/user.action";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetUserAction());
  }, []);
  const userState = useSelector((state: any) => state.user);
  console.log("userState: ", userState);
  return (
    <Fragment>
      <h2>User Profile</h2>
    </Fragment>
  );
};

export default UserProfile;
