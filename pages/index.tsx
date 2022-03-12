import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import CodeEditor from "./components/CodeEditor";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <section className="flex flex-col w-[100%]">
        <Header />
        <CodeEditor />
        <Footer />
      </section>
    </Layout>
  );
};

export default Home;
