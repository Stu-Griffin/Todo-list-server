interface ITodo {
    title: string,
    text: string,
    author: string,
    status: boolean,
}

export interface ITodoChange {
    title: string,
    text: string,
    status: boolean,
}

export default ITodo;