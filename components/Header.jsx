import React from "react";
import styles from "../styles/Header.module.css";
import { BRAND_NAME } from "../constants";

const Header = () => {
  return <div className={styles.header}> {BRAND_NAME}</div>;
};

export default Header;
