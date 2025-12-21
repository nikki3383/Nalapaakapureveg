import { useState } from "react";

export function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "starters", name: "Starters / Snacks" },
    { id: "curries", name: "Curries" },
    { id: "roti", name: "Roti" },
    { id: "rice", name: "Rice Variety" },
    { id: "noodles", name: "Noodles" },
    { id: "soup", name: "Soup" },
    { id: "beverages", name: "Cold Beverages" },
    { id: "soda", name: "Soda" },
    { id: "lassi", name: "Lassi / Butter Milk" },
    { id: "hot", name: "Hot Beverages" },
  ];

  const menuItems = [
    // Starters / Snacks
    { name: "Baby Corn 65", nameKannada: "ಬೇಬಿ ಕಾರ್ನ್ 65", category: "starters" },
    { name: "Baby Corn chilli", nameKannada: "ಬೇಬಿ ಕಾರ್ನ್ ಚಿಲ್ಲಿ", category: "starters" },
    { name: "Baby Corn Manchurian", nameKannada: "ಬೇಬಿ ಕಾರ್ನ್ ಮಂಚೂರಿಯನ್", category: "starters" },
    { name: "Baby Corn pepper dry", nameKannada: "ಬೇಬಿ ಕಾರ್ನ್ ಪೆಪ್ಪರ್ ಡ್ರೈ", category: "starters" },
    { name: "Bhindi fry", nameKannada: "ಬೆಂಡೆ ಫ್ರೈ", category: "starters" },
    { name: "Capsicum pakoda", nameKannada: "ಕ್ಯಾಪ್ಸಿಕಮ್ ಪಕೋಡ", category: "starters" },
    { name: "Finger chips", nameKannada: "ಫಿಂಗರ್ ಚಿಪ್ಸ್", category: "starters" },
    { name: "Garlic fry", nameKannada: "ಗರ್ಲಿಕ್ ಫ್ರೈ", category: "starters" },
    { name: "Gobi 65", nameKannada: "ಗೋಬಿ 65", category: "starters" },
    { name: "Gobi chilli / Kabab", nameKannada: "ಗೋಬಿ ಚಿಲ್ಲಿ / ಕಬಾಬ್", category: "starters" },
    { name: "Gobi Manchurian", nameKannada: "ಗೋಬಿ ಮಂಚೂರಿಯನ್", category: "starters" },
    { name: "Gobi pepper dry", nameKannada: "ಗೋಬಿ ಪೆಪ್ಪರ್ ಡ್ರೈ", category: "starters" },
    { name: "Masala Papad", nameKannada: "ಮಸಾಲ ಪಾಪಡ್", category: "starters" },
    { name: "Mushroom chilli", nameKannada: "ಮಶ್ರೂಮ್ ಚಿಲ್ಲಿ", category: "starters" },
    { name: "Mushroom dry", nameKannada: "ಮಶ್ರೂಮ್ ಡ್ರೈ", category: "starters" },
    { name: "Mushroom Manchurian", nameKannada: "ಮಶ್ರೂಮ್ ಮಂಚೂರಿಯನ್", category: "starters" },
    { name: "Mushroom 65", nameKannada: "ಮಶ್ರೂಮ್ 65", category: "starters" },
    { name: "Onion pakoda", nameKannada: "ಅನಿಯನ್ ಪಕೋಡ", category: "starters" },
    { name: "Paneer 65", nameKannada: "ಪನ್ನೀರ್ 65", category: "starters" },
    { name: "Paneer chilli", nameKannada: "ಪನ್ನೀರ್ ಚಿಲ್ಲಿ", category: "starters" },
    { name: "Paneer kebab", nameKannada: "ಪನ್ನೀರ್ ಕಬಾಬ್", category: "starters" },
    { name: "Paneer Manchurian", nameKannada: "ಪನ್ನೀರ್ ಮಂಚೂರಿಯನ್", category: "starters" },
    { name: "Paneer pepper dry", nameKannada: "ಪನ್ನೀರ್ ಪೆಪ್ಪರ್ ಡ್ರೈ", category: "starters" },
    { name: "Paneer Ghee roast", nameKannada: "ಪನ್ನೀರ್ ಗೀ ರೋಸ್ಟ್", category: "starters" },
    { name: "Gobi Ghee Roast", nameKannada: "ಗೋಬಿ ಗೀ ರೋಸ್ಟ್", category: "starters" },
    { name: "Veg Manchurian", nameKannada: "ವೆಜ್ ಮಂಚೂರಿಯನ್", category: "starters" },

    // Curries
    { name: "Bhindi Masala", nameKannada: "ಬೆಂಡೆ ಮಸಾಲ", category: "curries" },
    { name: "Capsicum masala", nameKannada: "ಕ್ಯಾಪ್ಸಿಕಮ್ ಮಸಾಲ", category: "curries" },
    { name: "Channa masala", nameKannada: "ಚನ್ನ ಮಸಾಲ", category: "curries" },
    { name: "Dal fry", nameKannada: "ದಾಲ್ ಫ್ರೈ", category: "curries" },
    { name: "Dal kolhapuri", nameKannada: "ದಾಲ್ ಕೋಲ್ಹಾಪುರಿ", category: "curries" },
    { name: "Dal palak", nameKannada: "ದಾಲ್ ಪಾಲಕ್", category: "curries" },
    { name: "Dal Tadka", nameKannada: "ದಾಲ್ ತಡಕೆ", category: "curries" },
    { name: "Green pea masala", nameKannada: "ಬಟಾಣಿ ಮಸಾಲಾ", category: "curries" },
    { name: "Kaju masala", nameKannada: "ಕಾಜು ಮಸಾಲ", category: "curries" },
    { name: "Kaju Paneer Kadai", nameKannada: "ಕಾಜು ಪನ್ನೀರ್ ಕಡೈ", category: "curries" },
    { name: "Kaju Paneer Masala", nameKannada: "ಕಾಜು ಪನ್ನೀರ್ ಮಸಾಲ", category: "curries" },
    { name: "Mixed Veg curry", nameKannada: "ಮಿಕ್ಸ್ಡ್ ವೆಜ್ ಕರಿ", category: "curries" },
    { name: "Mushroom Kadai", nameKannada: "ಮಶ್ರೂಮ್ ಕಡೈ", category: "curries" },
    { name: "Mushroom masala", nameKannada: "ಮಶ್ರೂಮ್ ಮಸಾಲ", category: "curries" },
    { name: "Palak Paneer", nameKannada: "ಪಾಲಕ್ ಪನ್ನೀರ್", category: "curries" },
    { name: "Paneer butter masala", nameKannada: "ಪನ್ನೀರ್ ಬಟರ್ ಮಸಾಲ", category: "curries" },
    { name: "Paneer Kadai", nameKannada: "ಪನ್ನೀರ್ ಕಡೈ", category: "curries" },
    { name: "Tomato curry", nameKannada: "ಟೊಮೇಟೋ ಕರಿ", category: "curries" },
    { name: "Veg Curry", nameKannada: "ವೆಜ್ ಕರಿ", category: "curries" },
    { name: "Veg Hyderabadi", nameKannada: "ವೆಜ್ ಹೈದ್ರಾಬಾದಿ", category: "curries" },
    { name: "Veg Kadai", nameKannada: "ವೆಜ್ ಕಡೈ", category: "curries" },
    { name: "Veg Kolhapuri", nameKannada: "ವೆಜ್ ಕೋಲ್ಹಾಪುರಿ", category: "curries" },
    { name: "Veg Pot", nameKannada: "ವೆಜ್ ಪಾಟ್", category: "curries" },

    // Roti
    { name: "Butter kulcha", nameKannada: "ಬಟರ್ ಕುಲ್ಚಾ", category: "roti" },
    { name: "Butter naan", nameKannada: "ಬಟರ್ ನಾನ್", category: "roti" },
    { name: "Butter Roti", nameKannada: "ಬಟರ್ ರೋಟಿ", category: "roti" },
    { name: "Kulcha plain", nameKannada: "ಕುಲ್ಚಾ ಪ್ಲೇನ್", category: "roti" },
    { name: "Masala parotta", nameKannada: "ಮಸಾಲ ಪರೋಟ", category: "roti" },
    { name: "Plain naan", nameKannada: "ಪ್ಲೇನ್ ನಾನ್", category: "roti" },
    { name: "Roti plain", nameKannada: "ರೋಟೆ ಪ್ಲೇನ್", category: "roti" },

    // Rice Variety
    { name: "Curd rice", nameKannada: "ಕರ್ಡ್ ರೈಸ್", category: "rice" },
    { name: "Dal fried rice", nameKannada: "ದಾಲ್ ಫ್ರೈಡ್ ರೈಸ್ + raitha ರೈತ", category: "rice" },
    { name: "Fried rice", nameKannada: "ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },
    { name: "Ghee rice", nameKannada: "ಗೀ ರೈಸ್", category: "rice" },
    { name: "Gobi fried rice", nameKannada: "ಗೋಬಿ ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },
    { name: "Jeera rice", nameKannada: "ಜೀರ ರೈಸ್", category: "rice" },
    { name: "Kaju fried rice", nameKannada: "ಕಾಜು ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },
    { name: "Lemon rice", nameKannada: "ಲೆಮನ್ ರೈಸ್", category: "rice" },
    { name: "Masala fried rice", nameKannada: "ಮಸಾಲ ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },
    { name: "Masala rice", nameKannada: "ಮಸಾಲ ರೈಸ್", category: "rice" },
    { name: "Mushroom Biriyani", nameKannada: "ಮಶ್ರೂಮ್ ಬಿರಿಯಾನಿ", category: "rice" },
    { name: "Mushroom fried rice", nameKannada: "ಮಶ್ರೂಮ್ ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },
    { name: "Mushroom Kaju Biriyani", nameKannada: "ಮಶ್ರೂಮ್ ಕಾಜು ಬಿರಿಯಾನಿ", category: "rice" },
    { name: "Onion chilli fried rice", nameKannada: "ಅನಿಯನ್ ಚಿಲ್ಲಿ ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },
    { name: "Palak rice", nameKannada: "ಪಾಲಕ್ ರೈಸ್ + Raitha ರೈತ", category: "rice" },
    { name: "Paneer Biriyani", nameKannada: "ಪನ್ನೀರ್ ಕಾಜು ಬಿರಿಯಾನಿ", category: "rice" },
    { name: "Paneer fried rice", nameKannada: "ಪನ್ನೀರ್ ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },
    { name: "Paneer Kaju Biriyani", nameKannada: "ಪನ್ನೀರ್ ಕಾಜು ಬಿರಿಯಾನಿ", category: "rice" },
    { name: "Tomato fried rice", nameKannada: "ಟೊಮೇಟೋ ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },
    { name: "Veg Biriyani", nameKannada: "ವೆಜ್ ಬಿರಿಯಾನಿ + Raitha ರೈತ", category: "rice" },
    { name: "Veg fried rice", nameKannada: "ವೆಜ್ ಫ್ರೈಡ್ ರೈಸ್", category: "rice" },

    // Noodles
    { name: "Plain Noodles", nameKannada: "ಪ್ಲೇನ್ ನೂಡಲ್ಸ್", category: "noodles" },
    { name: "Veg Noodles", nameKannada: "ವೆಜ್ ನೂಡಲ್ಸ್", category: "noodles" },
    { name: "Masala Noodles", nameKannada: "ಮಸಾಲ ನೂಡಲ್ಸ್", category: "noodles" },

    // Soup
    { name: "Tomato Soup", nameKannada: "ಟೊಮೇಟೋ ಸೂಪ್", category: "soup" },
    { name: "Veg Soup", nameKannada: "ವೆಜ್ ಸೂಪ್", category: "soup" },
    { name: "Mushroom Soup", nameKannada: "ಮಶ್ರೂಮ್ ಸೂಪ್", category: "soup" },

    // Cold Beverages
    { name: "Badam Shake", nameKannada: "ಬಾದಮ್ ಶೇಕ್", category: "beverages" },
    { name: "Vanilla Shake", nameKannada: "ವನಿಲ ಶೇಕ್", category: "beverages" },
    { name: "Chocolate Shake", nameKannada: "ಚಾಕೊಲೇಟ್ ಶೇಕ್", category: "beverages" },
    { name: "Butterscotch shake", nameKannada: "ಬಟ್ಟರ್ ಸ್ಕಾಚ್", category: "beverages" },
    { name: "Oreo Shake", nameKannada: "ಓರಿಯೊ ಶೇಕ್", category: "beverages" },
    { name: "Strawberry Shake", nameKannada: "ಸ್ಟ್ರಾಬೆರಿ ಶೇಕ್", category: "beverages" },

    // Soda
    { name: "Lemon masala soda", nameKannada: "ಲೆಮನ್ ಮಸಾಲಾ ಸೋಡಾ", category: "soda" },
    { name: "Sweet and salt soda", nameKannada: "ಸ್ವೀಟ್ ಮತ್ತು ಸಾಲ್ಟ್ ಸೋಡಾ", category: "soda" },
    { name: "Lemon soda", nameKannada: "ಲೆಮನ್ ಸೋಡಾ", category: "soda" },
    { name: "Fresh Lemon Juice", nameKannada: "ಫ್ರೆಶ್ ಲೆಮನ್ ಜ್ಯೂಸ್", category: "soda" },

    // Lassi / Butter Milk
    { name: "Sweet Lassi", nameKannada: "ಸಿಹಿ ಲಸ್ಸಿ", category: "lassi" },
    { name: "Butter milk plain", nameKannada: "ಬಟರ್ ಮಿಲ್ಕ್ ಪ್ಲೇನ್", category: "lassi" },
    { name: "Masala Butter milk", nameKannada: "ಮಸಾಲ ಬಟರ್ ಮಿಲ್ಕ್", category: "lassi" },

    // Hot Beverages
    { name: "Coffee (filter)", nameKannada: "ಕಾಫಿ (ಫಿಲ್ಟರ್)", category: "hot" },
    { name: "Tea", nameKannada: "ಟೀ", category: "hot" },
    { name: "Badam milk", nameKannada: "ಬಾದಮ್ ಮಿಲ್ಕ್", category: "hot" },
    { name: "Horlicks", nameKannada: "ಹಾರ್ಲಿಕ್ಸ್", category: "hot" },
    { name: "Boost", nameKannada: "ಬೂಸ್ಟ್", category: "hot" },
    { name: "Plain milk", nameKannada: "ಪ್ಲೇನ್ ಮಿಲ್ಕ್", category: "hot" },
    { name: "Lemon Tea", nameKannada: "ಲೆಮನ್ ಟೀ", category: "hot" },
    { name: "Black Tea", nameKannada: "ಬ್ಲ್ಯಾಕ್ ಟೀ", category: "hot" },
    { name: "Black Coffee", nameKannada: "ಬ್ಲ್ಯಾಕ್ ಕಾಫಿ", category: "hot" },
    { name: "Masala Tea", nameKannada: "ಮಸಾಲ ಟೀ", category: "hot" },
    { name: "Jaggery Tea", nameKannada: "ಬೆಲ್ಲದ ಟೀ", category: "hot" },
    { name: "Jaggery Coffee", nameKannada: "ಬೆಲ್ಲದ ಕಾಫೀ", category: "hot" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white mb-4">Our Menu</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our wide selection of pure vegetarian delicacies, prepared with
            authentic spices and fresh ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-md transition-all ${
                selectedCategory === category.id
                  ? "bg-[#d4af37] text-black"
                  : "bg-[#1a1a1a] text-white border border-[#2a2a2a] hover:border-[#d4af37]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] hover:border-[#d4af37] transition-all group"
            >
              <h4 className="text-white group-hover:text-[#d4af37] transition-colors mb-1">
                {item.name}
              </h4>
              <p className="text-sm text-gray-400">{item.nameKannada}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}