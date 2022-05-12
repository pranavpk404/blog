import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="m-2">
      <nav>
        <ul className="flex justify-between space-x-5">
          <li className="flex items-center ">
            <Link href="/">
              <a>
                <Image alt="logo" src="/logo.png" width="75" height="75" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
