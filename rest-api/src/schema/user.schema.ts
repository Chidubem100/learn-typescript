import {object,string,TypeOf} from 'zod';


export  const createUserSchema = object({
    body: object({
        firtname: string({
            required_error: "firstname is required"
        }),
        lastname: string({
            required_error: "laste=name is required"
        }),
        password: string({
            required_error: "password is required"
        }).min(6, "password is too short- should be min of 6 chars"),
        passwordConfirmation: string({
            required_error: "password confirmation is required"
        }),
        email: string({
            required_error: "email is required"
        }).email("Not a valid email"),

    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "passwords do not match",
        path:['passwordConfirmaton']
    }),
});

export const verifyUserSchema = object({
    params: object({
        id: string(),
        verificationCode: string()

    }),
});

export const forgotPasswordSchema = object({
    body: object({
        email: string({
            required_error: "Email is not valid"
        }).email("Not a valid email")
    })
});

export const resetPasswordSchema = object({
    params: object({
        id:string(),
        passwordResetCode: string(),
    }),
    body: object({
        password: string({
            required_error: "password is required"
        }).min(6, "password is too short- should be min of 6 chars"),
        passwordConfirmation: string({
            required_error: "password confirmation is required"
        }),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "passwords do not match",
        path:['passwordConfirmaton']
    }),
});

export type forgotPasswordInput = TypeOf<typeof forgotPasswordSchema>['body']
export type verifyUserInput = TypeOf<typeof verifyUserSchema>['params'];
export type createUserInput = TypeOf<typeof createUserSchema>['body'];
export type resetPasswordInput = TypeOf<typeof resetPasswordSchema>;