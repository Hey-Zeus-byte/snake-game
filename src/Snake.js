import React from 'react';

export default (props) => {
    return(
        <div>
            {props.snakesDots.map((dot, i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return(
                    <div className='snake-dot' key={i} style={style}>

                    </div>
                )
            })}
        </div>
    )
}