import GenericProfile from "../genericProfile"
import profile from '../../../assets/images/profile2.svg'
import cta from '../../../assets/images/cta.svg'

const SecondProfile = () => {
    return (
        <GenericProfile
            profile={profile}
            description={"“Strong team that's easy to work with. Doesn't just focus on trying to get something out the door, but also concerns themselves with the scalability of their application design.”"}
            name="Anthony Duerr"
            job={"CEO at JobPixel | ex director of engineering of Linkedin"}
            cta={cta}
        />
    )
}

export default SecondProfile