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