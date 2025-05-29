type Props = {
  text: string;
}

export default function Title({text}: Props) {
  return (
    <h2 className="font-bold text-red-500 lg:text-3xl text-xl text-center">{text}</h2>
  )
}