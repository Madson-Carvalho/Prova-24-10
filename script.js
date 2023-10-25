const handleClick = (id) => {
    const imgSrc = document.querySelector(`#${id}`).getAttribute("src");
    const singleImgSection = document.createElement("section");
    singleImgSection.setAttribute("class", "zoom");
    singleImgSection.setAttribute("onclick", "handleExit()")

    const singleImg = document.createElement("img");
    singleImg.setAttribute('src', imgSrc);

    singleImgSection.style.width = "100%"
    singleImgSection.style.backgroundColor = "rgba(214, 214, 214, 0.507)"
    singleImgSection.style.height = "100vh"
    singleImgSection.style.position = "absolute"
    singleImgSection.style.zIndex = "1"
    singleImgSection.style.top = "0px"

    singleImg.style.position = "absolute";
    singleImg.style.width = "350px";
    singleImg.style.height = "350px";
    singleImg.style.top = "150px";
    singleImg.style.left = "600px";

    singleImgSection.appendChild(singleImg);

    document.body.appendChild(singleImgSection);
}   

const handleExit = () => {
    const section = document.querySelector(`.zoom`);

    document.body.removeChild(section)
}  