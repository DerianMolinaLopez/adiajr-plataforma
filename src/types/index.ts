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
/*
 {
            "_id": "66f079cc58bf3753e9b8412a",
            "name": "Curso de Word Avanzado",
            "description": "Domina el uso de referencias, macros y herramientas de automatización en Word.",
            "instructor_Id": {
                "_id": "66f1a292b2025e53bc810e99",
                "user_Id": {
                    "_id": "66f1a292b2025e53bc810e98",
                    "name": "BorbonMartin"
                }
            },
            "tipoCurso": "word",
            "start_date": "2024-09-22T20:10:52.489Z",
            "end_date": "2024-09-22T20:10:52.489Z",
            "__v": 0,
            "valoration": 0
        }
*/
export const courseShortSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    instructorName: z.string(),
    tipoCurso: z.string(),
})
export const cursoDetailSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    instructor_Id: z.object({
        _id: z.string(),
        user_Id: z.object({
            _id: z.string(),
            name: z.string(),
        })
    }),
    tipoCurso: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    __v: z.number(),
    valoration: z.number(),
})
export type CursoShortPay ={
    _id: string;
    name: string;
    description: string;
    tipoCurso: string;
    instructorName: string;
}
export const SectionSchema = z.object({
    _id:z.string(),
    name:z.string(),
    description:z.string()
})
export const SectionCursoSchema = z.object({
    _id:z.string(),
    sections:z.array(SectionSchema)
})
export type Section = z.infer<typeof SectionSchema>
/*
{
    "_id": "66f079cc58bf3753e9b84128",
    "sections": [
        {
            "_id": "66f5e6f4e03faaa12502e0f4",
            "name": "Unidad 1",
            "description": "Primeras impresiones word"
        },
        {
            "_id": "66f5ed8170cb67a7feb53a26",
            "name": "Unidad 1",
            "description": "Primeras impresiones word"
        },
        {
            "_id": "66f5f0376ba731a429027d8c",
            "name": "Unidad 1",
            "description": "Primeras impresiones word"
        },
        {
            "_id": "66f5f04ca8b28cad5d9442c6",
            "name": "Unidad 1",
            "description": "Primeras impresiones word"
        },
        {
            "_id": "66f5f04da8b28cad5d9442ca",
            "name": "Unidad 1",
            "description": "Primeras impresiones word"
        }
    ]
}
*/
export const cursoDetailSchemaArray = z.array(cursoDetailSchema)
export type CursoDetail = z.infer<typeof cursoDetailSchema>


export type CourseShort = z.infer<typeof courseShortSchema>