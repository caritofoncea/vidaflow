import Link from "next/link";

export default function About() {
  return (
    <div className="py-12 lg:py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">Our Story</h1>
          <p className="text-xl text-primary font-medium italic">
            "Achieve your peak vitality through the natural flow of Fuxion's nutritional science."
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-600">
          <p className="mb-8 leading-relaxed">
            At <strong>VidaFlow</strong>, we believe health shouldn't be a struggle or a chore. 
            It should be a <span className="text-secondary font-bold">flow</span>—a natural, effortless state of being that allows you to 
            live your life to the fullest. We represent the intersection of life (Vida) and the natural movement of health.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 my-12 not-prose">
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading catalyst for natural vitality, empowering millions to reclaim their energy 
                and health through the power of clean, science-backed nutrition.
              </p>
            </div>
            <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality, functional beverages that fit seamlessly into modern lifestyles, 
                combining ancestral wisdom with cutting-edge biotechnology.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Fuxion Partnership</h2>
          <p className="mb-6">
            We've partnered with <strong>Fuxion</strong>, a world leader in nutraceutical science, 
            to bring you products that combine the ancient knowledge of Amazonian, 
            Andean, and Asian cultures with state-of-the-art biotechnology. This unique approach, 
            which we call <em>Nutraceutical Fusion</em>, allows us to extract the most potent 
            active ingredients from nature and deliver them in a highly bioavailable form.
          </p>
          
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The VidaFlow Difference</h2>
          <div className="space-y-6 not-prose">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">1</div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Clean Label Promise</h4>
                <p>No artificial sweeteners (only Stevia and Xylitol), no preservatives, no GMOs, and no artificial colors.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">2</div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Bioclean Process</h4>
                <p>Advanced dehydration technology that preserves 100% of the active nutrients in every sachet.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">3</div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Functional Results</h4>
                <p>Delicious beverages that replace sugary drinks while providing targeted health benefits for energy, weight loss, and immunity.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center not-prose">
            <Link href="/shop" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-primary/20">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
