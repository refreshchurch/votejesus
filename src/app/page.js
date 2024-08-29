"use client"

import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import Navbar from "./navbar";  // Import your Navbar component here

{/* bg-[url('https://hmozwtpunayfdijerkzm.supabase.co/storage/v1/object/public/cmhforklift/temp/Vote%20Jesus/Yellow%20and%20Black%20Divorced%20Party%20Facebook%20Event%20Cover%20Photo-2.png')] bg-cover h-screen */ }
export default function Home() {
  const [latestVideo, setLatestVideo] = useState(null);

  const [hideUI] = useState(false);

  const displayedVideos = [
    "https://www.youtube.com/embed/TjqX-0Katbo",
    "https://www.youtube.com/embed/xUP6sqec6kk",
    "https://www.youtube.com/embed/F3wW1BN4iBo",
    "https://www.youtube.com/embed/GaHVrnsXjI0"
  ];

  useEffect(() => {
    setLatestVideo("https://www.youtube.com/embed/KZ1Pcm7PgbU")
  }, []);

  return (
    <>
      {hideUI ? (
        // better branding here
        <div className="flex items-center justify-center h-screen bg-gray-900 ">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Coming Soon</h1>
            <p className="text-lg text-gray-400 mb-12">We are working hard to launch our new website.</p>
            <a
              href="https://refresh.church/"
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
            >
              Visit Our Site
            </a>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="min-h-screen flex flex-col items-center justify-between bg-[#f5f4ee] text-[#0f2967]">
            {/* Hero Video Section */}
            <section className="relative w-full flex justify-center items-center py-12 px-4" style={{ backgroundColor: "#0f2967" }}>
              <div className="relative w-full max-w-4xl mt-10 md:px-8">
                <video
                  className="w-full h-auto rounded-xl shadow-lg"
                  autoPlay
                  muted
                  loop
                  controls
                >
                  <source src="./refreshIntro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            {/* Image Section */}
            <section className="w-full py-5 flex justify-center bg-[#0f2967]">
              <img
                src="./voteJesus.png"
                alt="Vote Jesus Theme"
                className="h-[150px] md:h-[300px] w-auto mx-4"
              />
            </section>

            {/* Information Blurb */}
            <section className="w-full py-8 md:py-24 flex justify-center px-4" style={{ backgroundColor: "#ff3b3b" }}>
              <div className="container px-8 md:px-24 lg:px-36">
                <div className="bg-[#fefffe] p-4 md:p-6 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0f2967] mb-2 md:mb-4">
                    As election season approaches, remember there&apos;s one candidate who truly stands above the rest—Jesus.
                  </h3>
                  <p className="text-base md:text-lg text-[#0f2967]">
                    We want to remind you that while elections come and go, Jesus is always in control. Trust in His guidance, find peace in His wisdom, and remember that He is the ultimate source of truth and hope.
                  </p>
                </div>
              </div>
            </section>

            {/* SERMON SECTION */}
            <section className="w-full py-8 md:py-10 lg:py-12 bg-gray-50 px-4" id="sermons">
              <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl">
                  Vote Jesus
                </h2>
                <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-xl" style={{ backgroundColor: "#0f2967" }}>
                  <iframe
                    className="w-full h-full object-cover"
                    src={latestVideo}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="space-y-6 w-full">
                  <h2 className="text-xl md:text-2xl inline-block font-bold rounded-lg px-3 py-1 bg-gray-200 text-gray-900">
                    More Sermons
                  </h2>
                  <div className="overflow-x-auto flex gap-4 md:gap-6 snap-x w-full">
                    {displayedVideos.map((videoUrl, index) => (
                      <div
                        key={index}
                        className="flex-none w-[70%] sm:w-[50%] lg:w-[30%] snap-start"
                      >
                        <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                          <iframe
                            className="w-full h-full object-cover"
                            src={videoUrl}
                            title={`YouTube video player ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
