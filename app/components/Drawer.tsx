import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarCloseIcon, User2Icon } from "lucide-react";

const sidebarLInks = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/categories/phones",
    title: "Phones",
  },
  {
    link: "/categories/laptops",
    title: "Laptops",
  },
  {
    link: "/categories/accessories",
    title: "Accessories",
  },
  {
    link: "/categories/smart-watches",
    title: "Smart Watches",
  },
  {
    link: '/profile',
    title: 'User Profile',
  },
  {
    link: '/admin',
    title: 'Admin',
  },
];

const DrawerWrapper = () => {
  const path = usePathname();
  return (
    <div>
      <Drawer direction={"left"}>
        <DrawerTrigger className="flex justify-center items-center">
          <User2Icon className="cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent className="w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <DrawerHeader>
            <DrawerTitle>
              <DrawerClose>
                <Button
                  variant="outline"
                  className="flex justify-center items-center"
                >
                  <SidebarCloseIcon size={30} className="" />
                </Button>
              </DrawerClose>
            </DrawerTitle>
            <DrawerDescription className="overflow-y-scroll w-full">

              <div>
                <ul className="flex flex-col gap-5 py-10">
                  {sidebarLInks.map((item) => (
                    <li
                      key={item.title}
                      className={`${
                        path == item.link ? " px-2" : "rounded-md px-2"
                      } mx-5 py-3`}
                    >
                      <Link
                        href={item.link}
                        className="flex gap-5 justify-between items-center text-md md:text-2xl"
                      >
                        {/* {<item.icon />} */}
                        <div className="flex justify-start w-full md:w-[80%] text-left">
                          {item.title}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerWrapper;
