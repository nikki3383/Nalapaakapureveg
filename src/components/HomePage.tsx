import { ChefHat, Award, Heart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ReviewsWidget from "./ReviewsWidget";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const signatureDishes = [
    {
      name: "Masala Dosa",
      description: "Crispy rice crepe with spiced potato filling",
      price: "₹120",
      image:
        "https://images.unsplash.com/photo-1665660710687-b44c50751054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGRvc2F8ZW58MXx8fHwxNzY0OTYwNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    // {
    //   name: "Royal Thali",
    //   description: "A complete traditional meal with assorted delicacies",
    //   price: "₹350",
    //   image:
    //     "https://images.unsplash.com/photo-1672477179695-7276b0602fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMHBsYXRlfGVufDF8fHx8MTc2NDk2MDcyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    // },
    {
      name: "Paneer Butter Masala",
      description: "Rich, creamy cottage cheese in tomato gravy",
      price: "₹280",
      image:
        "https://images.unsplash.com/photo-1708782340377-882559d544fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY0OTYwNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  // const testimonials = [
  //   {
  //     name: "Priya Sharma",
  //     text: "The best vegetarian food in the city! Every dish is prepared with love and care.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Rajesh Kumar",
  //     text: "Authentic flavors and impeccable service. Nalapaaka has become my family's favorite spot.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Anita Desai",
  //     text: "From South Indian to North Indian, everything is absolutely delicious. Highly recommended!",
  //     rating: 5,
  //   },
  // ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1708388064828-565ad865e12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdmVnZXRhcmlhbiUyMGZvb2R8ZW58MXx8fHwxNzY0OTYwNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Elegant vegetarian food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-[#d4af37] mb-6">Nalapaaka</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Pure Veg</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("menu")}
              className="px-8 py-4 bg-[#d4af37] text-black hover:bg-[#e8c96f] transition-all rounded-md"
            >
              View Menu
            </button>
            {/* <button className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all rounded-md">
              Order Now
            </button> */}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Our Story</h2>
              <p className="mb-4">
                Nalapaaka brings you the finest pure vegetarian cuisine, crafted
                with authentic recipes passed down through generations. Our
                commitment to quality and purity sets us apart.
              </p>
              <p className="mb-6">
                Every dish is prepared with fresh ingredients and traditional
                cooking methods, ensuring an unforgettable dining experience.
              </p>
              <button
                onClick={() => onNavigate("about")}
                className="text-[#d4af37] hover:text-[#e8c96f] transition-colors"
              >
                Learn More →
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <ChefHat className="text-[#d4af37] mb-4" size={32} />
                <h4 className="text-white mb-2">Expert Chefs</h4>
                <p className="text-sm text-gray-400">
                  Skilled culinary masters with decades of experience
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <Award className="text-[#d4af37] mb-4" size={32} />
                <h4 className="text-white mb-2">Premium Quality</h4>
                <p className="text-sm text-gray-400">
                  Only the freshest ingredients in every dish
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <Heart className="text-[#d4af37] mb-4" size={32} />
                <h4 className="text-white mb-2">Made with Love</h4>
                <p className="text-sm text-gray-400">
                  Each recipe prepared with care and passion
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <Star className="text-[#d4af37] mb-4" size={32} />
                <h4 className="text-white mb-2">100% Pure Veg</h4>
                <p className="text-sm text-gray-400">
                  Completely vegetarian kitchen and ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Signature Dishes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience our chef{"'"}s special creations, crafted to perfection
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <div
                key={index}
                className="group bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#2a2a2a] hover:border-[#d4af37] transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white">{dish.name}</h4>
                    {/* <span className="text-[#d4af37]">{dish.price}</span> */}
                  </div>
                  <p className="text-sm text-gray-400">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("menu")}
              className="px-8 py-3 bg-[#d4af37] text-black hover:bg-[#e8c96f] transition-all rounded-md"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <ReviewsWidget />
      </section>
    </div>
  );
}
