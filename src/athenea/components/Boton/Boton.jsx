import PropTypes from 'prop-types'

export const Boton = ({text}) => {
  return(
    <>
      <div role='div' className="d-grid gap-2 mb-4">
          <button name={text+'button'} className="btn btn-light" type="button">
              <i role='i' className="fa fa-right-to-bracket orange"></i>
              {text}
          </button>
      </div>
    </>
  )
}

Boton.protoTypes = {
  text: PropTypes.string.isRequired
}