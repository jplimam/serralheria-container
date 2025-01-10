import { IPropsLinks } from "@/interfaces/LinksInterface";
import Image from "next/image";
import Link from "next/link";

export default function Footer({
  home,
  about,
  projects,
  contact,
  partners,
}: Readonly<IPropsLinks>) {
  return (
    <div className="w-screen h-auto flex flex-col justify-center bg-yellow-400 py-10">
      <div className="flex items-center justify-center lg:gap-96 pr-5">
        <button onClick={() => home.current?.scrollIntoView()}>
          <Image
            src="/logo.svg"
            width={180}
            height={40}
            alt="logo"
            className="box-border"
            priority={true}
          />
        </button>
        <div className="flex items-center">
          <Link href="https://facebook.com/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 92 92"
              fill="none"
            >
              <path
                d="M76.6667 46.1919C76.595 40.348 74.8547 34.6462 71.6508 29.7582C68.4469 24.8702 63.9132 20.9994 58.5833 18.6017C53.2531 16.2041 47.349 15.3795 41.566 16.2249C35.7832 17.0704 30.3622 19.5507 25.9417 23.3739C21.5212 27.197 18.2852 32.2038 16.6148 37.8044C14.9445 43.4051 14.9093 49.3663 16.5135 54.9863C18.1177 60.6064 21.2943 65.6507 25.6694 69.5258C30.0445 73.4009 35.4358 75.9451 41.2084 76.8586V55.1236H33.5417V46.1919H41.2084V39.4069C41.0309 37.8293 41.2018 36.2319 41.7094 34.7276C42.2169 33.2232 43.0484 31.8486 44.1451 30.7007C45.2418 29.5528 46.5769 28.6596 48.0566 28.0841C49.5363 27.5087 51.1244 27.265 52.7084 27.3703C55.0076 27.4018 57.3015 27.6069 59.57 27.9837V35.6503H55.7367C55.0758 35.567 54.4042 35.6332 53.7725 35.8442C53.1404 36.0551 52.5638 36.4054 52.0854 36.869C51.607 37.3327 51.239 37.898 51.0087 38.5229C50.7779 39.1481 50.6909 39.8171 50.7534 40.4802V46.2686H59.2634L57.8834 55.2002H50.7917V76.6669C58.0363 75.5211 64.6304 71.8166 69.3776 66.2253C74.1248 60.634 76.7108 53.5266 76.6667 46.1919Z"
                fill="black"
              />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 66 66"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33 49.5C42.1127 49.5 49.5 42.1127 49.5 33C49.5 23.8873 42.1127 16.5 33 16.5C23.8873 16.5 16.5 23.8873 16.5 33C16.5 42.1127 23.8873 49.5 33 49.5ZM33 44C39.075 44 44 39.075 44 33C44 26.9249 39.075 22 33 22C26.9249 22 22 26.9249 22 33C22 39.075 26.9249 44 33 44Z"
                fill="black"
              />
              <path
                d="M49.5 13.75C47.9812 13.75 46.75 14.9812 46.75 16.5C46.75 18.0188 47.9812 19.25 49.5 19.25C51.0188 19.25 52.25 18.0188 52.25 16.5C52.25 14.9812 51.0188 13.75 49.5 13.75Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.54839 11.7592C2.75 15.2887 2.75 19.9091 2.75 29.15V36.85C2.75 46.0908 2.75 50.7114 4.54839 54.2407C6.1303 57.3455 8.65447 59.8697 11.7592 61.4515C15.2887 63.25 19.9091 63.25 29.15 63.25H36.85C46.0908 63.25 50.7114 63.25 54.2407 61.4515C57.3455 59.8697 59.8697 57.3455 61.4515 54.2407C63.25 50.7114 63.25 46.0908 63.25 36.85V29.15C63.25 19.9091 63.25 15.2887 61.4515 11.7592C59.8697 8.65447 57.3455 6.1303 54.2407 4.54839C50.7114 2.75 46.0908 2.75 36.85 2.75H29.15C19.9091 2.75 15.2887 2.75 11.7592 4.54839C8.65447 6.1303 6.1303 8.65447 4.54839 11.7592ZM36.85 8.25H29.15C24.4388 8.25 21.2362 8.25429 18.7607 8.45652C16.3494 8.65353 15.1163 9.01062 14.2561 9.44892C12.1863 10.5035 10.5035 12.1863 9.44892 14.2561C9.01062 15.1163 8.65353 16.3494 8.45652 18.7607C8.25429 21.2362 8.25 24.4388 8.25 29.15V36.85C8.25 41.5613 8.25429 44.7637 8.45652 47.2392C8.65353 49.6507 9.01062 50.8838 9.44892 51.744C10.5035 53.8136 12.1863 55.4964 14.2561 56.551C15.1163 56.9893 16.3494 57.3466 18.7607 57.5435C21.2362 57.7456 24.4388 57.75 29.15 57.75H36.85C41.5613 57.75 44.7637 57.7456 47.2392 57.5435C49.6507 57.3466 50.8838 56.9893 51.744 56.551C53.8136 55.4964 55.4964 53.8136 56.551 51.744C56.9893 50.8838 57.3466 49.6507 57.5435 47.2392C57.7456 44.7637 57.75 41.5613 57.75 36.85V29.15C57.75 24.4388 57.7456 21.2362 57.5435 18.7607C57.3466 16.3494 56.9893 15.1163 56.551 14.2561C55.4964 12.1863 53.8136 10.5035 51.744 9.44892C50.8838 9.01062 49.6507 8.65353 47.2392 8.45652C44.7637 8.25429 41.5613 8.25 36.85 8.25Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
      <span className="w-2/5 self-center h-0.5 opacity-60 my-5 bg-black"></span>
      <div className="flex gap-5 self-center flex-col lg:flex-row text-black opacity-80 font-semibold">
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
      <Link
        href="https://www.linkedin.com/in/jplimam/"
        target="_blank"
        className="text-sm text-black font-medium text-center mt-40"
      >
        Made by João Pedro Lima
      </Link>
    </div>
  );
}
