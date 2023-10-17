import './style.css'
import mainImage from '../../../assets/images/mainImage.svg'

const MainSection = () => {
  return (
    <section className="main-container">
      <div className="text-content">
        <h1>We’re bringing software development to the next level.</h1>
        <p>Talk to our Business Specialist!</p>
        <button>Schedule a meeting</button>
      </div>
      <div className="image-container">
        <img className='main-image' src={mainImage} alt="" />
      </div>
    </section>
  );
};

export default MainSection;