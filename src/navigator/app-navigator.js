import React from "react";
import AuthStack from "./auth-stack";
import MainStack from "./main-tab";

import { useSelector } from "react-redux";

function AppNavigator() {

  const isLoggedIn = useSelector((state) => state.crest.isLoggedIn);
  console.log(isLoggedIn);

  return <>{!isLoggedIn ? <AuthStack /> : <MainStack/>}</>;
}

export default AppNavigator;
