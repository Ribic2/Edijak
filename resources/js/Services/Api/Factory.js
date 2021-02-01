import Teacher from './Teacher'
import User from './User'
import Student from "./Student";

const repository = {
    Teacher,
    User,
    Student
}

export const Factory = {
    get: name => repository[name]
}
