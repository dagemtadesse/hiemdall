import { Admin, User } from "./store/UserContext"

export const STUDENT: User = {
    id: "1",
    fullName: "Dagem Tadesse",
    email: "dagem.seyfu@gmail.com",
    phone: "0915260951",
    dateOfBirth: "2001-09-19",
    sex: "male",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/29.jpg",
    department: "Software Enginneering",
    level: "1",
    academicStatus: "promoted",
    role: "student"
}

export const ADMIN: Admin = {
    id: "2",
    fullName: "Absalat Dave",
    email: "absalat@gmail.com",
    phone: "0915260951",
    dateOfBirth: "1998-09-19",
    sex: "female",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/952.jpg",
    role: "admin"
}

export const STUDENTLIST: User[] = [
    STUDENT,
    {
        id: "3",
        fullName: "Henok Tadesse",
        email: "dagem.seyfu@gmail.com",
        phone: "0915260951",
        dateOfBirth: "2001-09-19",
        sex: "male",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/29.jpg",
        department: "Software Enginneering",
        level: "1",
        academicStatus: "promoted",
        role: "student"
    },
    {
        id: "4",
        fullName: "Nomit Tim",
        email: "dagem.seyfu@gmail.com",
        phone: "0915260951",
        dateOfBirth: "2001-09-19",
        sex: "male",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/29.jpg",
        department: "Software Enginneering",
        level: "1",
        academicStatus: "promoted",
        role: "student"
    }

];