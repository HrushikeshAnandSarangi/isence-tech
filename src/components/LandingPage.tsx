export default function Hero() {
  return (
    <section class="relative overflow-hidden bg-black px-6 py-32 text-white">
      {/* Background glow */}
      <div class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div class="absolute left-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div class="mx-auto max-w-4xl text-center">
        <span class="mb-6 inline-block rounded-full border border-zinc-700 px-4 py-1 text-xs uppercase tracking-widest text-zinc-400">
          Intelligent Systems Platform
        </span>

        <h1 class="text-4xl font-bold leading-tight md:text-6xl">
          Build smarter products
          <span class="block bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            with confidence
          </span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-zinc-400">
          Design, deploy, and scale intelligent applications using a modern,
          developer-first platform.
        </p>

        {/* Actions */}
        <div class="mt-10 flex justify-center gap-4">
          <button class="rounded-xl bg-white px-6 py-3 font-medium text-black hover:bg-zinc-200 transition">
            Get Started
          </button>

          <button class="rounded-xl border border-zinc-700 px-6 py-3 text-zinc-300 hover:border-zinc-500 hover:text-white transition">
            View Docs
          </button>
        </div>
      </div>
    </section>
  );
}
