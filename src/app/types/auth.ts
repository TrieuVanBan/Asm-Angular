export type TypeLogin = {
    _id: string;
    email: string,
    password: string
}

export type UserCreate = {
    email: string,
    password: string
}

export type TypeLoginResponse = {
    accessToken: string,
    user: {
        email: string,
    }
}