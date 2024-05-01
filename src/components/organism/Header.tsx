import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="bg-white h-[80px] w-full">
      <div className="container h-full">
        <div className="flex items-center h-full justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex items-center gap-8 font-normal ">
              <li>
                <Link href="/auction">New Auction</Link>
              </li>
              <li>
                <Link href="/tender">New Tender</Link>
              </li>{" "}
              <li>
                <Link href="/">Menu item</Link>
              </li>{" "}
              <li>
                <Link href="/">Menu item</Link>
              </li>{" "}
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/register">
                  <Button className="px-6">Get started</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
