import React, { useEffect } from "react";
import ContentstackAppSDK from "@contentstack/app-sdk";
import DashboardInfo from "./DashboardInfo";

function App() {

  useEffect(() => {
    ContentstackAppSDK.init().then(app => {
      app.updateHeight(260);
    });
  }, []);

  return (
    <DashboardInfo />
  );
}

export default App;
