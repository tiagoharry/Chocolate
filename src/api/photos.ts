type Photo = {
  id: string;
  title: string;
  url: string;
}

export async function getPhoto(foto?: string) {
  const res = await fetch('/data/photos.json');
  const allPhotos = (await res.json()) as Photo[];

  if (foto) {
    return allPhotos.filter((p) => p.id === foto || p.title.includes(foto));
  }
  return allPhotos;
}