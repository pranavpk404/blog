import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="m-5">
      <nav>
        <ul className="flex justify-between space-x-5">
          <li className="flex items-center ">
            <Link href="/">
              <img alt="logo" src="/logo.png" width="150" height="40" />
            </Link>
            <div className="hidden md:flex mx-5 items-center space-x-5">
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
              <Link href="/follow">
                <a className="text-white bg-green-600 rounded-full py-1 px-4 ">
                  Follow
                </a>
              </Link>
            </div>
          </li>
          <li className="flex items-center space-x-5">
            <Link href="/sign_in">
              <a className="">Sign In</a>
            </Link>
            <Link href="/get_started">
              <a className="border rounded-full py-1 px-4 border-green-600">
                Get Started
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
