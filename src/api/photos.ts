type Photo = {
  id: string;
  title: string;
  url: string;
}

export async function GetPhoto(foto?: string) {
  const res = await fetch('http://localhost:3000/data/photos.json', { cache: 'no-store' });
  const allPhotos: Photo[] = await res.json();

  if (foto) {
    return allPhotos.filter(((p) => p.id === foto || p.title.includes(foto)));
  }
  return allPhotos;
}