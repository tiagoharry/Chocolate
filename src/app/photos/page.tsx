import Title from "@/components/title/page";
import PhotosList from "./photosList";
import { getPhoto } from "@/api/photos";

type Photo = {
  id: string;
  title: string;
  url: string;
}

export default async function Photos({ searchParams, }: { searchParams: { foto?: string } }) {
  const fotos = await getPhoto(searchParams.foto);
  return (
    <div className="p-5">
      <Title text="Fotos" />
      <PhotosList fotos={fotos} />
    </div>
  )
}