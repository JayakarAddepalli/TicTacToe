import './Home.css'

function HomeSection(props){
    return(
        <>
         <div className='container'>
            <div className="parentdiv">
                <div>
                    <button onClick={props.handleButton} ref={props.ButtonValues[0]}></button>   
                    <button onClick={props.handleButton} ref={props.ButtonValues[1]}></button>    
                    <button onClick={props.handleButton} ref={props.ButtonValues[2]}></button>   
                </div> 
                <div>
                    <button onClick={props.handleButton} ref={props.ButtonValues[3]}></button>   
                    <button onClick={props.handleButton} ref={props.ButtonValues[4]}></button>    
                    <button onClick={props.handleButton} ref={props.ButtonValues[5]}></button>   
                </div>   
                <div>
                    <button onClick={props.handleButton} ref={props.ButtonValues[6]}></button>   
                    <button onClick={props.handleButton} ref={props.ButtonValues[7]}></button>    
                    <button onClick={props.handleButton} ref={props.ButtonValues[8]}></button>   
                </div>
            </div>   
            <div className='resetDiv'>
                <button onClick={props.resetAll} ref={props.resetButton}>Reset</button>
            </div>
         </div>
        </>
    )
}

export default HomeSection