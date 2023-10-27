import { useContext } from "react";
import { DataContext } from "../App";
const A = () => {
    const record = useContext(DataContext);
    console.log(record);
    return (
        <>
            <h1>A Component</h1>
        </>
    )
}
export default A;