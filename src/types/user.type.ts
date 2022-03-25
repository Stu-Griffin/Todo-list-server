interface IUser {
    login: string,
    password: string,
    todosArr: Array<string>,
    date: string,
}

export interface IUserInf {
    login: string,
    password: string,
}

export interface IUserChange {
    login: string,
    password: string,
    todosArr: Array<string>,
}

export default IUser;