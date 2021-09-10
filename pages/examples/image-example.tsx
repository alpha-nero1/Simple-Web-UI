import Link from 'next/link';
import Image from 'next/image';


export default function ImageExample() {
    return <>
        <Link href="/">
            <a>Back home</a>
        </Link>
        <h1>Example of images</h1>
        <h2>Un-optimised: </h2>
        <img src="/images/stars-2.jpg" alt="Stars" />
        <h2>Optimised: </h2>
        {/* Example of optimised image tag use! */}
        <Image 
            src="/images/stars-2.jpg"
            width={400}
            height={300}
        ></Image>
    </>
}