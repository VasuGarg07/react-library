import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery"
import "./MenuBar.css"

const MenuBar = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="ref-container">
            <div className="menu-container">
                <h4>App Name</h4>
                <span className="spacer" />
                {isMobile ?
                    <button onClick={() => setOpenMenu(prev => !prev)}>
                        Menu
                    </button>
                    : (
                        <>
                            <a href="#">Home</a>
                            <a href="#">Contact</a>
                            <a href="#">About Us</a>
                        </>
                    )
                }
            </div>

            {isMobile && openMenu && (
                <div className="menu-options">
                    <a href="#">Home</a>
                    <a href="#">Contact</a>
                    <a href="#">About Us</a>
                </div>
            )}
        </div>
    )
}

export default MenuBar