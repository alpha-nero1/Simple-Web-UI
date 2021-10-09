import Link from 'next/link';

import { prefillArray } from '../../lib/utils';
import styles from './feature-products.module.css';
import utilStyles from '../../styles/utils.module.css';
import { AddToCartButton } from '../../components/add-to-cart-button/add-to-cart-button';

export function FeatureProducts() {
    return (
        <div className={styles.products}>
            {prefillArray(100).map((i, index) => (
                <div className={styles.productCard} key={`product-${index}`}>
                    <div>
                        <h3>Product {index + 1}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.&nbsp;
                            <Link href={`/app/products/common/${index + 1}`}><a className={utilStyles.textAlignCenter}>See more</a></Link>
                        </p>
                    </div>
                    <div className={utilStyles.flexColumn}>
                        <AddToCartButton />
                        <button className={utilStyles.btnClear}>Add to wishlist</button>
                    </div>
                </div>
            ))}
        </div>
    );
}