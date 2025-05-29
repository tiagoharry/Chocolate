type Photo = {
  id: string;
  title: string;
  url: string;
}

export async function getPhoto() {
  const res = await fetch('http://localhost:3000/data/photos.json');
  return (await res.json()) as Photo[];
}