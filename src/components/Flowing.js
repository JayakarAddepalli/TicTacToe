import './flow.css'
import close from '../assets/close.png'

function FlowingComp(props){
    return(
        <>
            <div className='parentDiv'>
                <div className="flowingComp" style={{backgroundColor: props.winScore === 'X-Wins' ? 'rgba(0, 255, 255, 0.63)' : props.winScore === 'O-Wins' ? 'rgba(255, 166, 0, 0.636)' : 'rgba(255, 255, 255, 0.636)'}}>
                    <h1 style={{backgroundColor:'transparent'}}>{props.winScoreData}</h1>
                    <p style={{backgroundColor:'transparent'}}>Note: Reset the game</p>
                    <img src={close} alt='close' className='closeImage' onClick={props.closeResult}></img>
                </div>
            </div>
        </>
    )
}

export default FlowingComp;