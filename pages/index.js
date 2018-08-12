import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <h1>SSR start</h1>
            <Link href='/about'>
                <button>About</button>
            </Link>
            <Link href='/robots'>
                <button>Robots</button>
            </Link>
        </div>
    )
}

export default Index