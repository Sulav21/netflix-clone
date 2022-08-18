import React,{useState,useEffect} from "react";
import "./nav.css";

export const Nav = () => {
    const [handleShow, setHandleShow] = useState(false)

    const transitionNav=()=>{
        if(window.scrollY>100){
            setHandleShow(true)
        }else{
            setHandleShow(false)
        }
    }

    useEffect(() => {
     window.addEventListener('scroll',transitionNav)
     return ()=>window.removeEventListener("scroll",transitionNav)
    }, [])
    
  return (
    <div className={`nav ${handleShow && "nav_black"}`}>

      <div className="nav_contents">
        <img
          className="nav-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <img
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />

      </div>
    </div>
  );
};
