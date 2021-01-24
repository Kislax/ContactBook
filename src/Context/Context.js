import {createContext} from 'react'

function noop() {}

export const Context = createContext({
    userName: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated:false,
    theme: "light"
})
