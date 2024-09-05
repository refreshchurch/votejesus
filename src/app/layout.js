import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Ultimate Leader: Jesus",
  description: "As election season approaches, remember there's one candidate who truly stands above the rest—Jesus. Trust in His guidance and find peace in His wisdom.",
  openGraph: {
    title: "The Ultimate Leader: Jesus",
    description: "While elections come and go, Jesus is always in control. Trust in His guidance, find peace in His wisdom, and remember that He is the ultimate source of truth and hope.",
    url: "https://www.votejesus.us/",
    type: "website",
    images: [
      {
        url: "https://www.votejesus.us/voteJesus.png",
        width: 1200,
        height: 630,
        alt: "Vote Jesus - Ultimate Source of Truth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ultimate Leader: Jesus",
    description: "Jesus is always in control. Find peace in His wisdom as election season approaches.",
    images: ["https://www.votejesus.us/voteJesus.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/r-favicon.svg"  type="image/svg+xml"  />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
``