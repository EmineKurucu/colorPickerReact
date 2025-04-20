import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBox } from "./slices/boxSlice";
import Box, { Height40Beige, Width40Beige } from "./component/Box";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/dist/css/rcp.css";

const boxData = [
    {width:"225px", height:"225px", top:"50px", left:"55px", backgroundColor:"red", position:"absolute"},
    {width:"40px", height:"128px", top:"50px"},
    {width:"100px", height:"120px", top:"290px", left:"50px", backgroundColor:"rgb(1, 4, 30)", position:"absolute"},
    {width:"100px", height:"53px", top:"426px", left:"56px", backgroundColor:"beige", position:"absolute"},
    {width:"110px", height:"53px", top:"290px", left:"167px"},
    {width:"110px", height:"60px", top:"350px", left:"167px"},
    {width:"110px", height:"22px", top:"427px", left:"170px", backgroundColor:"rgb(1, 4, 30)"},
    {width:"273px", height:"15px", top:"465px", left:"170px"},
    {width:"150px", height:"130px", top:"50px", left:"295px", backgroundColor:"yellow"},
    {width:"72px", height:"90px", top:"190px", left:"295px"},
    {width:"74px", height:"90px", top:"190px", left:"372px" },
    {width:"152px", height:"50px", top:"293px", left:"293px"}, 
    {width:"152px", height:"96px", top:"355px", left:"293px",  backgroundColor:"rgb(5, 5, 89)"}, 
    {width:"30px", height:"325px", top:"52px", left:"460px"},
    {width:"30px", height:"125px", top:"355px", left:"460px", backgroundColor:"rgb(214, 80, 53)"},   
];

const boxHeight40Data = [
    { width: "115px" },
    { width: "151px", left: "130px" },
    { width: "150px", left: "298px" , backgroundColor:"yellow"},
    { width: "30px", left: "460px" },
];

const boxWidth40Data = [
    { height: "170px", top: "190px" },
    { height: "110px", top: "370px" },
];

// seçilebilir box yapısı oluşturma
const SelectableBox = ({ index, isSelected, onClick, ...props }) => {
    return (
        <div 
            onClick={() => onClick(index)} 
            style={{ 
                cursor: "pointer",
                outline: isSelected ? "3px solid #00BFFF" : "none",
                zIndex: isSelected ? 1 : "auto"
            }}
        >
            <Box {...props} />
        </div>
    );
};


const SelectableHeight40Beige = ({ index, isSelected, onClick, ...props }) => {
    return (
        <div 
            onClick={() => onClick(index, "height40")} 
            style={{ 
                cursor: "pointer",
                outline: isSelected ? "3px solid #00BFFF" : "none",
                zIndex: isSelected ? 1 : "auto"
            }}
        >
            <Height40Beige {...props} />
        </div>
    );
};

const SelectableWidth40Beige = ({ index, isSelected, onClick, ...props }) => {
    return (
        <div 
            onClick={() => onClick(index, "width40")} 
            style={{ 
                cursor: "pointer",
                outline: isSelected ? "3px solid #00BFFF" : "none",
                zIndex: isSelected ? 1 : "auto"
            }}
        >
            <Width40Beige {...props} />
        </div>
    );
};

function Mondrian() {
    const adSoyad = useSelector((state) => state.user.adSoyad);
    const dispatch = useDispatch();
    
    //sabit box stateleri
    const [boxes, setBoxes] = useState(boxData);
    const [height40Boxes, setHeight40Boxes] = useState(boxHeight40Data);
    const [width40Boxes, setWidth40Boxes] = useState(boxWidth40Data);
    
    //seçilebilir box yapısı
    const [selectedBox, setSelectedBox] = useState(null);
    const [selectedBoxType, setSelectedBoxType] = useState(null); //3 farklı component için
   //colorPicker
    const [color, setColor] = useColor("hex", "#ffffff");

    useEffect(() => {
        dispatch(setBox(boxes));
    }, [dispatch, boxes]);

   
    const handleBoxSelect = (index, type = "normal") => {
        setSelectedBox(index);
        setSelectedBoxType(type);
    };

    
    const handleColorChange = () => {
        if (selectedBox === null) return;
        
        const newColor = color.hex;
        
        if (selectedBoxType === "normal") {
            const updatedBoxes = [...boxes];
            updatedBoxes[selectedBox] = {
                ...updatedBoxes[selectedBox],
                backgroundColor: newColor
            };
            setBoxes(updatedBoxes);
        } else if (selectedBoxType === "height40") {
            const updatedBoxes = [...height40Boxes];
            updatedBoxes[selectedBox] = {
                ...updatedBoxes[selectedBox],
                backgroundColor: newColor
            };
            setHeight40Boxes(updatedBoxes);
        } else if (selectedBoxType === "width40") {
            const updatedBoxes = [...width40Boxes];
            updatedBoxes[selectedBox] = {
                ...updatedBoxes[selectedBox],
                backgroundColor: newColor
            };
            setWidth40Boxes(updatedBoxes);
        }
    };

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgb(0, 24, 45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            flexDirection: "column"
        }}>
            <div style={{ color: "white", fontSize: "1.5em", marginBottom: "20px" }}>
                Merhaba {adSoyad}! Mondrian tasarımım nasıl gözüküyor?
            </div>

            <div style={{
                position: "relative",
                width: "500px",
                height: "495px",
                backgroundColor: "white",
                border: "10px solid black",
                marginBottom: "20px"
            }}>
                {boxes.map((box, index) => (
                    <SelectableBox 
                        key={index} 
                        index={index}
                        isSelected={selectedBox === index && selectedBoxType === "normal"}
                        onClick={handleBoxSelect}
                        {...box} 
                    />
                ))}

                {height40Boxes.map((box, index) => (
                    <SelectableHeight40Beige 
                        key={index} 
                        index={index}
                        isSelected={selectedBox === index && selectedBoxType === "height40"}
                        onClick={handleBoxSelect}
                        {...box} 
                    />
                ))}

                {width40Boxes.map((box, index) => (
                    <SelectableWidth40Beige 
                        key={index} 
                        index={index}
                        isSelected={selectedBox === index && selectedBoxType === "width40"}
                        onClick={handleBoxSelect}
                        {...box} 
                    />
                ))}
            </div>
            
            
            <div style={{
                position: "fixed", 
                left: "50px",  
                top: "50%",    
                transform: "translateY(-50%)",
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center" 
            }} > 

                <ColorPicker 
                    position = "fixed"
                    width={300} 
                    height={200} 
                    color={color} 
                    onChange={setColor} 
                    hideHSV 
                />
                <button 
                    onClick={handleColorChange}
                    style={{
                        marginTop: "10px",
                        padding: "8px 16px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Rengi Uygula
                </button>
                <button 
                    onClick={() => setSelectedBox(null)}
                    style={{
                        padding: "8px 16px",
                        backgroundColor: "#f44336",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    İptal
                </button>
                <div style={{ color: "white", marginTop: "10px" }}>
                    {selectedBox !== null ? `Kutu ${selectedBox + 1} seçildi` : "Lütfen bir kutu seçin"}
                </div>
            </div>
        </div>
    );
}

export default Mondrian;