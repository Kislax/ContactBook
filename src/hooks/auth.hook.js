import {useState, useCallback, useEffect} from 'react';
import bcrypt from 'bcryptjs';


const storageName = 'userData'

export const useAuth = () => {
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState(null)

    const login = useCallback((id, name) => {
        setUserId(id)
        setUserName(name)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            userName: name
        }))
    }, [])


    const logout = useCallback(() => {
        setUserId(null)
        setUserName(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data) {
            login( data.userId)

        }
        setReady(true)
    }, [login])


    return { login, logout, userId, ready }
}


const hashedPassword = await bcrypt.hash(password, 12)