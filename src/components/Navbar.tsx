import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

export const Navbar = () => {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
              Maven Studio
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />
          </span>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://npmjs.com/package/maven-studio"
              target="_blank"
              className={`border flex items-center gap-3 ${buttonVariants({
                variant: "secondary",
              })}`}
            >
              <img src="/npm-logo-red.svg" className="w-8 h-8 mt-1" />
              <div>NPM Registry</div>
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
