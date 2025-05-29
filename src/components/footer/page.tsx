export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-black h-25 w-full">
      <p className="text-white text-sm"> @ Chocolate Sensual {currentYear}. Todos os direitos reservados.</p>
    </footer>
  )
}