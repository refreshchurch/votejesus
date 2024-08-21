import Image from "next/image";
import Link from "next/link"

{/* bg-[url('https://hmozwtpunayfdijerkzm.supabase.co/storage/v1/object/public/cmhforklift/temp/Vote%20Jesus/Yellow%20and%20Black%20Divorced%20Party%20Facebook%20Event%20Cover%20Photo-2.png')] bg-cover h-screen */}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <section className="w-full py-12 md:py-24 lg:py-32 "style={{ backgroundColor: "#0e2867" }}>
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
    </main>
  );
}
