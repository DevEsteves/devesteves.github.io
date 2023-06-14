import Link from "next/link";
import eu from '../public/eu.jpg'
import Image from 'next/image';

export default function Navbar(){
    return(
        <div className="navbar">
            <Image className='profile-img' src={eu} alt='profile-img' width={230} height={230}/>
            <ul>
                <li>
                    <Link className="navbar-element" href="/#home">Home</Link>
                </li>
                <li>
                    <Link className="navbar-element" href="/#about">About</Link>
                </li>
                <li>
                    <Link className="navbar-element" href="/#education">Education</Link>
                </li>
                <li>
                    <Link className="navbar-element" href="/#projects">Projects</Link>
                </li>
                <li>
                    <Link className="navbar-element" href="/#technology_skills">Technical Skills</Link>
                </li>
            </ul>
        </div>
    )
}