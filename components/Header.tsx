import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="m-5">
      <nav>
        <ul className="flex justify-between space-x-5">
          <li className="flex items-center ">
            <Link href="/">
              <a>
                <Image alt="logo" src="/logo.png" width="150" height="40" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
