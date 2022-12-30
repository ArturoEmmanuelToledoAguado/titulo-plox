import PropTypes from 'prop-types'

export const Imagen = ({direction}) => {
  return (
    <>
        <form action="" className="bt-4">
            <div className="input-group mb-4">
                <img className="img-fluid" src={direction} alt="" />
            </div>
        </form>
    </>
  )
}

Imagen.propTypes={
    direction: PropTypes.string.isRequired
}