import React from "react";
import styles from "../styles/SideNavbar.module.css";

import Link from "next/link";

const SideNavbar = () => {
  return (
    <div className={styles.sidenav}>
      <Link href="lists">List</Link>
      <Link href="charts">Charts</Link>
      <Link href="funnel">Funnel</Link>
    </div>
  );
};

export default SideNavbar;
