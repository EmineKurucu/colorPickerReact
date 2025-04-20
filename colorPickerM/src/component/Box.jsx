import React from "react"
// ana compoment kısmı

const Box = ({width = "100px", height = "100px", top = "0", left = "0", backgroundColor = "beige", position = "absolute" , borderStyle = "solid", borderWidth="9px" , borderColor = "black"}) => {
    const styles = {
        width,
        height,
        top,
        left,
        position,
        backgroundColor,
        borderStyle,
        borderWidth,
        borderColor
    };

    return <div style={styles}></div>;
};

const Width40Beige = ({width = "40px",  height = "100px", top = "0", left = "0", backgroundColor = "beige", position = "absolute" , borderStyle = "solid", borderWidth="9px" , borderColor = "black"}) => {
    return <Box 
        width = {width}
        height= {height}
        top = {top}
        left = {left}
        position = {position}
        backgroundColor = {backgroundColor}
        borderStyle = {borderStyle}
        borderColor = {borderColor}
        borderWidth = {borderWidth}
       
    ></Box>
};

const Height40Beige = ({width = "100px",  height = "40px", top = "0", left = "0", backgroundColor = "beige", position = "absolute" , borderStyle = "solid", borderWidth="9px" , borderColor = "black"}) => {
    return <Box 
        width = {width}
        height= {height}
        top = {top}
        left = {left}
        position = {position}
        backgroundColor = {backgroundColor}
        borderStyle = {borderStyle}
        borderColor = {borderColor}
        borderWidth = {borderWidth}
       
    ></Box>
};

export default Box;
export { Height40Beige };
export { Width40Beige };