export type Product = {
    _id: string,
    name: string,
    price:number,
    image: string,
    description:string
}

export type ProductCreate = {
    name: string,
    price:number,
    image: string,
    description:string
}


export type ProductCart = {
    _id:string,
    name:string,
    value:number,
    price:number,
    image: string,
    description:string
}