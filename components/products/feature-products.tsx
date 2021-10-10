import Link from 'next/link';
import Image from 'next/image';

import { getRandomProductImage, prefillArray } from '../../lib/utils';
import styles from './feature-products.module.css';
import utilStyles from '../../styles/utils.module.css';
import { AddToCartButton } from '../../components/add-to-cart-button/add-to-cart-button';
import { AddToWishlistButton } from '../../components/add-to-wishlist-button/add-to-wishlist-button';
import { useStore } from '../../stores/store';

export function FeatureProducts() {
    const { cartStore } = useStore();

    return (
        <div className={styles.products}>
            {prefillArray(100).map((i, index) => (
                <div className={styles.productCard} key={`product-${index}`}>
                    <div>
                        <h3 className={styles.productTitle}>Product {index + 1}</h3>
                        <Image
                            src={`/images/${getRandomProductImage(index + 1)}`}
                            className={styles.image}
                            height={120}
                            width={230}
                            objectFit="contain"
                        />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.&nbsp;
                            <Link href={`/app/products/common/${index + 1}`}><a className={utilStyles.textAlignCenter}>See more</a></Link>
                        </p>
                    </div>
                    <div className={utilStyles.flexColumn}>
                        <AddToCartButton onClickHandler={() => {
                            cartStore.addProduct({
                                id: index,
                                name: `Product ${index + 1}`
                            })
                        }}/>
                        <AddToWishlistButton />
                    </div>
                </div>
            ))}
        </div>
    );
}