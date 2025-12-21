import { Leaf, Users, Trophy, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white mb-4">
            The Story of Nalapaaka
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey of passion, tradition, and the finest
            vegetarian cuisine
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-white mb-6">Our Heritage</h2>
            <p className="mb-4">
              Welcome to Nalapaaka, where culinary excellence
              meets a passion for pure vegetarian cuisine.
              Established in 2023, our restaurant was born from
              a desire to offer a dining experience that
              combines local traditional flavors with nothern
              culinary techniques. At Nalapaaka, we believe that
              great food brings people together, and we are
              committed to creating memorable dining experiences
              for our guests.
            </p>
            <h2 className="text-white mb-6">
              The Legend of Nalapaaka
            </h2>
            <p className="mb-4">
              The name "Nalapaaka" is inspired by the legendary
              figure Nala from the Mahabharata, one of the
              greatest epics of ancient India. Nala was a king
              of Nishadha, known for his unparalleled skills in
              the kitchen. His culinary expertise was so
              renowned that he was considered the best cook in
              all the realms. The word "Paaka" in Sanskrit means
              cooking, thus "Nalapaaka" translates to "Nala's
              Cooking." Nala's story is one of love,
              perseverance, and mastery. He was a skilled
              charioteer and an even more skilled chef, whose
              dishes were said to be infused with magic and
              love. Despite facing numerous challenges,
              including losing his kingdom and enduring
              hardships, Nala's culinary skills remained
              unmatched, symbolizing the essence of excellence
              and passion in cooking. At Nalapaaka, we strive to
              embody the same spirit of mastery and dedication
              in every dish we prepare.
            </p>
            <h2 className="text-white mb-6">Our Menu</h2>
            <p className="mb-4">
              At Nalapaaka, our menu is a testament to the
              versatility and creativity of vegetarian cuisine.
              From flavorful starters and hearty curries to
              fresh rotis and indulgent desserts, our dishes are
              designed to tantalize your taste buds and satisfy
              your cravings. We also offer a variety of
              beverages, including refreshing cold drinks and
              soothing hot beverages, to complement your meal.
            </p>
            <p>
              We take pride in our commitment to quality and
              authenticity. That's why we do not use any tasting
              powders or artificial colors in our dishes. We
              also ensure that only the finest ingredients are
              used, including premium NANDINI DAIRY products, to
              bring you the freshest and most wholesome flavors.
            </p>
            {/* <p className="mb-4">
              The name &quot;Nalapaaka&quot; itself reflects our
              philosophy — a combination of purity, excellence,
              and the art of cooking. We believe that food is
              not just sustenance; it{"'"}s an expression of
              culture, love, and care.
            </p>
            <p className="mb-6">
              Every dish that leaves our kitchen carries the
              essence of our heritage, prepared with the finest
              ingredients and authentic spices. Our chefs are
              masters of their craft, trained in traditional
              methods while embracing modern culinary
              innovations.
            </p> */}
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689079564957-83e3641c7fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0OTQ5MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#2a2a2a]">
                <Leaf className="text-[#d4af37]" size={28} />
              </div>
              <h4 className="text-white mb-3">Purity</h4>
              <p className="text-sm text-gray-400">
                100% vegetarian ingredients, sourced ethically
                and prepared with care
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#2a2a2a]">
                <Users className="text-[#d4af37]" size={28} />
              </div>
              <h4 className="text-white mb-3">Tradition</h4>
              <p className="text-sm text-gray-400">
                Recipes passed down through generations,
                preserving authentic flavors
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#2a2a2a]">
                <Trophy className="text-[#d4af37]" size={28} />
              </div>
              <h4 className="text-white mb-3">Excellence</h4>
              <p className="text-sm text-gray-400">
                Commitment to quality in every aspect, from
                ingredients to service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#2a2a2a]">
                <Heart className="text-[#d4af37]" size={28} />
              </div>
              <h4 className="text-white mb-3">Passion</h4>
              <p className="text-sm text-gray-400">
                Every dish is crafted with love and dedication
                to culinary artistry
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-[#1a1a1a] rounded-lg p-12 border border-[#2a2a2a]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-4">
              To serve the finest pure vegetarian cuisine that
              honors tradition while delighting modern palates.
              We strive to create memorable dining experiences
              where every guest feels the warmth of our
              hospitality and the authenticity of our flavors.
            </p>
            <p className="text-gray-400">
              At Nalapaaka, we{"'"}re not just serving food — we
              {"'"}re sharing stories, preserving culture, and
              bringing people together through the universal
              language of exceptional vegetarian cuisine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}