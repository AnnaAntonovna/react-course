import React, { useContext, useEffect } from "react";
import { CustomContext } from "./hello-memo";

export const MemoContext = React.memo(() => {
    const context = useContext(CustomContext);
    useEffect(() => {
        console.log("MemoContext remdered!");
    });

    return <></>
})