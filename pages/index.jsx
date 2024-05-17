import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Caribbean Voices. Volume 2: The Blue Horizons</title>
      </Head>
      <main className="wrapper" aria-label="Content">
        <h1>CARIBBEAN VOICES</h1>

        <p>An Anthology of West Indian Poetry</p>

        <p>Volume 2, The Blue Horizons</p>

        <p>
          Originally published by Evans Brothers Limited,{" "}
          <a href="https://find-and-update.company-information.service.gov.uk/company/00128615">
            who have filed for insolvency
          </a>
          .
        </p>

        <p>
          <strong>
            <Link href="dedication">Dedication</Link>
          </strong>
          ,{" "}
          <strong>
            <Link href="acknowledgements">Acknowledgements</Link>
          </strong>
          .
        </p>

        <p>
          <Link href="about">Learn more about this site</Link>.
        </p>

        <h2>Contents</h2>

        <h3>Part One: Over here - consolidation</h3>
        <br />
        <p>
          <em>'Where shall I turn, divided to the vein?'</em>
          Wallcott
          <br />
          <br />
          <br />
          <em>
            'Look at the land, the psalms
            <br />
            Singing for our sons beyond the
            <br />
            fever of the years.'
          </em>
          Williams
        </p>
        <br />

        <p>
          <Link
            className="contents-list__poem-link"
            href="/columbus-by-louis-simpson"
          >
            Columbus
          </Link>
          <br />
          <em>LOUIS SIMPSON</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/after-the-fall-by-gloria-escoffery"
          >
            After the Fall
          </Link>
          <br />
          <em>GLORIA ESCOFFERY</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/song-for-my-brothers-and-cousins-a-l-hendriks"
          >
            Song for my brothers and cousins
          </Link>
          <br />
          <em>A. L. HENDRIKS</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/letter-for-a-friend-by-daniel-williams"
          >
            Letter for a friend
          </Link>
          <br />
          <em>DANIEL WILLIAMS</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/god-rest-ye-merry-gentlemen-by-derek-walcott"
          >
            God rest ye merry gentlemen
          </Link>
          <br />
          <em>DEREK WALCOTT</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/acceptance-by-neville-davis"
          >
            Acceptance
          </Link>
          <br />
          <em>NEVILLE DAWES</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/the-old-convict-by-h-a-vaughan"
          >
            The old convict
          </Link>
          <br />
          <em>H. A. VAUGHAN</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/on-worthing-beach-by-albert-gomes"
          >
            On Worthing beach
          </Link>
          <br />
          <em>ALBERT GOMES</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/peasants-hope-for-emancipation-by-a-n-forde"
          >
            Peasant&#39;s hope for emancipation
          </Link>
          <br />
          <em>A. N. FORDE</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/croton-leaves-by-gloria-escoffery"
          >
            Croton leaves
          </Link>
          <br />
          <em>GLORIA ESCOFFERY</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/epiphanies-by-john-figueroa"
          >
            Epiphanies
          </Link>
          <br />
          <em>JOHN FIGUEROA</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/the-day-the-nation-mourned-by-dennis-craig"
          >
            The day the nation mourned
          </Link>
          <br />
          <em>DENNIS CRAIG</em>
        </p>
        <p>
          <Link
            className="contents-list__poem-link"
            href="/le-petit-paysan-modigliani-by-barbara-ferland"
          >
            Le petit paysan (Modigliani)
          </Link>
          <br />
          <em>BARBARA FERLAND</em>
        </p>
      </main>
    </div>
  );
}
