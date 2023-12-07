import { FC, ReactNode } from "react";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface IGeneralLayoutProps {
    children: ReactNode;
}

const GeneralLayout: FC<IGeneralLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
};

export default GeneralLayout;