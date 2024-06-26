"use client";

import { AlignRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: true,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: true,
    },
  ];
  return (
    <header className="flex  justify-between h-16 w-full shrink-0 items-center">
      <Link href="/">
        <h1 className="text-lg font-semibold">JOBBER</h1>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        {menuItems.map((menuItems) =>
          menuItems.show ? (
            <Link
              href={menuItems.path}
              className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium"
            >
              {menuItems.label}
            </Link>
          ) : null
        )}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="border-0 lg:hidden">
            <AlignRight className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="outline-none border-0">
          <Link className="h-full w-full lg:flex flex-col" href={"#"}>
            <h3 className="text-center mt-5 w-full">JOBBER</h3>
            <div className="w-full h-full flex justify-center gap-5 flex-col">
              {menuItems.map((menuItems) =>
                menuItems.show ? (
                  <Link
                    href={menuItems.path}
                    className="flex w-full justify-center items-center hover:text-slate-400 py-2 text-lg font-semibold"
                  >
                    {menuItems.label}
                  </Link>
                ) : null
              )}
            </div>
          </Link>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
