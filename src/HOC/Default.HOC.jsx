import React from "react";
import DefaultLayout from "../Layouts/Default.Layout";

const DefaultHOC = (Component) => {
  const NewComponent = (props) => (
    <>
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    </>
  );

  return NewComponent;
};

export default DefaultHOC;
