import './App.scss';
import {useAuth} from "./hooks/auth.hook";
import {useRoutes} from "./Containers/Router/Router";
import {Context} from "./Context/Context";
import {Loader} from "./Components/Loader/Loader";


export  const App= ()=> {

    const {token, login, logout, userId, userName, ready} = useAuth()
    const isAuthenticated = !!userName
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader />
    }

  return (
    <div className="App">
        <Context.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            {routes}
        </Context.Provider>
    </div>
  );
}

export default App