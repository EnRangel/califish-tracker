import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="mx-auto max-w-4xl px-6 py-24 flex flex-col gap-16 items-center">

        {/* LOGO */}
        <Image
          className="dark:invert"
          src="/wildlife.svg.jpg"
          alt="California Wildlife"
          width={120}
          height={190}
          priority
        />

        <section className="w-full text-center">
          <h1 className="text-4xl font-bold">
            California Fish Restocking Tracker
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            An interactive map and data explorer showing where and when fish are
            stocked across California.
          </p>
        </section>

        <section className="w-full aspect-video overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/n1oyxq6eBrA?si=tZqetj8jQi57Zv0n"
            title="California Fish Stocking Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        <section className="space-y-4 ">
          <h2 className="text-2xl font-semibold">About the Project</h2>
          <p>
            The California Fish Restocking Tracker visualizes real fish planting
            data provided by the California Department of Fish and Wildlife
            (CDFW). It helps anglers, researchers, and the public understand
            where fish are being stocked and how often.
          </p>
          <p>
            This project uses a serverless backend to load and process official
            stocking data and displays it on an interactive map for easy
            exploration.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Source</h2>
          <p>
            All stocking data is sourced directly from the California Department
            of Fish and Wildlife and updated based on published planting
            schedules.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/map"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            View the Interactive Map
          </Link>
        </section>

      </main>
    </div>
  );
}
