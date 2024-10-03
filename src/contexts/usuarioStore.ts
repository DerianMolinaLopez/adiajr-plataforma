import { create } from "zustand";

interface UserStoreState {
    curso:string
    costo:string,
    intructor:string,
  
    setCurso: (curso: string) => void;
    setCosto: (costo: string) => void;
    setInstructor: (instructor: string) => void;


    getCurso: () => string;
    getCosto: () => string;
    getInstructor: () => string;
  
}

const useStateUser = create<UserStoreState>((set,get) => ({
    curso:"",
    costo:"120",
    intructor:"",
    setCurso: (curso: string) => {
        set({ curso })
        console.log("curso asignado")
    },
    setCosto: (costo: string) => {
        set({ costo })
        console.log("costo asignado")
    },
    setInstructor( intructor: string){
        set({ intructor })
        console.log("instructor asignado")
    },
    getCurso: () => get().curso,
    getCosto: () => get().costo,
    getInstructor: () => get().intructor,
}));

export default useStateUser;