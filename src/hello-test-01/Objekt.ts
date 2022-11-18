export type StudentType = {
    name: string
    age: number
    asActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}
type TechnologiesType = {
    id:number
    title: string
}
type AddressType = {
    streetTitle: string
    city: cityType
}
type cityType = {
    title: string
    countryTitle:string
}

export const student: StudentType = {
    name: 'Pavel',
    age: 12,
    asActive: false,
    address: {
        streetTitle: 'Belskogo',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id:1,
            title: 'HTML'
        } ,
        {
            id:2,
            title: 'CSS'
        } ,        {
            id:3,
            title: 'React'
        }
    ]
}
console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)