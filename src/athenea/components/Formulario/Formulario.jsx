import { Input } from "../index"

export const Formulario = () =>{
    return (
        <>
        <div role='div'>
            <form role='form' action="" className="bt-4">
                <Input type="text" holder="usuario"/>
                <Input type="email" holder="email"/>
            </form>
        </div>
        </>
    )
}

export const FormularioProfile = () =>{
    return(
        <div className="col-lg-5 d-flex align-items-center">
            <div className="card p-4 rounded-4 profile-bg">
                <form action="" className="bt-4 p-lg-2">
                    <Input type="text" holder="Nombre"/>
                    <Input type="text" holder="Apellido"/>
                    <Input type="email" holder="email"/>
                    <Input type="text" holder="Alias"/>
                    <Input type="password" holder="Contraseña"/>
                </form>
            </div>
        </div>
    )
}