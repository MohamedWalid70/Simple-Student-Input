export interface Student {
    id: string,
    name: string,
    age: number,
    instrumentofinterest: string,
    parentphonenumber: string
}

export interface InputStudent {
    name: string,
    age: number|null,
    instrumentofinterest: string,
    parentphonenumber: string
}