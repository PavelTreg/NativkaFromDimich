import {student, StudentType} from "./Objekt";
import {AddressType, CityType} from "./02";


export const addSkill = ( student: StudentType, skill: string) => {
    student.technologies.push( {
        id: new Date().getTime(),
        title: skill
    })
}
export const makeStudentActive = (student: StudentType) => {
    student.asActive = true
}

export function studentLiveIn (st: StudentType, city: string) {
    return student.address.city.title === city

}