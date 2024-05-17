import Head from "next/head";

export default function Acknowledgements() {
  return (
    <div>
      <Head>
        <title>The Blue Horizons - Acknowledgements</title>
      </Head>
      <main className="wrapper" aria-label="Content">
        <h1>Acknowledgements</h1>
        <p>
          Apart from expressing our deep gratitude to the various authors
          represented, we are also indebted to the following for permission to
          use the poems in this anthology:
          <br />
          BIM for <strong>Letter from England</strong> and{" "}
          <strong>Satirist</strong> by Mervyn Morris...
          <br />
          <br />
          To be transcribed.
        </p>
      </main>
    </div>
  );
}
