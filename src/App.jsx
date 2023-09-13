import Experience from "./Experience";

const App =()=>{
    return (
        
        <>
        <info/> 
        <canvas
            camera = {{position:[0,0,5]}}
        >
            <Experience/>

            </canvas>
        </>
    )
}
export default App;