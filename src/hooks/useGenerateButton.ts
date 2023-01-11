import { useState } from "react";

export const  useGenerateButton = ()=> {
	const [button, setButton] = useState("generate summary");

    return {button,setButton}
}
