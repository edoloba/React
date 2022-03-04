import React, {useState} from 'react';
import '../Components/Button.css';

const Button = () => {
    const [moveUp, setMoveUp] = useState(0)
    
    const handleClick = () => {
      setMoveUp(moveUp - 50)
    }
  
    return (
        <>
          <h1>Move The Box</h1>
      <div className="container">
        <button onClick={handleClick}><span>👆</span>Move Up<span>👆</span></button>
      </div>
          <div className="rectangle" style={{transform: `translateY(${moveUp}px)`}}></div>
      </>
    );
  }
  
  export default Button;