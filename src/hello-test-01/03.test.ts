import {StudentType} from "./Objekt";
import {addSkill, makeStudentActive, studentLiveIn} from "./03";

let student: StudentType
beforeEach( ()=>{
    student = {
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
})
test( 'new skill add',  () => {
expect(student.technologies.length).toBe(3)

        addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
        expect(student.technologies[3].id).toBeDefined()
        }
)

test( 'student to ba active',  () => {
        expect(student.asActive).toBe(false)
        makeStudentActive(student)
        expect(student.asActive).toBe(true)
    }
)
test( 'student live in',  () => {

     let  result1 = studentLiveIn (student, 'Minsk')
     let result2 = studentLiveIn (student, 'Moscow')

        expect(result1).toBe(true)
        expect(result2).toBe(false)
    }
)
