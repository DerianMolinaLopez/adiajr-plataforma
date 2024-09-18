import twiter from "@/assets/img/Twitterredes.png"
import face from "@/assets/img/Facebookredes.png"
import github from "@/assets/img/github.png"
const Footer = () => {
  return (
    <footer className="border-t-4 border-gray-500 mt-10 mb-10 flex justify-around">
      <article className="text-slate-500 font-bold gap-10 items-center flex justify-center w-1/2 text-xl space-y-2 border-r-4 border-gray-500">
        {/*integrantes del equipo */}
         
        <p>Kenyi cervantes</p>
        <p>De la torre</p>
        <p>Derian Molina </p>
       
        
      </article>
      <article className="flex justify-center  pr-32 w-1/2    border-gray-500  ">
        {/*Redes sociales */}
        <div className="flex justify-center mt-4 ">
           <img src={github} alt="github" className="w-10 h-10" />
        <img src={face} alt="face" className="w-12  h-10" />
        <img src={twiter} alt="x"  className="w-10 h-10"/>
        </div>
       
      </article>
      
    </footer>
  )
}

export default Footer