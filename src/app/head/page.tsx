import Image from "next/image";

export default function Head() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Image
        src="https://chocolatesensual.vercel.app/fotos/IMG_3842.jpg"
        width={5188} height={3459}
        alt={'banda'}
        sizes="100vw"
        className="w-auto h-auto max-w-full"
      />
    </main>
  )
}