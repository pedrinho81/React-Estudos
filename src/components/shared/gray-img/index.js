import "./style.css"
const grayImg = (props) => {
    return (
        <img className={props.gray_img ? "gray-img" : "color-img"} src={props.img_url}></img>
    )
}

export default grayImg