import PropTypes from 'prop-types'

export const Logo = ({direction}) =>{
    return(
        <>
            <img role='img' className="logo" src={direction} alt="" style={{width:'7rem', align:'right'}}/>
        </>
    )
}

Logo.propTypes={
    direction: PropTypes.string.isRequired
}