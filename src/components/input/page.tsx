import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function Input({ label, name, value, placeholder, ...rest }: InputProps) {
  return (
    <div className="flex flex-col max-w-xl">
      {label && (
        <label htmlFor={name} className="text-white">
          {label}
        </label>
      )}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        {...rest}
        className="border rounded hover:border-red-500 bg-white px-2 h-9 focus:outline-none" />
    </div>

  )
}