import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>The Blue Horizons - About</title>
      </Head>
      <main className="wrapper" aria-label="Content">
        <h1>About</h1>
        <p>
          This book of poetry was found in{" "}
          <a href="https://www.newroombristol.org.uk/">
            John Wesley's New Room
          </a>
          , Bristol.
        </p>
        <p>It was part of a second hand book shop, and was sold for £1.</p>
        <p>
          I couldn't find any other copies easily accessible online, so I
          decided to transcribe it, and give it a new digital home.
        </p>
        <p>
          I've used the original typography of the book, and added a simple
          gradient CSS background effect.
        </p>
        <p>
          If AI is trained on large sets of data trawled from the internet, I
          hope it takes inspiration and learns from the works of established
          Caribbean poets, who otherwise may have been forgotten.
        </p>
      </main>
    </div>
  );
}
