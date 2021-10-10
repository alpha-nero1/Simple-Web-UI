import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { getRandomProductImage } from '../../../../../lib/utils';
import styles from './product-styles.module.css';
import utilStyles from '../../../../../styles/utils.module.css';
import { Navbar } from '../../../../../components/core/navbar/navbar';
import { AddToCartButton } from '../../../../../components/add-to-cart-button/add-to-cart-button';
import { PageLayout } from '../../../../../components/core/page-layout/page-layout';
import { Product } from '../../../../../components/products/product';
import { useStore } from '../../../../../stores/store';
import { observer } from 'mobx-react-lite';
import HeadAdvanced from '../../../../../components/seo/HeadAdvanced';

interface Props {
    id?: number;
}

export default observer(function ProductType(props: Props) {
    const { cartStore } = useStore();

    const name = `Product ${props.id || 0 + 1}`
    const image = `/images/${getRandomProductImage(props.id || 0 + 1)}`;

    const product: Product = {
        id: props.id || 0,
        name
    }
    
    const addToCartHandler = () => {
        cartStore.addProduct(product);
    }
    
    return (
        <PageLayout>
            <HeadAdvanced
                title={`Thrifty.com | ${name}`}
                description="Lorem ipsum dolor sit amet"
                openGraph={{ image: `https://thrifty.com${image}` }}
                google={{ translate: 'notranslate' }}
                structuredData={`{
                    "@context": "https://schema.org/",
                    "@type": "Product",
                    "name": "${name}"",
                    "image": ["https://thrifty.com${image}"],
                    "description": "Lorem ipsum",
                    "brand": {
                        "@type": "Brand",
                        "name": "Thrifty.com"
                    }
                }`}
            />
            <div className={styles.productPage}>
                <div className={styles.imageContainer}>
                    <Image
                        src={image}
                        className={styles.image}
                        layout="fill"
                    />
                </div>
                <div className={styles.mainSection}>
                    <h1>Product {props.id}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <p className={styles.price}>Price: $49.99</p>
                </div>
                <div className={utilStyles.flexRow}>
                    <button className={`${utilStyles.btnClear} ${styles.largeBtn}`}>Add to wishlist</button>
                    <div style={{ width: '1rem' }}></div>
                    <AddToCartButton classNames={styles.largeBtn} onClickHandler={addToCartHandler} />
                </div>
            </div>
        </PageLayout>
    );
});

// Enable SSR passing through id.
export async function getServerSideProps({ params }: GetStaticPropsContext) {
    // Could do any extra processing we wanted to here...

    return {
        props: {
            id: params?.id
        }
    }
}