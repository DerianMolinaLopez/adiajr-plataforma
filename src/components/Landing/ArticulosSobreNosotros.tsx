
import { cardPresentacion } from "../../types"
type ArticulosSobreNosotrosProps = {
   obj: cardPresentacion;
    
}
const ArticulosSobreNosotros = ({obj}:ArticulosSobreNosotrosProps) => {
   const {img,title,tipo} = obj
  return (
    <article className="bg-white rounded-lg p-5 space-y-2 shadow-lg">
      <picture className ="flex justify-center">
        <img className="w-1/2" src={img} alt="Imagen de la noticia" />
      </picture>
        <h4 className="md:text-xl sm:text-sm font-bold ">{title}</h4>
        <p className="text-xs md:text-sm lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Modi fugit, voluptatem asperiores reiciendis incidunt 
             quod repudiandae? Molestias vitae voluptatibus tempore 
             quaerat id aperiam soluta qui aliquam, voluptate nesciunt,
              temporibus atque?
              </p>
    </article>
  )
}

export default ArticulosSobreNosotros
