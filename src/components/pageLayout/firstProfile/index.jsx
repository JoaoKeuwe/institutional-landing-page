import GenericProfile from "../genericProfile";
import profile from '../../../assets/images/profile.svg'
import cta from '../../../assets/images/cta.svg'

export const FirstProfile = () => {
    return (
        <GenericProfile profile={profile} description={'“ Nextly has done a spectacular job on sophisticated projects so far.They’ ve been a great partner, and we plan to expand their role going forward.”'} name={'Jonathan May'} job={'CEO at Evolution Virtual'} cta={cta} />
    )
}

export default FirstProfile
