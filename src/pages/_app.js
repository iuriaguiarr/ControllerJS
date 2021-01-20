import Head from "next/head";
import Global from "../../public/Global";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&family=Roboto:wght@100;400;900&display=swap"
          rel="stylesheet"
        />
        <link href="/cubic.ttf" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>ControllerJS</title>
      </Head>
      <Global />
      <Component {...pageProps} />
    </>
  );
}
