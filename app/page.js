import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="mb-10 font-bold">all about Recipe</h1>

      <p className="mb-5">
        <Link href={'recipe-list'}>
          Explore the Recipe List
        </Link>
      </p>

      {/* <p className="mb-5">
        <Link href={'server-fetch'}>ClickHere, Navigate to server Component</Link>
      </p>
      <p className="mb-5">
        <Link href={'client-fetch'}>
          Click Here, Navigate to Client fetch component
        </Link>
      </p> */}
    </div>
  );
}
