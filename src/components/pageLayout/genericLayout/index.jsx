import './style.css'
// eslint-disable-next-line react/prop-types
const GenericLayout = ({ image, imageCompany, technologies1, technologies2, technologies3, technologies4, content, background }) => {
    return (
        <div className='div-main' style={{ background }}>
            <div className='left-column'>
                <img className='image' src={image} alt="" />
                <ul className='tech-list'>
                    <li>{technologies1}</li>
                    <li>{technologies2}</li>
                    <li>{technologies3}</li>
                    <li>{technologies4}</li>
                </ul>
                <p className='content'>{content}</p>
            </div>
            <div className='right-column'>
                <img className='imageCompany' src={imageCompany} alt="" />
            </div>
        </div>
    );
};

export default GenericLayout;
