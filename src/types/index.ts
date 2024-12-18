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


export const UserInstructorSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
  type_user: z.string(),
  instructorId: z.string(), // Incluido para coincidir con tu JSON
  plazoPago: z.string(),
});

export const cursosShortSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    tipoCurso: z.string(),

    instructor: z.string(),
})
/*
  {
        "_id": "67422ae01f3c861c10572c79",
        "name": "Curso de Word Avanzado",
        "description": "Domina el uso de referencias, macros y herramientas de automatización en Word.",
        "valoracion": 0,
        "tipoCurso": "word",
        "instructor": "Angel Martin Gastellum Borbon"
    },
*/



export type CursosShort = z.infer<typeof cursosShortSchema>



export const UserRegisterSchemaForm = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(8),
    repeat_password: z.string().min(8),
    role: z.string()
})



export const cursosShortValorationSchema = cursosShortSchema.extend({
    valoration:z.number(),
    estado:z.string().optional(),
    progreso:z.number().optional()
})
export const cursoShortArraySchema = z.array(cursosShortSchema)
export type CursoShortValoration = z.infer<typeof cursosShortValorationSchema>
export type CursoShort = z.infer<typeof cursosShortSchema>
export type CursoShortArray = z.infer<typeof cursoShortArraySchema>
export const UserLoginSchemaForm = UserRegisterSchemaForm.pick({
    email: true,
    password: true,
})

export const UserSchema = UserRegisterSchemaForm.pick({
    name:true,
    email:true,
}).extend({
    _id: z.string(),
    type_user: z.string(),
    studentId: z.string(),
})

export const CourseViewSchema = z.object({
  _id:z.string(),
    name:z.string(),
    description:z.string(),
    instructor_Id:z.string().nullable(),
})


export type UserRegisterForm = z.infer<typeof UserRegisterSchemaForm>
export type UserLoginForm = z.infer<typeof UserLoginSchemaForm>
export type User = z.infer<typeof UserSchema>

export const courseShortSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    instructorName: z.string(),
    tipoCurso: z.string(),
    costo:z.number()
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
    valorable:z.boolean(),
    costo:z.number()
})


export const cursoBackUnionCode = cursoDetailSchema.pick({
    
    name:true,
    description:true,
    tipoCurso:true,
}).extend({
    instructor:z.object({
        name:z.string(),
        _id:z.string()
    }),
    _idCurso:z.string()
})
export type CursoBackUnionCode = z.infer<typeof cursoBackUnionCode>



export type CursoShortPay ={
    _id: string;
    name: string;
    description: string;
    tipoCurso: string;
    instructorName: string;
    costo:number
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
export type Sections = Section[]

export const cursoDetailSchemaArray = z.array(cursoDetailSchema)
export type CursoDetail = z.infer<typeof cursoDetailSchema>
export type CourseShort = z.infer<typeof courseShortSchema>

export const cursoSchema =z.object({
    _id:z.string(),
    valoration:z.number(),
    tipoCurso:z.string(),
    name:z.string(),
    process:z.number(),
    instructor:z.string(),
    description:z.string(),
})
export type Curso = z.infer<typeof cursoSchema>
export const cursoSchemaPick = cursoSchema.pick({
    _id: true,
    tipoCurso: true,
    name: true,
    instructor: true,
    description: true,
  });
export type formInputConfirmPayment = {
    password:string,
    securityNumbers:string,
    //!como es simulacion nomas, ignoraremos lo de security numbers  
}
export type EnvioConfirmarCurso ={
    id_course:string,
    curso:"",
    costo:"",
    intructor:"",
}
export type EnvioConfirmarCursoPassword = formInputConfirmPayment & EnvioConfirmarCurso

export type ConfirmacionCompra = Pick<formInputConfirmPayment,"password"| "securityNumbers"> &{
    email:string,
    numberCard:string,
    periodo:string
} 
/*
    "email":"pruebaspurebas@gmail.com",
    "password":"12345678",
    "numberCard":"1231231",
    "periodo":"674f99efe1d6476ad85497e7",
    "securityNumbers":"qdeqdewdasda"
}
*/

export type CambioPassword = {
    password: string;
    passworRepeat: string;
    token: string;
    email: string;
}

 /*
     "_id": "672ab8a6e414703f5496ef6d",
        "name": "CUrsos basic222dedaeawrfrfrcdv aac2wswswadcadscacacacasc",
        "descrioption": "borbon3001",
        "valoracion": 0,
        "tipoCurso": "word",
        "instructor": "Angel Martin Gastellum Borbon"
 */
        export const SchemaCursoShortDetail = z.object({
            name:z.string(),
            description:z.string(),
            valoracion:z.number(),
            tipoCurso:z.string(),
            instructor:z.string(),
            _id:z.string()
         })
         export const SchemaCursoShortDetailArray = z.array(SchemaCursoShortDetail)

         export type TipoCurso = {
            name:string
         }
        
export const CrearCursoSchema = z.object({
   name:z.string(),
    description:z.string(),
})
export type CrearCurso = z.infer<typeof CrearCursoSchema>

export const valoracionScheam = z.object({
    cursoId:z.string(),
    valoracion:z.number(),
    comentario:z.string()

})
export type Valoracion = z.infer<typeof valoracionScheam>

/*tareas */
/*
{
    "title":"asdasd",
    "description":"asdasdas",
    "course":"67423c9be87ba0c3ce9e0e26",
    "endDate":"2024-12-01T10:15:30Z",
    "Section":"674cad596632b752b9b58ce0"

}
*/
export const TareaSchema = z.object({
    _id:z.string(),
    title:z.string(),
    description:z.string(),
    course:z.string(),
    endDate:z.string(),
    Section:z.string()
})
export type Tarea = z.infer<typeof TareaSchema>
export type TareaCreacion = Pick<Tarea,"title"|"description"|"course"|"endDate"|"Section">
export const TareaSchemaWithCourseDetail = z.object({
    _id:z.string(),
    title:z.string(),
    description:z.string(),
    course:z.object({
        _id: z.string(),
        name: z.string(),
        tipoCurso: z.string()
    }),
    endDate:z.string(),
    Section:z.string()
})
export const UserInstructorSchemaSpecify = z.object({
    instructor:z.object({
        name:z.string(),
        _id:z.string(),
        plazoPago:z.string()
    }),
    codigos:z.array(z.object({
         _id:z.string(),
         code:z.string(),
         group:z.object(
            {
                _id:z.string(),
                name:z.string(),

            } 
         )
    })).optional(),
    cursos:z.array(z.object(
        {
            _id:z.string(),
            name:z.string(),
            description:z.string(),
            tipoCurso:z.string(),   
        }
    ))
    ,
    tareas : z.array(TareaSchemaWithCourseDetail )
})
  

/*
 {
        "_id": "674f99ffe1d6476ad85497ed",
        "name": "anual",
        "price": 400,
        "mesesAcceso": 3,
        "gruposMaximos": 5,
        "maximoAlumnos": 10,
        "description1": "Monitoreo de grupos",
        "description2": "asignacion de tareas",
        "__v": 0
    }
*/
export const PeriodoScheam = z.object({
    _id:z.string(),
    name:z.string(),
    price:z.number(),
    mesesAcceso:z.number(),
    gruposMaximos:z.number(),
    maximoAlumnos:z.number(),
    description1:z.string(),
    description2:z.string(),
})
export const PeriodosScheama = z.array(PeriodoScheam)
export type Periodo = z.infer<typeof PeriodoScheam>
export type Periodos = z.infer<typeof PeriodosScheama>  

export const Tarea = z.object({
    _id: z.string(),
    title: z.string(),
    description: z.string(),
    course: z.string(),
    endDate: z.string(),
    Section: z.string(),
    revisado: z.boolean(),
    Instructor: z.string(),
    beginDate: z.string(), // Agregar el campo beginDate
    __v: z.number(), // Agregar el campo __v
  });
  
  export const tareaArray = z.array(Tarea);
  
  export type TareaTi = z.infer<typeof Tarea>;
  export type TareaArray = z.infer<typeof tareaArray>;
/*
"_id": "67572100425caece19ef63be",
            "name": "Derian Molina Lopez",
            "email": "derian@gmail.com"
*/
  export const IntegranteSchema = z.object({
        _id:z.string(),
        name:z.string(),
        email:z.string()
  })
  export const Integrantes = z.array(IntegranteSchema)

/*
{
    "tareas": [
        {
            "_id": "674d05f5141b9a269b01bf87",
            "title": "asdasd",
            "description": "asdasdas",
            "course": "67423c9be87ba0c3ce9e0e26",
            "endDate": "2024-12-01T10:15:30.000Z",
            "Section": "674cad596632b752b9b58ce0",
            "revisado": false,
            "Instructor": "67423cfce87ba0c3ce9e0e34",
            "beginDate": "2024-12-02T00:57:25.595Z",
            "__v": 0
        },
        {
            "_id": "674e0415bbc180e973d08615",
            "title": "Curso de Word Básico",
            "description": "Pruebas de comportamiento",
            "course": "67423c9be87ba0c3ce9e0e26",
            "endDate": "2024-12-26T07:00:00.000Z",
            "Section": "674cad596632b752b9b58ce5",
            "revisado": false,
            "Instructor": "67423cfce87ba0c3ce9e0e34",
            "beginDate": "2024-12-02T19:01:41.056Z",
            "__v": 0
        }
    ]
}
*/
/*
 {
            "_id": "674e0415bbc180e973d08615",
            "title": "Curso de Word Básico",
            "description": "Pruebas de comportamiento",
            "course": "67423c9be87ba0c3ce9e0e26",
            "endDate": "2024-12-26T07:00:00.000Z",
            "Section": "674cad596632b752b9b58ce5",
            "revisado": false,
            "Instructor": "67423cfce87ba0c3ce9e0e34",
            "beginDate": "2024-12-02T19:01:41.056Z",
            "__v": 0
        }
*/