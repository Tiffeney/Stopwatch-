import React, { Component } from 'react';

class Stopwatch extends Component {
    state = {
        elaspedTime: 0,
        interval: null,
        laps: [3, 5, 7]

    }

// Event Handlers
// - When app loads
// - elaspedTime starts at zero

// - Start ()
// - Tigger our interval to increment 
//     state.elaspedTime by 1 every second 
// - Store a reference to this interval in state

// - Stop ()
// - Grab the refence to the interval from state
// - clearInterval(reference the interval we set in start())
// - Reset()

// - Lap ()
// - Push the current elaspedTime to state.laps []
// - Loop through state. laps and print out what's in there as a list (state -> ui)


Start() {
    // alert('You Clicked Start')
    let interval = setInterval(()=>{
        this.setState(state => {
            return {elaspedTime: state.elaspedTime +1 }
        })
    }, 1000)
    //Store reference to interval inside of components's state
    this.setState({interval})
}
    
Stop() {
// alert('You Stopped')
   clearInterval(this.state.interval) 
   //not selecting the current state selecting from the prior method. 
}
    
Reset() {
// alert('Starting Back At Zero')
    this.Stop() //stop the time
    this.setState({elaspedTime: 0})
    // this.setState((state) => {
    // return {value: state.elaspedTime=0}
    // })
}

Lap() {
    // alert('You Started A New Lap')
       this.setState(state => {
           return {laps: [...state.laps, state.elaspedTime]}
    })
}



    render () {
        return (
            <div>
                <h1>StopWatch</h1>
                <div className="Stopwatch">
                <div>{this.state.elaspedTime}</div>
                {/* {this.state.time} */}
                </div>
                <button onClick={()=>this.Start()}>Start</button>
                <button onClick={()=>this.Stop()}>Stop</button>
                <button onClick={()=>this.Reset()}>Reset</button>
                <button onClick={()=>this.Lap()}>Lap</button>
                <ul>
                    {
                        this.state.laps.map(lap => {
                            return <li>{lap}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Stopwatch