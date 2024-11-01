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
    valoration: z.number(),
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    tipoCurso: z.string(),
})




export type CursosShort = z.infer<typeof cursosShortSchema>
export const UserInstructorSchemaSpecify = z.object({
  usuario: UserInstructorSchema,
  cursosConCodigoUnion: z.array(z.object({
    curso: z.object({
      _id: z.string(),
      name: z.string(),
      description: z.string(),
      tipoCurso: z.string(),
      sections: z.array(z.any()), // Se puede ajustar según el tipo real
    }),
    codigo: z.string(), // Corregido de codigoUnion a codigo
  })),
  cursos: z.array(cursosShortSchema),
 
});



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


export const cursoBackUnionCode = cursoDetailSchema.pick({
    name:true,
    description:true,
    tipoCurso:true,
}).extend({
    instructor:z.object({
        name:z.string(),
        _id:z.string()
    })
})
export type CursoBackUnionCode = z.infer<typeof cursoBackUnionCode>



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
export const cursoSchemaArray = z.array(cursoSchema)
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
    tittle:string,
    price:string,
} 

export type CambioPassword = {
    password: string;
    passworRepeat: string;
    token: string;
    email: string;
}

