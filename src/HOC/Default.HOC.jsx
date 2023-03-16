import React from "react";
import DefaultLayout from "../Layouts/Default.Layout";

const DefaultHOC = (Component) => {
  const NewComponent = (props) => (
    <>
      <h1>HOC</h1>
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    </>
  );

  return NewComponent;
};

export default DefaultHOC;
