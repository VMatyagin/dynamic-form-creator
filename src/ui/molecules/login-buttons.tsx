import { Button } from "grommet"
import React from "react"
import { useAuth0 } from "../../features/common/organisms"


export const LoginData = () => {
    const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

    if ( loading ) {
        return (<></>);
    }
    
    return (
        <>
        { isAuthenticated 
            ? <Button label='Выйти' onClick={logout} /> 
            : <Button label='Войти' primary onClick={loginWithRedirect} />  
        }
        </>
    )
}