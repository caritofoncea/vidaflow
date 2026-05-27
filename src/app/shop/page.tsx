"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { track } from "@vercel/analytics";
import { useSearchParams } from "next/navigation";

function ShopContent() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [country, setCountry] = useState("Guatemala");
  const [selectedFlavor, setSelectedFlavor] = useState<string>("Vanilla");
  const searchParams = useSearchParams();

  const products = [
    { 
      id: "bundle-1", 
      name: "The Find Your Flow Bundle", 
      category: "Bundles", 
      price: "$74.99", 
      bgColor: "bg-primary/20", 
      image: "/products/prunex1.png", // Use Prunex 1 as the lead image for the bundle
      description: "Cleanse your system and ignite your energy with our signature duo. Includes Prunex 1, VitaXtra T+, and the 7-Day Wellness Reset guide.",
      benefits: ["Complete Detox", "Sustained Energy", "Digital Wellness Guide"],
      countries: ["Guatemala", "United States"],
      slug: "find-your-flow-bundle",
      badge: "Launch Special"
    },
    { 
      id: 16, 
      name: "Golden Flx", 
      category: "Wellness", 
      price: "$44.99", 
      bgColor: "bg-yellow-600/10", 
      image: "/products/goldenflx.png",
      description: "A delicious turmeric-based beverage designed to support joint health, reduce inflammation, and improve natural flexibility.",
      benefits: ["Joint Support", "Natural Anti-inflammatory", "Flexibility"],
      countries: ["Guatemala", "United States"],
      slug: "goldenflx"
    },
    { 
      id: 17, 
      name: "On", 
      category: "Mind", 
      price: "$44.99", 
      bgColor: "bg-cyan-400/10", 
      image: "/products/on.png",
      description: "A functional drink formulated to optimize your brain performance, improving focus, memory, and mental clarity during demanding tasks.",
      benefits: ["Mental Focus", "Cognitive Support", "Mental Energy"],
      countries: ["Guatemala", "United States"],
      slug: "on"
    },
    { 
      id: 18, 
      name: "Gano+", 
      category: "Wellness", 
      price: "$49.99", 
      bgColor: "bg-red-900/10", 
      image: "/products/ganoplus.png",
      description: "An herbal beverage enriched with Ganoderma Lucidum extract, designed to strengthen your natural defenses and support overall wellness.",
      benefits: ["Immune Support", "Antioxidant Protection", "General Wellness"],
      countries: ["Guatemala", "United States"],
      slug: "ganoplus"
    },
    { 
      id: 19, 
      name: "HGH", 
      category: "Wellness", 
      price: "$49.99", 
      bgColor: "bg-purple-400/10", 
      image: "/products/hgh.png",
      description: "A powerful blend of amino acids and antioxidants formulated to support your body's natural regenerative processes and healthy aging from within.",
      benefits: ["Nighttime Recovery", "Anti-Aging", "Natural Regeneration"],
      countries: ["Guatemala", "United States"],
      slug: "hgh"
    },
    { 
      id: 1, 
      name: "VitaXtra T+", 
      category: "Vitality", 
      price: "$49.99", 
      bgColor: "bg-primary/10", 
      image: "/products/vitaxtrat.png",
      description: "A potent antioxidant multivitamin drink mix that provides sustained energy and mental clarity without the crash.",
      benefits: ["Sustained Energy", "Mental Focus", "Antioxidant Support"],
      countries: ["Guatemala", "United States"],
      slug: "vitaxtrat"
    },
    { 
      id: 2, 
      name: "Termo T3", 
      category: "Weight Management", 
      price: "$44.99", 
      bgColor: "bg-accent/10", 
      image: "/products/termot3.png",
      description: "A delicious tea that helps transform fat into energy, boosting your metabolism naturally.",
      benefits: ["Fat Burning", "Metabolism Boost", "Digestive Support"],
      countries: ["Guatemala", "United States"],
      slug: "termot3"
    },
    { 
      id: 3, 
      name: "NoCarb T", 
      category: "Weight Management", 
      price: "$44.99", 
      bgColor: "bg-secondary/10", 
      image: "/products/nocarbt.png",
      description: "Helps manage carbohydrate absorption and maintain healthy blood sugar levels already within normal range.",
      benefits: ["Carb Control", "Glucose Support", "Weight Balance"],
      countries: ["Guatemala", "United States"],
      slug: "nocarbt"
    },
    { 
      id: 4, 
      name: "Prunex 1", 
      category: "Cleansing", 
      price: "$39.99", 
      bgColor: "bg-green-700/10", 
      image: "/products/prunex1.png",
      description: "A fruit-based tea designed for an effective and deep colon cleanse, promoting regular bowel movements.",
      benefits: ["Colon Cleanse", "Regularity", "Detoxification"],
      countries: ["Guatemala", "United States"],
      slug: "prunex1"
    },
    { 
      id: 5, 
      name: "Flora Liv", 
      category: "Cleansing", 
      price: "$44.99", 
      bgColor: "bg-blue-400/10", 
      image: "/products/floraliv.png",
      description: "A delicious passion fruit beverage containing 10 billion live probiotic bacteria to strengthen your natural defenses.",
      benefits: ["Immune Support", "Digestive Health", "Probiotic Power"],
      countries: ["Guatemala", "United States"],
      slug: "floraliv"
    },
    { 
      id: 6, 
      name: "Alpha Balance", 
      category: "Cleansing", 
      price: "$49.99", 
      bgColor: "bg-green-400/10", 
      image: "/products/alphabalance.png",
      description: "A green juice blend that helps balance your body's pH levels and eliminate heavy metals and toxins.",
      benefits: ["pH Balance", "Alkalizing", "Heavy Metal Detox"],
      countries: ["Guatemala", "United States"],
      slug: "alphabalance"
    },
    { 
      id: 10, 
      name: "VitaEnergia", 
      category: "Vitality", 
      price: "$44.99", 
      bgColor: "bg-yellow-400/10", 
      image: "/products/vitaenergia.png",
      description: "A unique combination of vitamins, minerals, and antioxidants to keep you revitalized and protected throughout the day.",
      benefits: ["Daily Revitalization", "Immune Support", "Antioxidant Power"],
      countries: ["Guatemala", "United States"],
      slug: "vitaenergia"
    },
    { 
      id: 11, 
      name: "Liquid Fiber", 
      category: "Cleansing", 
      price: "$34.99", 
      bgColor: "bg-green-200/10", 
      image: "/products/liquidfiber.png",
      description: "A lemon-flavored functional beverage with high fiber content to promote regular bowel movements and digestive health.",
      benefits: ["Digestive Regularity", "Natural Fiber", "Gut Health"],
      countries: ["Guatemala", "United States"],
      slug: "liquidfiber"
    },
    { 
      id: 12, 
      name: "Berry Balance", 
      category: "Wellness", 
      price: "$49.99", 
      bgColor: "bg-red-400/10", 
      image: "/products/berrybalance.png",
      description: "A powerful combination of berry extracts that helps maintain a healthy urinary tract and provides rich antioxidants.",
      benefits: ["Urinary Health", "Antioxidant Support", "pH Balance"],
      countries: ["Guatemala", "United States"],
      slug: "berrybalance"
    },
    { 
      id: 121, 
      name: "Protein Active", 
      category: "Active Lifestyle", 
      price: "$59.99", 
      bgColor: "bg-yellow-600/10", 
      image: "/products/protein_active_vanilla.png",
      description: "100% plant-based protein with high biological value, optimized for muscle recovery and immune system support.",
      benefits: ["Muscle Recovery", "Vegan Protein", "Bioavailable"],
      countries: ["Guatemala", "United States"],
      flavors: ["Vanilla", "Chocolate"],
      slug: "proteinactive"
    },
    { 
      id: 14, 
      name: "Protein Active Fit", 
      category: "Active Lifestyle", 
      price: "$64.99", 
      bgColor: "bg-orange-600/10", 
      image: "/products/protein_active_fit_vanilla.png",
      description: "Vegan protein enhanced with fat-burning ingredients to help you tone your body and manage weight.",
      benefits: ["Body Toning", "Metabolism Support", "Vegan Protein"],
      countries: ["Guatemala", "United States"],
      flavors: ["Vanilla", "Chocolate"],
      slug: "proteinactivefit"
    },
    { 
      id: 15, 
      name: "Protein Active Sport", 
      category: "Active Lifestyle", 
      price: "$64.99", 
      bgColor: "bg-blue-600/10", 
      image: "/products/protein_active_sport_vanilla.png",
      description: "Premium plant-based protein designed for athletes, optimized for muscle growth and performance.",
      benefits: ["Muscle Growth", "High Performance", "Recovery"],
      countries: ["Guatemala", "United States"],
      flavors: ["Vanilla", "Chocolate"],
      slug: "proteinactivesport"
    },
    { 
      id: 8, 
      name: "Beauty In", 
      category: "Wellness", 
      price: "$49.99", 
      bgColor: "bg-pink-400/10", 
      image: "/products/beautyin.png",
      description: "Regenerate your skin from within with this powerful blend of bioactive collagen peptides and exotic fruit extracts.",
      benefits: ["Skin Health", "Anti-Aging", "Natural Glow"],
      countries: ["Guatemala", "United States"],
      slug: "beautyin"
    },
    { 
      id: 9, 
      name: "Off", 
      category: "Mind", 
      price: "$44.99", 
      bgColor: "bg-indigo-600/10", 
      image: "/products/off.png",
      description: "A natural beverage formulated to help manage stress, improve focus, and promote a calm, relaxed state.",
      benefits: ["Stress Relief", "Better Sleep", "Mental Calm"],
      countries: ["Guatemala", "United States"],
      slug: "off"
    }
  ];

  const filteredProducts = products.filter(p => p.countries.includes(country));

  useEffect(() => {
    const bundleSlug = searchParams.get("bundle");
    if (bundleSlug) {
      const product = products.find(p => p.slug === bundleSlug);
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [searchParams]);

  const getReferralUrl = (product: any) => {
    const countryCode = country === "Guatemala" ? "gt" : "us";
    let url = `https://ifuxion.com/vidaflow/${countryCode}/${product.slug}`;
    if (product.flavors && selectedFlavor === "Chocolate") {
      url += "?flavor=chocolate";
    }
    return url;
  };

  const getProductImage = (product: any) => {
    if (product.flavors && selectedFlavor === "Chocolate") {
      if (product.slug === "proteinactivefit") return "/products/protein_active_fit_chocolate.png";
      if (product.slug === "proteinactivesport") return "/products/protein_active_sport_chocolate.png";
      return "/products/protein_active_chocolate.png";
    }
    return product.image;
  };

  return (
    <div className="py-12 lg:py-20 bg-background min-h-screen relative overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">Shop Solutions</h1>
            <p className="text-gray-600 text-xl leading-relaxed">
              Discover the perfect fusion of ancestral wisdom and modern biotechnology. 
              Our functional beverages are designed to help you reach your peak performance.
            </p>
          </div>
          
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex gap-2">
            <button 
              onClick={() => setCountry("Guatemala")}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${country === "Guatemala" ? "bg-primary text-white shadow-md" : "text-gray-400 hover:bg-gray-50"}`}
            >
              Guatemala
            </button>
            <button 
              onClick={() => setCountry("United States")}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${country === "United States" ? "bg-primary text-white shadow-md" : "text-gray-400 hover:bg-gray-50"}`}
            >
              USA
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
              <div className={`h-72 ${product.bgColor} flex items-center justify-center relative overflow-hidden`}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={typeof product.id === 'number' && product.id <= 6}
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-foreground z-10">
                  FUXION®
                </div>
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold z-10 shadow-lg animate-pulse">
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">{product.category}</span>
                    <h3 className="text-2xl font-bold mt-1 text-foreground">{product.name}</h3>
                  </div>
                  <p className="text-primary font-black text-xl">{product.price}</p>
                </div>
                
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.benefits.map((benefit, i) => (
                    <span key={i} className="bg-gray-50 text-gray-400 text-[10px] px-3 py-1 rounded-full border border-gray-100">
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => {
                    setSelectedProduct(product);
                    if (product.flavors) setSelectedFlavor(product.flavors[0]);
                  }}
                  className="w-full mt-auto bg-foreground text-white font-bold py-4 rounded-2xl hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/30 active:scale-95"
                >
                  Buy on Fuxion
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Simulation Sidebar */}
      {selectedProduct && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl p-8 flex flex-col translate-x-0">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-12 flex-grow overflow-y-auto">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={getProductImage(selectedProduct)} 
                  alt={selectedProduct.name} 
                  fill
                  sizes="(max-width: 448px) 100vw, 448px"
                  className="object-cover transition-all duration-500"
                />
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">{selectedProduct.category}</span>
              <h2 className="text-3xl font-bold text-foreground mb-2">{selectedProduct.name}</h2>
              <p className="text-primary font-black text-2xl mb-6">{selectedProduct.price}</p>
              
              {selectedProduct.flavors && (
                <div className="mb-8">
                  <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Select Flavor:</h4>
                  <div className="flex gap-3">
                    {selectedProduct.flavors.map((flavor: string) => (
                      <button
                        key={flavor}
                        onClick={() => setSelectedFlavor(flavor)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${selectedFlavor === flavor ? "border-primary bg-primary/5 text-primary" : "border-gray-100 text-gray-400 hover:border-gray-200"}`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <h4 className="font-bold text-foreground mb-4">Selection Summary</h4>
                <div className="flex justify-between mb-2">
                  <span>{selectedProduct.name} {selectedProduct.flavors ? `(${selectedFlavor})` : "(1 unit)"}</span>
                  <span>{selectedProduct.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Country</span>
                  <span>{country}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax (estimated)</span>
                  <span>Included</span>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{selectedProduct.price}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-foreground">Health Benefits:</h4>
                <ul className="space-y-2">
                  {selectedProduct.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="text-primary font-bold">✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-6 text-center">
                You will be redirected to the secure official FUXION® store in <strong>{country}</strong> to complete your purchase.
              </p>
              <a 
                href={getReferralUrl(selectedProduct)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  track("referral_click", {
                    product: selectedProduct.name,
                    country: country,
                    flavor: selectedProduct.flavors ? selectedFlavor : "N/A"
                  });
                }}
                className="block w-full bg-primary text-white font-bold py-5 rounded-2xl text-center hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                Buy on Fuxion
              </a>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="w-full mt-4 text-gray-400 font-bold py-2 hover:text-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
