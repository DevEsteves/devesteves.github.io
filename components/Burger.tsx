import { useState } from "react"
import Link from "next/link"

export default function Burger(){
    const [open, setOpen] = useState(false)
    
    return(
        <>
            <button
                className={`burger-btn${open ? ' open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`burger-menu${open ? ' open' : ''}`}>
                <ul>
                    <li>
                        <Link className="navbar-element" href="/#home" onClick={() => setOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link className="navbar-element" href="/#about" onClick={() => setOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link className="navbar-element" href="/#education" onClick={() => setOpen(false)}>Education</Link>
                    </li>
                    <li>
                        <Link className="navbar-element" href="/#projects" onClick={() => setOpen(false)}>Projects</Link>
                    </li>
                    <li>
                        <Link className="navbar-element" href="/#technology_skills" onClick={() => setOpen(false)}>Technical Skills</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}