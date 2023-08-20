import About from "@/components/About";
import Agency from "@/components/Agency";
import Blog from "@/components/Blog";
import Company from "@/components/Company";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/layout";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Agency />
        <Experience />
        <Blog />
        <Company />
        <Subscribe />
      </Layout>
    </>
  );
}
