import useAuthInstructor from "@/hooks/useAuthInstructor";
import ModalCrearCodigoUnion from "@/components/Instructor/codigoUnion/ModalCrearCodigoUnion";
import cajaVacia from '@/assets/img/4826310.png';
type TipoCursocolor = {
    [key:string]:string
}
const tipoCurso:TipoCursocolor   = {
    word:'text-indigo-600',
    excel:'text-green-600',
    power:'text-orange-600',
}


export const UnionCodeView = () => {
    const { instructor, codigos, cursos = [] } = useAuthInstructor(); // Añadimos un valor por defecto para cursos
    console.log(codigos)
    return (
        <div className="px-20 ml-10 space-y-4">
            <h2 className="text-4xl mt-10 font-bold">Hola, bienvenido - {instructor?.name}</h2>
            <h3 className="text-2xl font-normal">Estos son tus códigos de unión generados</h3>
            <ModalCrearCodigoUnion cursos={cursos} />
       

            <section className="space-y-2 overflow-auto altura-codigos-union">
                {(!codigos || codigos.length === 0) ? (
                    <>
                        <h3 className="text-2xl font-bold text-center">
                            No tienes ningún código de unión generado. Intenta creando uno y regresa más tarde.
                        </h3>
                        <div className="rounded-full mx-auto w-1/4 p-3">
                            <img src={cajaVacia} alt="Imagen de una caja vacía" className="mx-auto w-80 h-80" />
                        </div>
                    </>
                ) : (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {
                            codigos.map(codigo => (
                                <div key={codigo._id} className=" text-center  shadow-lg border-2 border-slate-400 flex gap-5 bg-white w-full justify-around flex-col px-5 rounded-lg py-2">
                                   
                                    <p className="text-2xl">Código de unión: {codigo.code}</p>
                                    <p className="text-2xl"> {codigo.group.name}</p>
                                    <button className="text-white bg-slate-600 border-b-4  border-b-slate-800 rounded-xl p-1
                                    hover:scale-105 duration-150 transition-all
                                    ">Ver grupo</button>
                                </div>
                            ))
                        }
                    </div>
                    
                )}
            </section>
        </div>
    );
};
