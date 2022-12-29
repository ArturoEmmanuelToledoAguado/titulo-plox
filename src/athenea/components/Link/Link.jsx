import PropTypes from 'prop-types'

export const Link = ({text}) =>{
    return(
        <>
        <div role='div' className="text-center pt-1 mb-1">
            <p role='p'><a role='a' className="">{text}</a></p>
        </div>
        </>
    )
}

Link.propTypes = {
    text: PropTypes.string.isRequired
}