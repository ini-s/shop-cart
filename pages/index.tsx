import Head from 'next/head';
import GeneralLayout from '@/layout/generalLayout';
import { ReactElement } from 'react';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Shop cart</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon-32x32.png" />
            </Head>
            <main></main>
        </>
    )
};

HomePage.getLayout = (page: ReactElement) => {
    return (
        <GeneralLayout>
            <main>{page}</main>
        </GeneralLayout>
    )
};
