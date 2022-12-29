import PropTypes from 'prop-types'

export const Input = ({type,holder}) =>{
    return (
        <>
        <div role='div' className="input-group mb-4">
            <span role='span' className="input-group-text" id="basic-addon1">
                <i role='i' className="fa-regular fa-user" style={{color:'white'}}></i>
            </span>
        </div>
        <input role='input' name={holder+type} type={type} className="form-control" placeholder={holder+':'} aria-label="Username" aria-describedby="basic-addon1"/>
        </>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    holder: PropTypes.string.isRequired
}