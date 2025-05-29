type ButtonProps = {
  value: string;
}

export default function Button({ value }: ButtonProps) {
  return (
    <button className="bg-gray-400 rounded-md text-white py-1 cursor-pointer hover:bg-slate-400">
      {value}
    </button>
  )
}