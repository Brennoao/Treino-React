// import '../styles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Valorante</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}