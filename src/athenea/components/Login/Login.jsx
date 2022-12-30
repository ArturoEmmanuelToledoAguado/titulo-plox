import './Login.css'
import {Formulario, Logo, Avatar, Card, Boton,Link} from '../'

export const Login =() => {
    return (  
        <section className="vh-100 bg-gradient">
            <div className="container py-5 vh-100">
                <div className="row d-flex justify-content-center align-items-lg-center vh-100">
                    <div className="col-lx-10">
                        <div className="rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="p-md-5 mx-md-4">
                                        <div className="card shadow p-3 mb-5 rounded-5 bg-login-form">
                                            <div className="car-body p-md-5 mx-md-4">
                                                <Logo cName="text-center mb-5" direction='/img/mq19.png'/>
                                                <Formulario/>
                                                <Boton text="Siguiente"/>
                                                <Link text="Registrarse"/>
                                                <Link text="¿Olvido su contraseña?"/>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-lg-6 d-flex align-items-center">
                                    <div>
                                        <div className="px-3 py-4 p-md-4">
                                            <div>
                                                <ul className="nav justify-content-center">
                                                    <Avatar direction='img/mq16.png'/>
                                                    <Avatar direction="img/mq17.png"/>
                                                    <Avatar direction="img/mq18.png"/>
                                                </ul>
                                            </div>
                                            <div className="card hover-other message-login">
                                                <Card cName="card-body" title="Bienvenido a Athenea" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatem, harum amet fuga aperiam rerum in aspernatur, aut reprehenderit impedit totam dicta eos officia cupiditate. Earum quaerat eum pariatur laudantium."/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// TODO: Implementar los defaultprops
// !Preguntar por los class -> className