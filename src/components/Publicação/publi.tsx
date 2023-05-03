import { useEffect, useState } from "react"
import { Profile, Publication, ProfilePhoto, Information } from "./publi-styled"
import axios from "axios"

interface Users {
    nameUser: string
    date: string
    role: string
    Course: string
    content: string
    photo: string
    likes: number
}

export const Publi = () => {
    const [users, setUsers] = useState<Users[]>([])
    useEffect(() => {
        axios.get('http://localhost:7010/posts').then(response => {
            setUsers(response.data)
        })
    }, [])

    return (
        <>
            {users.map(user => (
                <Publication>
                    <Profile>
                        <ProfilePhoto src={user.photo} className="rounded-circle" alt="Profile" />
                        <Information>
                            <h2>{user.nameUser}</h2>
                            <h1>{user.role} de {user.Course}</h1>
                        </Information>
                    </Profile><div>
                        <p className="lh-1">{user.content}</p>
                    </div>
                </Publication>
            ))}
        </>


    )
}