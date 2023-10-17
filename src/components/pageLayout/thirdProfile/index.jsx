import GenericProfile from '../genericProfile'
import profile from '../../../assets/images/profile3.svg'
import cta from '../../../assets/images/cta.svg'

const ThirdProfile = () => {
    return (
        <GenericProfile
            profile={profile}
            description={'“ Conversion rates improved as a result of Nextly’ s work.The team is organized and has strong practices for development projects.Everyone is happy with the new platform.”'}
            name={"Gustavo Paiva"}
            job={'CEO at Descola'}
            cta={cta}
        />
    )
}

export default ThirdProfile