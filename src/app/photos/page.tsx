'use client'

import Title from "@/components/title/page";
import { useEffect, useState } from "react";
import Image from "next/image";

type Photo = {
  id: string;
  title: string;
  url: string;
}

export default function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectPhoto, setSelectPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      const res = await fetch('/api')
      const data = await res.json()
      setPhotos(data)
    }
    fetchPhotos()
  }, [])

  return (
    <div className="px-5 my-20">
      <Title text="Fotos" />
      <div className="flex flex-col lg:flex-row justify-center gap-5 py-5">
        {photos.map((gallery) => (
          <div
            className="cursor-pointer hover:scale-105 transition duration-300"
            key={gallery.id}
            onClick={() => setSelectPhoto(gallery)}
          >
            <Image
              src={gallery.url}
              width={480}
              height={345}
              alt={gallery.title}
              className="max-w-full rounded-xl"
              sizes="100vw"
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
              className=" mt-10"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  )
}