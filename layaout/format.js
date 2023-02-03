import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

export default function format({children}){
    return (
        <>
        <Head>
            <title>Blog</title>
        </Head>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        </>
    )
}