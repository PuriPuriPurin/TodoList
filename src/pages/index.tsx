import type { NextPage } from 'next';
import Head from 'next/head';
import CommonHead from '../components/commonHead';

const Home: NextPage = () => (
  <>
    <CommonHead />
    <Head>
      <title>NEXT.JS app template</title>
    </Head>
    <p>Hello, NEXT.JS app template!</p>
  </>
);

export default Home;
