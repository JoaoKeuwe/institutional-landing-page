import './style.css'
import Images from './images'
import javascript from '../../../assets/icons/javascript.svg'
import typescript from '../../../assets/icons/typescript.svg'
import node from '../../../assets/icons/node.svg'
import react from '../../../assets/icons/react.svg'
import pwa from '../../../assets/icons/pwa.svg'
import php from '../../../assets/icons/php.svg'
import laravel from '../../../assets/icons/laravel.svg'
import symphony from '../../../assets/icons/symphony.svg'
import docker from '../../../assets/icons/docker.svg'
import aws from '../../../assets/icons/aws.svg'

const Specialties = () => {
    return (
        <div className='container-speacialties'>
            <h2>Specialties</h2>
            <p>Our software is made from relevant technologies in the market, which guarantee the quality of the service</p>
            <div className='container-images'>
                <Images image={javascript} text={'JavaScript'} />
                <Images image={typescript} text={'TypeScript'} />
                <Images image={node} text={'Node.JS'} />
                <Images image={react} text={'React'} />
                <Images image={pwa} text={'PWA'} />
                <Images image={php} text={'PHP'} />
                <Images image={laravel} text={'Laravel'} />
                <Images image={symphony} text={'Symphony'} />
                <Images image={docker} text={'Docker'} />
                <Images image={aws} text={'AWS'} />
            </div>
        </div>
    )
}

export default Specialties