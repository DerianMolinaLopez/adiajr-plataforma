
import { cardPresentacion } from "../../types"
type ArticulosSobreNosotrosProps = {
   obj: cardPresentacion;
    
}
const ArticulosSobreNosotros = ({obj}:ArticulosSobreNosotrosProps) => {
   const {img,title} = obj
  return (
    <article className="grid grid-cols-2 rounded shadow-sm  bg-white p-2">
      <div className="flex justify-center">
        <img src={img} alt="imagen de sobre nosotros" className="w-1/2" />
      </div>
      <div className="space-y-4 flex justify-center items-center">
        <div className="space-y-5">
           <h3 className="text-2xl font-bold ">{title}</h3>
        <p>{obj.description}</p>
        </div>
       
      </div>
    </article>
  )
}

export default ArticulosSobreNosotros
