type Props = {
  text: string;
}

export default function Title({text}: Props) {
  return (
    <h2 className="font-bold text-red-500 lg:text-3xl text-xl text-center mb-3">{text}</h2>
  )
}