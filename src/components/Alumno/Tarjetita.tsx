
type TarjetitaProps = {
    children: React.ReactNode,
    color?: string
}

export const Tarjetita = ({children,color}:TarjetitaProps) => {
  return (
    
    <div className={`${color} text-white font-bold w-32 mx-20 mt-10 rounded-lg px-1 uppercase` }>
        {children}
    </div>
  )
}
