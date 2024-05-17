import "../styles/global.css";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="wrapper">
        <nav>
          <Link href="/">The Blue Horizons</Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}
