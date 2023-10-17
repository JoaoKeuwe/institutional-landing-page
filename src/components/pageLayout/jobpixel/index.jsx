import GenericLayout from "../genericLayout";
import jobpixel from '../../../assets/images/jobpixel.svg'
import mockup2 from '../../../assets/images/Mockup2.svg'

export const JobPixel = () => {
    return (
        <GenericLayout
            background= '#3C4147'
            image={jobpixel}
            technologies1="React/Redux"
            technologies2="Firebase"
            technologies3="Node.js/Ecpress"
            technologies4="AWS"
            content="JobPixel   , a Bay Area-based startup, came to humanize hiring. To help, we’ve built a video-first platform that makes it astonishingly easy for companies to hire candidates with video and for candidates to submit video in lieu of or in addition to the traditional resumé and cover letter."
            imageCompany={mockup2}
        />
    )
}

export default JobPixel
