"use client";

import { AlignRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
const Header = ({ user, profileInfo }) => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: !user,
    },
    {
      label: "Job",
      path: "/jobs",
      show: user,
    },
    {
      label: "Activity",
      path: "/activity",
      show: profileInfo?.role === "candidate",
    },
    {
      label: "Membership",
      path: "/membership",
      show: user,
    },
    {
      label: "Account",
      path: "/account",
      show: user,
    },
  ];
  return (
    <header className="flex  justify-between h-16 w-full shrink-0 items-center">
      <Link href="/">
        <h1 className=" text-lg font-semibold">JOBBER</h1>
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

        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonTrigger: "focus:shadow-none",
              userButtonAvatarBox: "w-10 h-10",
              userButtonOuterIdentifier:
                "font-semibold text-slate-600 capitalize text-lg mr-2 text-start",
            },
          }}
        />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="border-0 lg:hidden">
            <AlignRight className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="outline-none border-0 focus:shadow-none focus:outline-none focus:border-0"
        >
          <Link className="h-full w-full lg:flex flex-col" href={"#"}>
            <h3 className="text-center font-bold text-lg mt-5 w-full">
              JOBBER
            </h3>
            <div className="w-full h-full flex px-10 justify-center gap-5 flex-col">
              <UserButton
                afterSignOutUrl="/"
                showName
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-14 h-14",
                    userButtonBox: "flex-row-reverse",
                    userButtonOuterIdentifier:
                      "font-bold capitalize  text-lg ml-4 text-start",
                    userButtonTrigger: "focus:shadow-none",
                  },
                }}
              />
              {menuItems.map((menuItems) =>
                menuItems.show ? (
                  <Link
                    href={menuItems.path}
                    className="hover:text-slate-400 py-2 text-lg font-semibold"
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
