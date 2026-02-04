import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/flag.jpg')" // put image in /public
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-white">

          {/* Small tag */}
          <span className="rounded-full border border-red-500 px-4 py-1 text-sm text-red-400">
            VOICE OF THE PEOPLE
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Reviving Socialism in{" "}
            <span className="text-red-500">India</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            We stand for equality, justice, and the rights of the marginalized.
            Join us to shape a better future.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/mission"
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
            >
              Our Mission
            </Link>

            <Link
              href="/join"
              className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black"
            >
              Join the Movement
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
