import { create } from "zustand";
import { CardPagos } from "@/components/Landing/PlanesPagoEscolares";

interface StoreState {
    planPago: CardPagos | null;
    setPlanPago: (planPago: CardPagos) => void;
    getPlanPago: () => CardPagos | null;
}

const useStoreCompras = create<StoreState>((set, get) => ({
    planPago: null,
    setPlanPago: (planPago: CardPagos) => {
        set({ planPago })
        console.log("plan asignado")
    },
    getPlanPago: () => get().planPago
}));

export default useStoreCompras;
