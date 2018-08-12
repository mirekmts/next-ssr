import Link from 'next/link';
import Image from '../components/image'

const About = () => {
    return (
        <div style={{fontSize: '20px', color: 'blue'}}>
            <h1>About</h1>
            <Link href='/'>
                <button>Back</button>
            </Link>
            <Image/>
            <p>I'm a happy man</p>
        </div>
    )
}

export default About