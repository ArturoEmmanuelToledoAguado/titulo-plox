import { Boton, FormularioProfile, Imagen} from '../index'
import './Profile.css'

export const Profile = () => {
  return (
    <section>
        <div className="container py-5 vh-100">
            <div className="row d-flex justify-content-center align-items-lg-center vh-100">
                <div className="col-lx-10">
                    <div className="rounded-3 text-black">
                        <div className="row g-0">
                            <div className="col-lg-3">
                                <div className="p-md-5 mx-md-4">
                                    <div className="card shadow p-2 rounded-5 profile-bg">
                                        <div className="car-body p-md-5 mx-md-4">
                                            <Imagen direction="icons/profile.png"/>
                                        </div>
                                    </div>
                                    <Boton text="Cambiar foto"/>
                                </div>
                            </div>
                            <FormularioProfile/>
                            <div className="col-lg-4">
                                <div className="db-vite">
                                    <Boton text="Cambiar Alias"/>
                                    <Boton text="Cambiar Contraseña"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
