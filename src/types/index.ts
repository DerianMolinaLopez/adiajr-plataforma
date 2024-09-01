import z from 'zod';
/*Tipos para las landing */
export enum TipoCard{
    PAGOS = "PAGOS",
    SOBRE_NOSOTROS = "SOBRE_NOSOTROS",  
}
export type cardPresentacion = {
    title: string;
    description: string;
    img: string;
    tipo: TipoCard;
}

export type CardsInvertidas = {
    title: string;
    description: string;
    img: string;
    invertido?: boolean;
    color:string;
}
/*Tamañso estandar
640
768
1024
1280
*/
export const UserRegisterSchemaForm = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
})

export const UserLoginSchemaForm = UserRegisterSchemaForm.pick({
    email: true,
    password: true
})
export type UserRegisterForm = z.infer<typeof UserRegisterSchemaForm>
export type UserLoginForm = z.infer<typeof UserLoginSchemaForm>