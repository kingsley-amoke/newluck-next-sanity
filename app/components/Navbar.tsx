"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, User2Icon } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

import { cn } from "@/lib/utils";
import { ToggleTheme } from "./ToggleTheme";
import DrawerWrapper from "./Drawer";

const links = [
  { name: "Phones", href: "/phones" },
  { name: "Laptops", href: "/laptops" },
  { name: "Accessories", href: "/accessories" },
  { name: "Smart Watches", href: "/smart-watches" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl my-5">
        <Link href={`/`}>
          <h1 className="text-3xl md:text-5xl font-extrabold font-mono text-blue-400">
            New
            <span className="text-red-600 font-serif font-thin text-xl">
              Luck
            </span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map(({ name, href }, idx) => (
            <div key={idx}>
              <Link
                href={`/categories${href}`}
                className={cn(
                  "text-lg font-semibold hover:text-primary text-gray-600 transition",
                  pathname === href && "text-primary"
                )}
              >
                {name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex justify-center items-center gap-2">
          <Search className="cursor-pointer mr-2" />

          <DrawerWrapper />

          <ToggleTheme />

          <ShoppingBag
            onClick={() => handleCartClick()}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
