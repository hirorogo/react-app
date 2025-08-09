import { Link } from "react-router-dom";

function SamplePage(){
    return(
        <>
        <h1>Sample Page</h1>
        <Link to={'/'}>Go to Home</Link>
        </>
    )
}
export default SamplePage;