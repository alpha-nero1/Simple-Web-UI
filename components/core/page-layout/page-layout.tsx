import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

interface Props {
    children?: any;
    page?: string;
}

export function PageLayout(props: Props) {
    return (
        <>
            <Navbar page={props.page}/>
            <main style={{ minHeight: '100%' }}>
                {props.children}
            </main>
            <Footer />
        </>
    )
}
