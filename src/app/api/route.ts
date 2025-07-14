import { NextResponse } from "next/server"

const photos = [
  {
    id: '1',
    title: 'Foto da banda',
    url: '/assets/banda.jpg', 
  },
  {
    id: '2',
    title: "Foto banda",
    url: "/assets/foto2.jpg"
  },
]

export async function GET() {
  return NextResponse.json(photos)
}