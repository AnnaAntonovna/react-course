import { useEffect, useState, useRef, createContext } from "react";
import { MemoChild } from "./hello-mome-child";

export const CustomContext = createContext(false);

export const HelloMemo = () => {
    const [isCheked, setIsChecked] = useState(false);
    useEffect(() => {
        console.log("HelloMemo component re-rendered!")
    });

    const changeHandler = (event) => {
        setIsChecked(event.target.checked);
    }

    return(
        <CustomContext.Provider value={isCheked}>
            <input onChange={changeHandler} type="checkbox"/>
            <MemoChild />
        </CustomContext.Provider>
    )
}