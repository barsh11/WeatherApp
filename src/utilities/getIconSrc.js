export const getIconSrc= (iconNum) => {
    let num= iconNum?.toString();
    if(iconNum < 10){
        num= `0${num}`;
    }
    const src= iconNum ? `https://developer.accuweather.com/sites/default/files/${num}-s.png` : null;
    return src;
}