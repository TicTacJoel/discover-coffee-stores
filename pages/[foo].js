import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const Foobar = () => {
  const router = useRouter();
  const query = router.query.foo;
  console.log("query", query);
  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      Hi there I am a dynamic route: {query}
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Foobar;
