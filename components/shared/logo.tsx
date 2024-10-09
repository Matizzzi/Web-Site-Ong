import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to homepage">
      <h1 className="text-3xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300">
        ONG
      </h1>
    </Link>
  );
};

export default Logo;
