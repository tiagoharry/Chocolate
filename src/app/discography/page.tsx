import Title from "@/components/title/page";
import Image from "next/image";
import Link from "next/link";

export default function Discography() {
  return (
    <div className="grid my-22">
      <Title text="Discografia" />
      <div className="flex max-md:flex-col items-center justify-center gap-5 mt-3">
        <div className="cursor-pointer hover:opacity-50 transition duration-300">
          <Link href={"https://open.spotify.com/intl-pt/album/0p5p4kVe4WPF8Df0rMYMdn?si=cX0Uwvt9Sz6g-pLupDHWfQ"}>
            <Image src="/assets/capa2.jpg" width={350} height={150} alt="capa Ghost Force" sizes="100vw" className="rounded-xl" />
          </Link>
          <p>Gohst Force</p>
        </div>
        <div className="cursor-pointer hover:opacity-50">
          <Link href={"https://open.spotify.com/intl-pt/album/1xzQEWpr2r6vMPL8aqwkIN?si=vbLc9UFxQCygq5GQYsNb8A"}>
            <Image src="/assets/capa.jpg" width={350} height={150} alt="capa Iron Eagle" sizes="100vw" className="rounded-xl" />
          </Link>
          <p>Iron Eagle</p>
        </div>
      </div>
    </div>
  )
}