//este programa es para crear id auxiliares para componentes
//en dado caso de que estemos renderizando algo que no
//tiene un id de la base de datos y eivtar usar index
export default function generarId(){
    return Math.random().toString(36).substr(2, 9);
}