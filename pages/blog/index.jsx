import Head from "next/head";
import Image from "next/image";

const Blog = () => (
  <>
    <Head>
      <title>Samy Zogeyb Dev Blog</title>
    </Head>
    <main className="flex justify-center flex-col items-center w-screen h-screen px-4">
      <h1 className="mb-2">Under Construction</h1>
      <hr className="max-w-sm w-full mt-0" />
      <Image src="/road-block.png" alt="contruction barricade" width={150} height={150} />
    </main>
  </>
);

export default Blog;
