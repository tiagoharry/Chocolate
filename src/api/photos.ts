type Photo = {
  id: string;
  title: string;
  url: string;
}

export async function getPhoto(foto?: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/data/photos.json`);
  const allPhotos: Photo[] = await res.json();

  if (foto) {
    return allPhotos.filter(((p) => p.id === foto || p.title.includes(foto)));
  }
  return allPhotos;
}