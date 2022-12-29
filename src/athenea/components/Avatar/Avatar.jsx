import PropTypes from 'prop-types'

export const Avatar = ({direction}) =>{
    return(
        <>
        <li role='li'>
            <img className="img-fluid" width="140" src={direction} alt="" />
        </li>
        </>
    )
}

Avatar.propTypes={
    direction: PropTypes.string.isRequired
}