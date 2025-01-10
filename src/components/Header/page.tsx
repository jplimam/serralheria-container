import { IPropsLinks } from "@/interfaces/LinksInterface";
import Image from "next/image";
import Link from "next/link";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Header({
  home,
  about,
  projects,
  contact,
  partners,
}: Readonly<IPropsLinks>) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex self-center rounded-lg m-10 justify-between items-center w-3/4 h-20 bg-yellow-400 p-10">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={180}
          height={40}
          alt="logo"
          className="box-border"
          priority={true}
        />
      </Link>
      <div className="flex lg:hidden">
        <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex flex-col gap-0.5"
            >
              <span className="bg-black w-7 h-1.5 rounded-lg"></span>
              <span className="bg-black w-7 h-1.5 rounded-lg"></span>
              <span className="bg-black w-7 h-1.5 rounded-lg"></span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="bg-yellow-400 pb-6">
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <DrawerBody className="flex flex-col text-lg justify-center gap-5 opacity-80 font-semibold">
              <button
                className="hover:-translate-y-0.5 transition-all hover:text-white"
                onClick={() => {
                  home.current?.scrollIntoView();
                  setOpen(false);
                }}
              >
                HOME
              </button>
              <button
                className="hover:-translate-y-0.5 transition-all hover:text-white"
                onClick={() => {
                  partners.current?.scrollIntoView();
                  setOpen(false);
                }}
              >
                PARCEIROS
              </button>
              <button
                className="hover:-translate-y-0.5 transition-all hover:text-white"
                onClick={() => {
                  about.current?.scrollIntoView();
                  setOpen(false);
                }}
              >
                SOBRE NÓS
              </button>
              <button
                className="hover:-translate-y-0.5 transition-all hover:text-white"
                onClick={() => {
                  projects.current?.scrollIntoView();
                  setOpen(false);
                }}
              >
                PROJETOS
              </button>
              <button
                className="hover:-translate-y-0.5 transition-all hover:text-white"
                onClick={() => {
                  contact.current?.scrollIntoView();
                  setOpen(false);
                }}
              >
                CONTATO
              </button>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </div>
      <div className="hidden lg:flex gap-5 text-black opacity-80 font-semibold">
        <button
          className="hover:-translate-y-0.5 transition-all hover:text-white"
          onClick={() => home.current?.scrollIntoView()}
        >
          HOME
        </button>
        <button
          className="hover:-translate-y-0.5 transition-all hover:text-white"
          onClick={() => partners.current?.scrollIntoView()}
        >
          PARCEIROS
        </button>
        <button
          className="hover:-translate-y-0.5 transition-all hover:text-white"
          onClick={() => about.current?.scrollIntoView()}
        >
          SOBRE NÓS
        </button>
        <button
          className="hover:-translate-y-0.5 transition-all hover:text-white"
          onClick={() => projects.current?.scrollIntoView()}
        >
          PROJETOS
        </button>
        <button
          className="hover:-translate-y-0.5 transition-all hover:text-white"
          onClick={() => contact.current?.scrollIntoView()}
        >
          CONTATO
        </button>
      </div>
    </div>
  );
}
