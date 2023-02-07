import { Button } from "antd";
import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment,getTest, amend} from '../../redux/user'
import { AppDispatch, RootState } from "../../redux";
const Home: FC = () => {
  const name = useSelector<RootState, string>((state) => state.user.name);
  const testAsync = useSelector<RootState, string>(
    (state) => state.user.testAsync
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      name <div>{name}</div>
      testAsync<div>{testAsync}</div>
      <hr />
        <Button onClick={()=>dispatch(increment())}>=== name</Button>
        <Button onClick={()=>dispatch(amend('小黄'))}>amend name</Button>
        <Button onClick={()=>dispatch(getTest())}>amend name</Button>
    </>
  );
};
export default Home;
