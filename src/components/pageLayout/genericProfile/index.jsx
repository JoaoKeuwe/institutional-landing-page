import './style.css'

// eslint-disable-next-line react/prop-types
const GenericProfile = ({ profile, description, name, job, cta }) => {
    return (
        <div className='container'>
            <img className='profile' src={profile} alt="" />
            <p className='description'>{description}</p>
            <p className='names'>{name}</p>
            <p className='job'>{job}</p>
            <img className='cta' src={cta} alt="" />
        </div>
    )
}

export default GenericProfile
