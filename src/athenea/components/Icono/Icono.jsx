import PropTypes from 'prop-types'

export const Icono = ({text,direction}) => {
  return (
    <>
    <p role='p'>{text}</p>
    <img role='img' className="logo" src={direction}  width="45"/>
    </>
  )
}

Icono.propTypes = {
    text: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
}