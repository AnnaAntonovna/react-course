import React, { useEffect } from "react"
import { MemoContext } from "./memo-context";

export const MemoChild = React.memo(() =>  {
    useEffect(() => {
        console.log("Memo-child rendered!")
    });
    return <MemoContext />;
});