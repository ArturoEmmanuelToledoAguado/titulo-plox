import PropTypes from 'prop-types'

export const Card = ({title, text}) => {
  return (
    <div role='div' className="card-body">
        <h3 role='h3'>{title}</h3>
        <p role='p'>{text}</p>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}