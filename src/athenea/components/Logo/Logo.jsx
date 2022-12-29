import PropTypes from 'prop-types'

export const Logo = ({direction}) =>{
    return(
        <>
        <div role='div' className="text-center mb-5">
            <img role='img' className="logo" src={direction} alt="" style={{width:'7rem'}}/>
        </div>
        </>
    )
}

Logo.propTypes={
    direction: PropTypes.string.isRequired
}