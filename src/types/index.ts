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
    url: string;
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
    repeat_password: z.string().min(8),
    role: z.string()
})
/*

    "cursos": [
        {
            "valoration": 0,
            "_id": "66f079cc58bf3753e9b84128",
            "name": "Curso de Word Básico",
            "description": "Aprende a usar las herramientas básicas de Microsoft Word, como formateo de texto y diseño de documentos.",
            "tipoCurso": "word"
        }
    ]
*/
export const cursosShortSchema = z.object({
    valoration: z.number(),
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    tipoCurso: z.string(),
})
export const cursoShortArraySchema = z.array(cursosShortSchema)

export type CursoShort = z.infer<typeof cursosShortSchema>
export const UserLoginSchemaForm = UserRegisterSchemaForm.pick({
    email: true,
    password: true,
})
/*
 "_id": "66d66e1ca9b7c69fc89522ee",
        "name": "derianML",
        "email": "derian@gmail.com",
        "password": "$2b$10$OUtF.dL1zXHftaKKrhQ0w.kjlBKiNwHZv8lEL7igmwdtVbGiz1syS",
        "type_user": "alumno",
        "studentId": "66d66e1ca9b7c69fc89522ef",
*/
export const UserSchema = UserRegisterSchemaForm.pick({
    name:true,
    email:true,
}).extend({
    _id: z.string(),
    type_user: z.string(),
    studentId: z.string(),
})
/*
 "_id": "66e79fcd80d611a4b3a119e3",
        "name": "Curso de PowerPoint Básico",
        "description": "Crea presentaciones visuales y aprende a utilizar las plantillas predeterminadas en PowerPoint.",
        "instructor_Id": null
*/
export const CourseViewSchema = z.object({
  _id:z.string(),
    name:z.string(),
    description:z.string(),
    instructor_Id:z.string().nullable(),
})


export type UserRegisterForm = z.infer<typeof UserRegisterSchemaForm>
export type UserLoginForm = z.infer<typeof UserLoginSchemaForm>
export type User = z.infer<typeof UserSchema>
