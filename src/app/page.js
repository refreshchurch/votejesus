"use client"

import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";

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
        <div className="flex items-center justify-center h-screen bg-gray-900">
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
        <main className="flex min-h-screen flex-col items-center justify-between">
          {/* Hero */}
          <section className="w-full py-12 px-5 md:py-24 lg:py-32 flex justify-center" style={{ backgroundColor: "#0e2867" }}>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">Unlock Your Potential</h1>
                <p className="text-lg text-primary-foreground md:text-xl">
                  Discover our innovative solutions and transform your business.
                </p>
              </div>
              <img
                src="https://hmozwtpunayfdijerkzm.supabase.co/storage/v1/object/public/cmhforklift/temp/Vote%20Jesus/Yellow%20and%20Black%20Divorced%20Party%20Facebook%20Event%20Cover%20Photo-2.png"
                width={800}
                height={600}
                alt="Hero Image"
                className="w-full h-auto rounded-lg object-cover"
                style={{ aspectRatio: "#0e2867", objectFit: "cover" }}
              />
            </div>
          </section>

          {/* Cards */}
          {/* maybe red here */}
          <section className="w-full py-12 md:py-24 bg-gray-100 text-gray-900">
            <div className="container mx-36">
            <h3 className="text-xl font-semibold mb-4">As election season approaches, remember there&apos;s one candidate who truly stands above the rest—Jesus. We want to remind you that while elections come and go, Jesus is always in control. Trust in His guidance, find peace in His wisdom, and remember that He is the ultimate source of truth and hope. </h3>

              {/* <h2 className="text-3xl font-bold mb-8 text-center">Key Policies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-md bg-gray-50">
                  <p className="text-muted-foreground">
                    Investing in our schools and ensuring every child has access to a quality education.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md bg-gray-50">
                  <h3 className="text-xl font-bold mb-4">Healthcare</h3>
                  <p className="text-muted-foreground ">
                    Improving access to affordable and high-quality healthcare for all.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md bg-gray-50">
                  <h3 className="text-xl font-bold mb-4">Jobs & Economy</h3>
                  <p className="text-muted-foreground">
                    Creating good-paying jobs and supporting small businesses to grow the local economy.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md bg-gray-50">
                  <h3 className="text-xl font-bold mb-4">Environment</h3>
                  <p className="text-muted-foreground">
                    Protecting our natural resources and promoting sustainable practices.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md bg-gray-50">
                  <h3 className="text-xl font-bold mb-4">Public Safety</h3>
                  <p className="text-muted-foreground">Ensuring our communities are safe and secure for all residents.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md bg-gray-50">
                  <h3 className="text-xl font-bold mb-4">Civil Rights</h3>
                  <p className="text-muted-foreground">
                    Defending the rights and freedoms of all people, regardless of their background.
                  </p>
                </div>
              </div> */}
            </div>
          </section>

          {/* sermons */}
          {/* style={{ backgroundColor: "#ff3b3b" }} */}
          {/* better red  */}
          <section className="w-full py-8 md:py-10 lg:py-12 bg-gray-50" >
            <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-12">
              {/* Large video section */}
              <h2 className="text-3xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl">Sermons</h2>
              {/* <div className="flex justify-center w-full"> */}
              <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <iframe
                  className="w-full h-full object-cover"
                  src={latestVideo} // Replace with your larger video URL
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* </div> */}

              {/* Popular Sermons Section */}
              <div className="space-y-6 w-full">
                <h2 className="text-2xl inline-block font-bold rounded-lg px-3 py-1 bg-gray-100 text-gray-900">Popular Sermons</h2>
                <div className="overflow-x-auto flex gap-6 snap-x  w-full">
                  {displayedVideos.map((videoUrl, index) => (
                    <div key={index} className="flex-none w-[60%] sm:w-[50%] lg:w-[30%] snap-start">
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
      )}
    </>
  );
}
