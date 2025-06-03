'use client'
import Header from "@/components/header/page";
import Head from "./head/page";
import Tour from "./tour/page";
import Discography from "./discography/page";
import Contact from "./contact/page";
import FadeIn from "@/components/fadeIn/page";
import Footer from "@/components/footer/page";
import Video from "./video/page";
import About from "./about/page";
import { Suspense } from "react";
import Photos from "./photos/page";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        <Head />
        <section id="tour">
          <Tour />
        </section>
        <section id="video">
          <Video />
        </section>
        <section id="photos">
          {/* <Photos /> */}
        </section>
        <section id="discography">
          <FadeIn>
            <Discography />
          </FadeIn>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="photos">
          <FadeIn>
            <Suspense fallback={<div>Carregando...</div>}>
              <Photos />
            </Suspense>
          </FadeIn>
        </section>
        <section id="contact">
          <FadeIn delay={0.2}>
            <Contact />
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
