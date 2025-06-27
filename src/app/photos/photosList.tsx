'use client'

import Title from "@/components/title/page";
// import { getPhoto } from "@/api/photos";
// import Title from "@/components/title/page";
import Image from "next/image";
// import { useSearchParams } from "next/navigation";
import {  useState } from "react";

// type PageParams = {
//   params: {
//     foto: string;
//   }
// }

type Photo = {
  id: string;
  title: string;
  url: string;
}

export default function PhotosList({fotos}: {fotos: Photo[]}) {
  // const [fotos, setFotos] = useState<Photo[]>([]);
  const [selectPhoto, setSelectPhoto] = useState<Photo | null>(null);
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   async function loadPhotos() {
  //     const fotosParam = searchParams.get('foto') ?? undefined;
  //     const result = await getPhoto(fotosParam);
  //     setFotos(result)
  //   }
  //   loadPhotos();
  // }, [searchParams]);

  return (
    <div className="">
      <Title text="Fotos" />
      <div className="flex justify-center gap-5 py-5">
        {fotos.map((gallery) => (
          <div
            className="cursor-pointer hover:scale-105 transition duration-300"
            key={gallery.id}
            onClick={() => setSelectPhoto(gallery)}
          >
            <Image
              src={gallery.url}
              width={318}
              height={345}
              alt={gallery.title}
              className="w-auto h-auto max-w-full rounded-xl "
            />
          </div>
        ))}
      </div>
      {selectPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()}>
            <div
              className="text-white font-bold cursor-pointer text-2xl text-right"
              onClick={() => setSelectPhoto(null)}
            >
              X
            </div>
            <Image
              src={selectPhoto.url}
              width={880}
              height={3454}
              alt={selectPhoto.title}
              className="w-auto h-auto max-w-full mt-10"
            />
          </div>
        </div>
      )}
    </div>
  )
}