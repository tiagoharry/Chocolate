import Button from "@/components/button/page";
import Input from "@/components/input/page";
import Title from "@/components/title/page";

export default function Contact() {
  return (
    <div className="pt-5">
      <Title text="Contato" />
      <form action="" className="grid justify-center gap-2 bg-gray-500 rounded-t-2xl py-5">
        <Input label="Nome" name="nome" />
        <Input label="Email" name="email" type="email" />
        <div className="flex flex-col max-w-xl">
          <label htmlFor="message" className="text-white">Mensagem</label>
          <textarea
            name="message"
            id="message"
            className="border rounded hover:border-red-500 active:border-red-500 bg-white"
          />
        </div>
        <Button value="Enviar" />
      </form>
    </div>
  )
}