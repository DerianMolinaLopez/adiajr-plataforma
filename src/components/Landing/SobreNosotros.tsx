import ArticulosSobreNosotros from "./ArticulosSobreNosotros"
import aidaLogo from "../../assets/img/logooAIDA.png"
import { TipoCard } from "../../types"
import pagos  from "../../assets/pagos.svg"
import maestro from "../../assets/maestros.svg"
const noticias= [
  {
    title: "¿Por que trabajar con nosotros?",
    description: "Aprende con nosotros y se parte de la comunidad de AIDAjr",
    img: aidaLogo,
    tipo: TipoCard.SOBRE_NOSOTROS
  },
  {
    title: "Pllanes de pago accesibles",
    description: "",
    img: pagos,
    tipo: TipoCard.SOBRE_NOSOTROS
  },
  {
    title: "Si no eres maestro de escuela, adelante, gestiona tus propios cursos particulares",
    description: "",
    img: maestro,
    tipo: TipoCard.SOBRE_NOSOTROS
  }
]
const SobreNosotros = () => {
  return (
    <section className="px-20">
        <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold mt-20 text-center text-slate-800 mb-10">Sobre Nosotros</h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              {noticias.map(noticia=><ArticulosSobreNosotros obj={noticia}/>)}

        </div>
         </section>
  )
}

export default SobreNosotros
