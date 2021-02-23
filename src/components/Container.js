import React, { useState } from 'react';
import classNames from 'classnames';

export default function Container() {
    const [bounce, setBounce] = useState(false);
    const [color, setColor] = useState(false);
    const [color1, setColor1] = useState("#000000");
    const [color2, setColor2] = useState("#000000");
    const [color3, setColor3] = useState("#000000");
    
    
    const handleBounce = () => {
        setBounce(!bounce);
      };
      
      const handleColor = () => {
        setColor(!color)
      };
      
      const className = classNames({
        'ball': true,
        'active': bounce === true,
        'changeColor': color  === true,
        
      });
      
      
      
      const style = { "--color-1": color1, "--color-2": color2,"--color-3": color3 };
      
    return (
        <div style={style} className="color">
            <div className="background">
                <div className={className}></div>
                <div className="box">
                    <div>
                        <button className="Btn" onClick={handleBounce}>Bounce</button>
                        <button className="Btn" onClick={handleColor}>Fill</button>
                    </div>
                    <div>
                       <input type="color" onChange={e => setColor1(e.target.value) } ></input>
                       <input type="color" onChange={e => setColor2(e.target.value) } ></input>
                       <input type="color" onChange={e => setColor3(e.target.value) } ></input>
                       
                    </div>
                </div>
            </div>
            
        </div>
    )
}
