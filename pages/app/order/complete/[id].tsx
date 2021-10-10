import { GetStaticPropsContext } from 'next';
import { PageLayout } from '../../../../components/core/page-layout/page-layout'
import styles from './order-complete.module.css';

interface Props {
    id?: string;
}

export default function OrderCompletePage(props: Props) {
    const now = new Date();
    return (
        <PageLayout>
            <section className={styles.page}>
                <h1 className={styles.title}>Thanks for ordering!</h1>
                <h2>Order reference: {props.id}</h2>
                <h2>Your order should arrive shortly via drone delivery.</h2>
                <p>Live feed drone delivery (dispatched: {now.toLocaleTimeString()}):</p>
                <video className={styles.videoView} autoPlay loop muted>
                    <source src="/videos/sunset.mp4" type="video/mp4" />
                </video>
            </section>
        </PageLayout>
    )
}

// Enable SSR passing through id.
export async function getServerSideProps({ params }: GetStaticPropsContext) {
    // Could do any extra processing we wanted to here...

    return {
        props: {
            id: params?.id
        }
    }
}
