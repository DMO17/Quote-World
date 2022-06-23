import classes from "./style.module.css";

import { Fragment } from "react";

import { MainNavigation } from "../MainNavigation";

export const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};
