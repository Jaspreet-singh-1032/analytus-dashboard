import Head from "next/head";

import { BRAND_NAME } from "../constants";

// components imports
import AppLayout from "../layouts/AppLayout";
import Dashboard from "../dashboard/Dashboard";

export default function Home() {
  return (
    <Dashboard/>
    // <div>
    //   <Head>
    //     <title>{BRAND_NAME}</title>
    //     <meta name="description" content={BRAND_NAME} />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <AppLayout>main</AppLayout>
    // </div>
  );
}
