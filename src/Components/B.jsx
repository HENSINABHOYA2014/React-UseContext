import { useContext } from "react";
import { DataContext } from "../App";
const B = () => {
    const record = useContext(DataContext);
    console.log(record);
    return (
        <>
            <h1>B Component</h1>
        </>
    )
}
export default B;