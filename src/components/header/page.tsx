'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [navBar, setNavBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${scrolled ? 'bg-black fixed w-full justify-center max-md:justify-between z-10' : 'bg-transparent fixed lg:left-1/2 lg:-translate-x-1/2'} max-lg:w-full flex items-center justify-between px-5 transition-colors duration-500`}>
      <Link href={'/'} className="lg:hidden">
        <Image src="/assets/logo.png" width={150} height={150} alt="Chocolate Sensual" />
      </Link>
      <button className="lg:hidden bg-[#eee] p-0 rounded h-[40px] w-[40px] after:decoration-amber-400 flex items-center justify-center border cursor-pointer duration-500 after:content-[''] after:block after:w-[1.2rem] after:h-[2px] shadow-2xl after:duration-700 active:after:rotate-90 active:after:w-[4px] active:after:h-[4px]" onClick={() => setNavBar(!navBar)}>
      </button>
      <ul className={`${navBar ? 'max-lg:flex-col max-lg:opacity-100 max-lg:scale-100 max-lg:pointer-events-auto' : 'max-lg:hidden max-lg:opacity-0 max-lg:scale-95 max-lg:pointer-events-none'} list-group flex items-center gap-5 max-lg:fixed max-lg:top-[100px] max-lg:right-0 max-lg:p-10 max-lg:bg-white max-lg:h-full max-lg:shadow-2xl max-lg:rounded-sm max-lg:inset-0 transform transition-all duration-300 ease-in-out`}>
        <li className="list-group-item d-flex justify-content-between align-items-center font-bold hover:text-red-500 text-white max-lg:text-black">
          <Link href={'#tour'}>
            Tour
          </Link>
        </li>
          <li className="list-group-item d-flex justify-content-between align-items-center font-bold hover:text-red-500 text-white max-lg:text-black">
          <Link href={'#discography'}>
            Discografia
          </Link>
        </li>
       
        <Link href={'/'} className=" max-lg:hidden">
          <Image src="/assets/logo.png" width={150} height={150} alt="Chocolate Sensual" />
        </Link>
         <li className="list-group-item d-flex justify-content-between align-items-center font-bold hover:text-red-500 text-white max-lg:text-black">
          <Link href={'#about'}>
            Sobre
          </Link>
        </li>
       <li className="list-group-item d-flex justify-content-between align-items-center font-bold hover:text-red-500 text-white max-lg:text-black">
          <Link href={'#photos'}>
            Fotos
          </Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center font-bold hover:text-red-500 text-white max-lg:text-black">
          <Link href={'#contact'}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  )
}