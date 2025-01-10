"use client";

import Carrousel from "@/components/Carrousel/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import InfiniteSlider from "@/components/InfiniteSlider/page";
import Reveal from "@/components/Reveal/page";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const home = useRef<HTMLDivElement | null>(null);
  const partners = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLDivElement | null>(null);
  const projects = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-bannerImg bg-repeat bg-cover bg-bottom">
      <div className="flex flex-col w-full items-end h-screen bg-blackOverlay">
        <Header
          home={home}
          partners={partners}
          about={about}
          projects={projects}
          contact={contact}
        />
        <div ref={home} className="flex justify-center w-screen flex-col">
          <span className="w-5/12 text-center self-center justify-center m-10 lg:w-2/12">
            Website oficial da Serralheria Container
          </span>
          <h2 className="text-center text-white text-4xl lg:text-8xl font-bold">
            Bem-vindo à<br /> SERRALHERIA CONTAINER!
          </h2>
          <span className="lg:w-4/12 text-center justify-center m-10 self-center">
            Aprecie o melhor da Engenharia Civil e<br /> serralheria de alto
            padrão para seus negócios
          </span>
          <button
            onClick={() => about.current?.scrollIntoView()}
            className="bg-yellow-400 p-4 text-black text-opacity-80 self-center font-semibold rounded-lg hover:text-white"
          >
            Conheça-nos
          </button>
          <Link
            href="https://tailwindcss.com/docs/border-radius"
            target="_blank"
            className="flex justify-center m-10 text-center gap-2 hover:gap-5 transition-all"
          >
            <span>Entre em contato</span>
            <Image
              src="/right-arrow-svgrepo-com (1).svg"
              width={10}
              height={10}
              alt="arrow icon"
            />
          </Link>
          <div className="w-screen">
            <Reveal>
              <Image
                src="/tetomain.png"
                width={3000}
                height={2000}
                alt="roof"
              />
            </Reveal>
          </div>
          <div ref={partners}></div>
          <span className="lg:w-4/12 text-center justify-center self-center m-10">
            ALGUNS DE NOSSOS PARCEIROS
          </span>
          <div
            ref={about}
            className="w-screen h-40 text-center flex justify-center bg-stone-800 py-10"
          >
            <InfiniteSlider />
          </div>
          <Reveal>
            <span className="w-3/4 self-center h-0.5 opacity-60 mt-10 bg-yellow-400"></span>
          </Reveal>
          <Reveal>
            <div className="container flex text-center w-3/4 lg:justify-center lg:text-start flex-col lg:flex-row mt-10 mb-20 gap-8 lg:gap-16">
              <div className="flex flex-col gap-6 lg:w-2/4">
                <h2 className="font-bold text-3xl lg:text-5xl">Sobre nós</h2>
                <span className="text-sm lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </span>
              </div>
              <Image
                src="/fabiano.png"
                width={400}
                height={350}
                alt="fabiano"
                className="rounded-lg"
              />
            </div>
          </Reveal>
          <div
            ref={projects}
            className="w-screen h-40 items-center text-center flex justify-center bg-yellow-400 py-10"
          >
            <h2 className="font-bold text-4xl lg:text-5xl text-black">
              Alguns projetos
            </h2>
          </div>
          <Carrousel />
          <Reveal>
            <div ref={contact} className="w-screen flex justify-center py-28">
              <div className="text-center flex flex-col bg-yellow-400 w-2/3 lg:w-auto p-10 rounded-xl gap-6">
                <Link
                  href="https://fonts.google.com/"
                  className="self-center"
                  target="_blank"
                >
                  <Image
                    src="/zap.png"
                    width={45}
                    height={45}
                    alt="whatsapp"
                    className="bg-black rounded-full p-2"
                  />
                </Link>
                <h2 className="font-bold text-3xl lg:text-5xl text-black">
                  Entre em contato
                </h2>
                <span className="text-black font-medium text-xl lg:text-3xl">
                  Sinta-se à vontade para ligar ou enviar
                  <br />
                  um e-mail pelos seguintes canais:
                </span>
                <div className="flex items-center justify-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="40"
                    viewBox="0 0 43 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.59728 8.75L5.27783 10V30L6.59728 31.25H35.6251L36.9445 30V10L35.6251 8.75H6.59728ZM7.91672 12.8258V28.75H34.3056V12.8254L21.111 24.1893L7.91672 12.8258ZM32.2119 11.25H10.01L21.111 20.8107L32.2119 11.25Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <span className="text-black font-medium text-base w-2/3 lg:w-auto lg:text-3xl">
                    fabiano.engenharia@yahoo.com.br
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M1.6875 8.4375V1.6875H11.8125V8.4375L7.59375 12.6562L14.3438 19.4062L18.5625 15.1875H25.3125V25.3125H18.5625C9.24269 25.3125 1.6875 17.7572 1.6875 8.4375Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <span className="text-black font-medium text-base lg:w-auto w-2/3 lg:text-3xl">
                    (12) 99777-9044
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <Footer
          home={home}
          partners={partners}
          about={about}
          projects={projects}
          contact={contact}
        />
      </div>
    </div>
  );
}
