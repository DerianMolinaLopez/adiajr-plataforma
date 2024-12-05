import ArticulosSobreNosotros from "./ArticulosSobreNosotros"
import aidaLogo from "../../assets/img/logooAIDA.png"
import { TipoCard } from "../../types"
import pagos  from "../../assets/pagos.svg"
import maestro from "../../assets/maestros.svg"
const noticias= [
  {
    title: "¿Por que trabajar con nosotros?",
    description: "La filosofia de AIDAjr es que el conocimiento llegue a todos, todo aquel que tenga un dispositivo inteligente, puede aprender herramienats que ayudaran a su futuro, solo con un par de clicks podras ver el material que nosotros ofrecemos, AIDAjr esta centralizado para que puedas escoger tus horarios y tus tiempo",
    img: aidaLogo,
    tipo: TipoCard.SOBRE_NOSOTROS
  },
  {
    title: "Pllanes de pago accesibles",
    description: "Los planes de pago procuramos que sea accesibles tanto para los instructores como a los alumnos, para mantener nuestras operaciones mantenemos un precio para que puedas seguir usando nuestro servicio, si quieres convertirte en patrocinador, estamos con las manos abiertas y si eres cliente, te damos la bienvenida.",
    img: pagos,
    tipo: TipoCard.SOBRE_NOSOTROS
  },
  {
    title: "Si no eres maestro de escuela, adelante, gestiona tus propios cursos particulares",
    description: "dascacda",
    img: maestro,
    tipo: TipoCard.SOBRE_NOSOTROS
  }
]
const SobreNosotros = () => {
  return (
    <section className="px-20">
        <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold mt-20 text-centermb-10  bg-blue-950  rounded-lg text-center text-white py-10 mb-5">Sobre Nosotros</h3>
        <div className="flex flex-col space-y-40">
              {noticias.map(noticia=><ArticulosSobreNosotros obj={noticia}/>)}

        </div>
         </section>
  )
}

export default SobreNosotros
