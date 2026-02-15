import { createSignal, onCleanup, onMount, Show, For, JSX } from 'solid-js';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface ProductSubItem {
  label: string;
  href: string;
  description: string;
  icon: string;
}

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = createSignal(false);
  const [isProductsOpen, setIsProductsOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);
  let productsRef: HTMLDivElement | undefined;

  const navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products', hasDropdown: true },
    { label: 'Technology', href: '#technology' },
    { label: 'Careers', href: '#careers' },
  ];

  const productSubItems: ProductSubItem[] = [
    { 
      label: 'IC Design', 
      href: '#ic-design',
      description: 'Custom integrated circuits',
      icon: '🔬'
    },
    { 
      label: 'Sensor Interface', 
      href: '#sensor-interface',
      description: 'Advanced sensor solutions',
      icon: '📡'
    },
    { 
      label: 'Embedded Systems', 
      href: '#embedded-systems',
      description: 'Smart embedded platforms',
      icon: '💻'
    },
    { 
      label: 'Lab Equipment', 
      href: '#lab-equipments',
      description: 'Professional lab tools',
      icon: '🔧'
    },
  ];

  // Handle scroll effect and click outside
  onMount(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef && !productsRef.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    });
  });

  return (
    <nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled() 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5' 
        : 'bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md'
    }`}>
      
      {/* Desktop Navigation */}
      <div class="hidden lg:block">
        <div class="max-w-7xl mx-auto px-8">
          <div class="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a 
              href="#" 
              class="group flex items-center gap-3 relative z-10"
            >
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <img
                  src="/logo.png"
                  alt="iSense Technologies"
                  class="h-14 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Navigation and Contact Button - All Together */}
            <div class="flex items-center gap-1">
              <For each={navItems}>
                {(item) => (
                  <div
                    class="relative"
                    ref={item.hasDropdown ? productsRef : undefined}
                    onMouseEnter={() => item.hasDropdown && setIsProductsOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setIsProductsOpen(false)}
                  >
                    <a
                      href={item.href}
                      class="group px-5 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 relative"
                    >
                      <span class="relative z-10">{item.label}</span>
                      
                      <Show when={item.hasDropdown}>
                        <svg
                          class={`w-4 h-4 transition-all duration-300 relative z-10 ${
                            isProductsOpen() ? 'rotate-180 text-blue-600' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Show>
                      
                      {/* Hover background pill */}
                      <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
                    </a>

                    {/* Enhanced Desktop Dropdown */}
                    <Show when={item.hasDropdown}>
                      <div
                        class={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 transition-all duration-300 ease-out ${
                          isProductsOpen()
                            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                        }`}
                      >
                        <div class="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
                          <div class="p-2">
                            <For each={productSubItems}>
                              {(subItem) => (
                                <a
                                  href={subItem.href}
                                  class="group flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                                  onClick={() => setIsProductsOpen(false)}
                                >
                                  <div class="text-2xl mt-0.5 transition-transform duration-300 group-hover:scale-110">
                                    {subItem.icon}
                                  </div>
                                  <div class="flex-1">
                                    <div class="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-300">
                                      {subItem.label}
                                    </div>
                                    <div class="text-xs text-gray-500 mt-0.5">
                                      {subItem.description}
                                    </div>
                                  </div>
                                  <svg 
                                    class="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              )}
                            </For>
                          </div>
                        </div>
                      </div>
                    </Show>
                  </div>
                )}
              </For>

              {/* Shop Link - Inline with other nav items */}
              <a
                href="#shop"
                class="group px-5 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 relative"
              >
                <span class="relative z-10">Shop</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
              </a>
              
              {/* Contact Button - Inline with other nav items */}
              <button class="relative ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105 active:scale-100 overflow-hidden group">
                <span class="relative z-10">Contact Us</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div class="lg:hidden">
        <div class="flex justify-between items-center px-6 h-16">
          
          {/* Mobile Logo */}
          <a href="#" class="relative z-10">
            <img
              src="/logo.png"
              alt="iSense Technologies"
              class="h-9 w-auto"
            />
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen())}
            class="relative z-10 p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div class="w-6 h-5 flex flex-col justify-between">
              <span
                class={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen() ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                class={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen() ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                class={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen() ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          class={`absolute top-full left-0 right-0 transition-all duration-300 ease-out ${
            isOpen() 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div class="mx-4 mt-2 mb-4 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
            <div class="p-4 space-y-1">
              <For each={navItems}>
                {(item) => (
                  <div>
                    <Show
                      when={item.hasDropdown}
                      fallback={
                        <a
                          href={item.href}
                          class="block px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                      }
                    >
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen())}
                        class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300"
                      >
                        {item.label}
                        <svg
                          class={`w-4 h-4 transition-transform duration-300 ${
                            isProductsOpen() ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Mobile Dropdown Items */}
                      <div
                        class={`overflow-hidden transition-all duration-300 ${
                          isProductsOpen() ? 'max-h-96 mt-1' : 'max-h-0'
                        }`}
                      >
                        <div class="px-2 py-2 space-y-1">
                          <For each={productSubItems}>
                            {(subItem) => (
                              <a
                                href={subItem.href}
                                class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => {
                                  setIsProductsOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                <span class="text-xl">{subItem.icon}</span>
                                <div>
                                  <div class="text-sm font-semibold text-gray-900">
                                    {subItem.label}
                                  </div>
                                  <div class="text-xs text-gray-500">
                                    {subItem.description}
                                  </div>
                                </div>
                              </a>
                            )}
                          </For>
                        </div>
                      </div>
                    </Show>
                  </div>
                )}
              </For>

              {/* Mobile Shop Link */}
              <a
                href="#shop"
                class="block px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </a>

              {/* Mobile Contact Button */}
              <button 
                class="w-full mt-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}