
// eslint-disable-next-line react/prop-types
const Images = ({ image, text }) => {
    return (
        <div className="image-container">
            <img src={image} alt="" />
            <p>{text}</p>
        </div>

    )
}

export default Images