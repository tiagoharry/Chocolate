import Title from "@/components/title/page";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-5 lg:mx-35 mx-5">
      <Title text="Sobre" />
      <div className="bg-gray-500 rounded-xl grid lg:grid-cols-2 lg:items-center">
        <div className="p-9">
          <p className="text-white">Chocolate Sensual é uma banda antológica de Recife/PE sendo principalmente reconhecida
            pelo seu jeito despojado.
            Nosso nome pode até lhe causar estranheza e muitos ainda torcem o nariz mas,
            após nos ver tocando, todos entram na brincadeira! Temos nosso estilo único
            baseado no Heavy Metal Tradicional chamado, O Heavy Metal Gostoso.</p>
          <p className="text-white">Banda formada em 2002 por um grupo de amigos que decidiram se juntar para tocar as músicas
            que gostavam de ouvir. Na brincadeira para marcar ensaio foi decidido usar o nome da banda
            do filme &quot;Um principe em Nova York&quot; que se chamava Chocolate Sensual, e assim ficou o nome para sempre.
            Com o passar dos anos começamos a fazer músicas autorais e alguns shows tendo em destaque a distribuição
            de chocolate durante as apresentações e o jeito bricalhão da banda. E até os dias de hoje se mantem
            praticamente com a mesma formação.</p>
        </div>
        <Image src={"/assets/foto2.jpg"} width={600} height={350} alt="banda" className="rounded-l-2xl hidden lg:block"/>
      </div>
    </div>

  )
}