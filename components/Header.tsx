import Image from 'next/image';
import Link from 'next/link';
import eu from '../public/eu.jpg'
import {FaGithub, FaEnvelope, FaLinkedin, FaRegListAlt, FaStackOverflow} from 'react-icons/fa';

export default function Header(){
    return(
            <header className="ds-header">
                <ul>
                    <li><Link href='/Rodrigo_Curriculum.pdf' target="_self" rel="noreferrer"><FaRegListAlt/> Currículum Vitae</Link></li>
                    <li><Link href="mailto:Estevesrodri@outlook.com? subject=subject text">
                        <FaEnvelope/> Estevesrodri@outlook.com</Link></li>
                    <li><Link href="https://www.linkedin.com/in/rodrigo--esteves/"><FaLinkedin/> Linkedin</Link></li>
                    <li><Link href="https://www.github.com/devesteves" target="_blank" rel="noreferrer">
                        <FaGithub/> Github</Link></li>
                    <li><Link href="https://pt.stackoverflow.com/users/184749/rodrigo" target="_blank"
                    rel="noreferrer"><FaStackOverflow/> StackOverflow</Link></li>
                </ul>
                    <h1>Rodrigo Esteves</h1>
            </header>
    )
}