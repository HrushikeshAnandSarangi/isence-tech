import { createSignal, onMount, onCleanup, JSX } from 'solid-js';

export default function HeroSection(): JSX.Element {
  const [scrollY, setScrollY] = createSignal(0);
  const [isVisible, setIsVisible] = createSignal(false);

  onMount(() => {
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  return (
    <section class="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* Video Background */}
      <div class="absolute inset-0 w-full h-full">
        <video
          autoplay
          loop
          muted
          playsinline
          class="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `scale(${1 + scrollY() * 0.0002})`,
            filter: 'brightness(0.5) contrast(1.2)'
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Gradient Overlays */}
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        
        {/* Minimal Grid Effect */}
        <div 
          class="absolute inset-0 opacity-5"
          style={{
            'background-image': `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            'background-size': '80px 80px',
            transform: `translateY(${scrollY() * 0.2}px)`
          }}
        />
      </div>

      {/* Centered Content */}
      <div class="relative z-10 max-w-6xl mx-auto px-8 text-center">
        
        {/* Minimal Label */}
        <div 
          class={`inline-flex items-center gap-2 mb-12 transition-all duration-1000 ${
            isVisible() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 'transition-delay': '0ms' }}
        >
          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span class="text-xs font-medium text-gray-400 tracking-[0.3em] uppercase">
            Deep-Tech Engineering
          </span>
          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full" />
        </div>

        {/* Main Headline - Large and Bold */}
        <h1 
          class={`mb-8 transition-all duration-1000 ${
            isVisible() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ 'transition-delay': '200ms' }}
        >
          <div class="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight">
            <span class="block bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent mb-4">
              Engineering
            </span>
            <span class="block bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </div>
        </h1>

        {/* Minimal Description */}
        <p 
          class={`text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1000 ${
            isVisible() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 'transition-delay': '400ms' }}
        >
          Semiconductor design and embedded systems for mission-critical applications
        </p>

        {/* Single CTA */}
        <div 
          class={`transition-all duration-1000 ${
            isVisible() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 'transition-delay': '600ms' }}
        >
          <button class="group relative px-12 py-5 bg-white text-black rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-500 hover:scale-105 active:scale-100 overflow-hidden shadow-2xl hover:shadow-white/20">
            <span class="relative z-10 flex items-center gap-3">
              Explore Solutions
              <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Minimal Stats - Bottom */}
        <div 
          class={`mt-32 flex justify-center items-center gap-16 transition-all duration-1000 ${
            isVisible() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 'transition-delay': '800ms' }}
        >
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div class="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Years
            </div>
          </div>

          <div class="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div class="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Projects
            </div>
          </div>

          <div class="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              6
            </div>
            <div class="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Industries
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div 
        class={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          isVisible() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ 'transition-delay': '1000ms' }}
      >
        <div class="flex flex-col items-center gap-3 text-gray-500 hover:text-white transition-colors duration-500 cursor-pointer group">
          <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors duration-500">
            <div class="w-1 h-2 bg-gray-600 rounded-full animate-bounce group-hover:bg-white transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}