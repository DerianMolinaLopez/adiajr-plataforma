import Header from "./Header"
import CardPlanes from "../Pagos/CardPlanes"
export type CardPagos = {
    nombre: string,
    numeroAlumnos: number,
    numeroMeses: number,
    numeroGrupos:number
    total: number
}


const precioPorAlumno = 150; // Precio por alumno
const precioPorMes = 100; // Precio por mes
const costoPorGrupo = 500; // Costo adicional por grupo

const pagos: CardPagos[] = [
    {
        nombre: "Semestral",
        numeroAlumnos: 30,
        numeroMeses: 6,
        numeroGrupos: 10,
        total: (30 * precioPorAlumno) + (6 * precioPorMes) + (10 * costoPorGrupo) // total = 4500 + 600 + 5000 = 5100
    },
    {
        nombre: "Anual",
        numeroAlumnos: 30,
        numeroMeses: 12,
        numeroGrupos: 10,
        total: (30 * precioPorAlumno) + (12 * precioPorMes) + (10 * costoPorGrupo) // total = 4500 + 1200 + 5000 = 5700
    },
    {
        nombre: "Bimestral",
        numeroAlumnos: 30,
        numeroMeses: 2,
        numeroGrupos: 10,
        total: (30 * precioPorAlumno) + (2 * precioPorMes) + (10 * costoPorGrupo) // total = 4500 + 200 + 5000 = 4700
    }
];

const PlanesPagoEscolares = () => {
  return (
    <>
    <Header/>
    <div className="bg-gris-claro-variante h-screen">
        
    <main className="pt-28">
        <h2 className="text-center text-3xl font-semibold mb-32 bg-azul-claro p-3 text-yellow-400">Se un instuctor con nuestras opciones</h2>
        <div className="flex justify-around gap-24 mx-20">
                {pagos.map((pagos,index)=><CardPlanes key={index} pagos={pagos}/>)}
        </div>
       
    </main>
    </div>
    
    </>
  )
}

export default PlanesPagoEscolares
