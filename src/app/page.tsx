import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 z-10 overflow-hidden">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-bold">
              Fuel Your <span className="text-primary">Flow</span>, <br className="hidden sm:block" />
              Elevate Your <span className="text-secondary">Life</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Discover the power of Fuxion's nutritional science. Natural ingredients, 
              ancient wisdom, and modern technology combined for your peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="bg-primary hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full text-center transition-all shadow-lg shadow-primary/30">
                Shop Now
              </Link>
              <Link href="/shop?bundle=find-your-flow-bundle" className="bg-accent hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full text-center transition-all shadow-lg shadow-accent/30">
                Launch Special Bundle
              </Link>
              <Link href="/about" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-full text-center transition-all">
                Our Story
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/hero_fuxion_product.png" 
                alt="VidaFlow Lifestyle" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Sneak Peek */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-16">Featured Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Vitality", desc: "Energy & Daily Wellness", color: "primary", image: "/products/vitaxtrat.png" },
              { name: "Cleansing", desc: "Detox & Digestive Health", color: "secondary", image: "/products/prunex1.png" },
              { name: "Metabolic", desc: "Weight Management Solutions", color: "accent", image: "/products/termot3.png" }
            ].map((item, index) => (
              <div key={item.name} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden bg-gray-50 border-4 border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
                  {item.image ? (
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      sizes="192px"
                      className="object-cover"
                      priority={index === 0}
                    />
                  ) : (
                    <div className={`w-full h-full bg-${item.color}/10 flex items-center justify-center text-${item.color} font-bold text-4xl`}>
                      {item.name[0]}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">{item.desc}</p>
                <Link href="/shop" className="inline-block bg-foreground text-white font-bold py-3 px-8 rounded-xl hover:bg-primary transition-colors shadow-md">
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VidaFlow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-16">Why VidaFlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-[1.5rem] flex items-center justify-center text-3xl mb-8 mx-auto group-hover:scale-110 transition-transform">✓</div>
              <h3 className="text-2xl font-bold mb-4">100% Natural</h3>
              <p className="text-gray-600 leading-relaxed">Pure extracts from the Amazon and across the globe, preserving nature's power in every drop.</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-[1.5rem] flex items-center justify-center text-3xl mb-8 mx-auto group-hover:scale-110 transition-transform">✓</div>
              <h3 className="text-2xl font-bold mb-4">Clean Label</h3>
              <p className="text-gray-600 leading-relaxed">No GMOs, no sugar, no artificial colors or preservatives. Just pure goodness for your body.</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-[1.5rem] flex items-center justify-center text-3xl mb-8 mx-auto group-hover:scale-110 transition-transform">✓</div>
              <h3 className="text-2xl font-bold mb-4">Bioclean Process</h3>
              <p className="text-gray-600 leading-relaxed">Advanced technology that keeps nutrients intact for maximum absorption and bioavailability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block bg-primary/10 text-primary font-black text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">Free Guide</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Find Your Flow in 7 Days</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Struggling with low energy and brain fog? Download our <strong>FREE 7-Day Wellness Reset</strong> and learn how to align your body's natural flow using science-backed nutrition.
              </p>
              <form className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-50 border border-gray-100 py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="bg-foreground text-white font-bold py-4 px-8 rounded-2xl hover:bg-primary transition-all shadow-lg shadow-primary/20 active:scale-95"
                >
                  Get the Guide
                </button>
              </form>
              <p className="text-[10px] text-gray-400 mt-4 text-center md:text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl relative overflow-hidden shadow-inner border-8 border-white">
                {/* Visual representation of the guide */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-1 w-primary mb-4" />
                  <h3 className="text-2xl font-black text-foreground mb-2">7-DAY</h3>
                  <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Wellness Reset</p>
                  <div className="w-full h-px bg-gray-200 my-4" />
                  <p className="text-xs text-gray-500 italic">"The ultimate starter guide to nutraceutical fusion"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
