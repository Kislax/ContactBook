import React from 'react'
import {useHttp} from "../../hooks/http.hook";
import {useAuth} from "../../hooks/auth.hook";
import {Context} from "../../Context/Context";
import {useContext} from "react";

export const AuthPage=()=>{

    const auth = useContext(Context)
    const { loading, request, error, clearError } = useHttp()
    const { login, logout, userId, ready } = useAuth()
    const {form, setForm} = useState({username:'', password:''})

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }



    // const registrationHandler = async (form) => {
    //     try {
    //
    //     } catch (e) {
    //
    //     }
    // }



    const loginHandler = async (form) => {
        try {
            const data = await request(`//localhost:3004/users?q=${form.username}`, 'GET', {})
            auth.login(data.token, data.userId, data.message)
        } catch (e) {

        }
    }



    return(
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="InputUsername" className="form-label">Username</label>
                    <input
                        placeholder="Введите имя пользователя"
                        id="username"
                        type="text"
                        name="username"
                        className="form-label"
                        value={form.username}
                        onChange={changeHandler}
                    />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input
                           placeholder="Введите пароль"
                           id="password"
                           type="password"
                           name="password"
                           className="form-label"
                           value={form.password}
                           onChange={changeHandler}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="card-content orange-text">
                <span className="card-title">Авторизация</span>
                <div>

                    <div className="input-field">
                        <input
                            placeholder="Введите имя пользователя Wialon"
                            id="username"
                            type="text"
                            name="username"
                            className="input"
                            value={form.username}
                            onChange={changeHandler}
                        />
                        <label htmlFor="username">Имя пользователя</label>
                    </div>

                    <div className="input-field">
                        <input
                            placeholder="Введите пароль"
                            id="password"
                            type="password"
                            name="password"
                            className="input"
                            value={form.password}
                            onChange={changeHandler}
                        />
                        <label htmlFor="username">Пароль</label>
                    </div>

                </div>
            </div>
        </>
    )
}