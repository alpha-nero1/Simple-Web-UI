import Image from 'next/image'; 
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { PageLayout } from '../../../components/core/page-layout/page-layout'
import { useStore } from '../../../stores/store';
import styles from './cart.module.css';
import utilStyles from '../../../styles/utils.module.css';
import { getRandomProductImage } from '../../../lib/utils';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface CartProduct {
    id: number;
    name: string;
    count: number;
    price: number;
}

interface CartFormValues {
    address?: string;
}

export default observer(function CartPage() {
    const { cartStore } = useStore();
    const [isLoading, setIsLoading] = useState(false);
    const [cartItems, setCartItems] = useState<CartProduct[]>([]);
    const router = useRouter();

    const formRef = useRef<CartFormValues>()

    const getItems = () => {
        const items: CartProduct[] = [];
        cartStore.items.forEach(value => {
            if (!value?.length) return;
            items.push({
                id: value[0].id,
                name: value[0].name,
                count: value.length,
                price: 49.95
            })
        });
        return items;
    }

    const placeOrderOnClicked = () => {
        // Simulate placing the order.
        setIsLoading(true);
        fetch('/api/order')
        .then((res) => res.json())
        // Pass id on to order complete route.
        .then(data => {
            router.push(`/app/order/complete/${data.id}`);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    // Remember that we are using state here for items instead of using getItems() directly.
    // This is to avoid hydration error/warnings. Because if we use this value directly, what the server rendered
    // and what the client rendered will not be the same and react will SCREAM. This is only because of
    // the nature of how we are persisting the cart in local storage...
    useEffect(() => { setCartItems(getItems()); }, [cartStore.items])

    const totalPrice = (cartItems?.length ? cartItems.map(item => item.count * item.price).reduce((a, b) => a + b) : 0.00).toFixed(2);

    const form = () => {
        return (
            <Formik<CartFormValues>
                initialValues={{ address: '8 Harrabrook Aveneue, Five Dock NSW, 2046' }}
                innerRef={formRef as any}
                validate={values => {
                    const errors: any = {}
                    if (!values.address) {
                        errors.address = 'Required.';
                    }
                    return errors;
                }}
                onSubmit={placeOrderOnClicked}
            >
                {({ isSubmitting, dirty, handleReset }) => (
                    <Form>
                        <div>
                            <label>
                                Delivery address&nbsp;&nbsp;
                                <Field type="text" name="address"/>
                            </label>
                            &nbsp;<ErrorMessage name="address" render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }

    return (
        <PageLayout page="cart">
            <div className={styles.cartPage}>
                <section className={styles.cartItemsSection}>
                    <h1>Cart</h1>
                    {cartItems.map(item => (
                        <div className={styles.cartItem} key={`product-${item.id}`}>
                            <Image
                                className={styles.cartImage}
                                src={`/images/${getRandomProductImage(item.id)}`} 
                                height={80} 
                                width={100}
                                objectFit="contain"
                            />
                            <p className={styles.cartItemText}>{item.name} ({item.count})&nbsp;&nbsp;<span>${(item.price * item.count).toFixed(2)}</span></p>
                            <button onClick={() => cartStore.removeProduct(item.id)} className={utilStyles.btnWarn}>Remove</button>
                        </div>
                    ))}
                    {!cartItems.length && <p>There are no items in your cart</p>}
                    {form()}
                </section>
                <section className={styles.summarySection}>
                    <h2>Summary</h2>
                    <p>Total: ${totalPrice}</p>
                    <p>Items: {cartItems.length}</p>
                    <div>
                        {
                            isLoading ?
                            <div className={styles.fakeButton}>
                                <CircularProgress color="inherit" />
                            </div> :
                            <button
                                disabled={!+totalPrice}
                                onClick={() => {if (formRef.current) (formRef.current as any).handleSubmit()}} 
                                className={`${utilStyles.btnWarn} ${styles.submitButton}`}
                                type="submit"
                            >
                                Place order
                            </button>
                        }
                    </div>
                </section>
            </div>
        </PageLayout>
    )
});
