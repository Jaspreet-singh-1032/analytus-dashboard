import "../styles/globals.css";
import "antd/dist/antd.css";
import "../styles/AppLayout.css";

// layout import
import AppLayout from "../layouts/AppLayout";

function MyApp({ Component, pageProps }) {
  return (
    // use app layout here to prevent layout re-render on page navigation.
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
