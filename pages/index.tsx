import type { NextPage } from "next";
import CodeEditor from "./components/Editor/CodeEditor";
import Nav from "./components/Nav/Nav";
import Layout from "./components/Shared/Layout";
import Footer from "./components/Shared/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Shared/Header";
const Home: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
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
