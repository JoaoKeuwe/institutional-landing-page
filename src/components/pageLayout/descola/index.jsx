import GenericLayout from '../genericLayout'
import descola from '../../../assets/images/descola.svg'
import mockup from '../../../assets/images/mockup3.png'

const Descola = () => {
    return (
        <GenericLayout
            background=" #F24423"
            image={descola}
            content={"Descola    is an online learning platform based in São Paulo. The amazing platform we’ve developed allows users to buy and watch their as amazing video-based courses and teaching materials.  "}
            technologies1="React/Redux"
            technologies2="Firebase"
            technologies3="Node.js/Ecpress"
            technologies4="AWS"
            imageCompany={mockup}
        />
    )
}

export default Descola