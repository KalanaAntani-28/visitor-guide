export interface Attraction {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  category: string;
  highlights: string[];
}

export const attractions: Attraction[] = [
  {
    id: "tanah-lot",
    title: "Tanah Lot Temple",
    shortDescription: "Ancient Hindu temple perched on a rock formation in the sea, offering spectacular sunset views.",
    fullDescription: "Tanah Lot is one of Bali's most iconic temples, built in the 16th century. Perched on a large offshore rock, it becomes completely surrounded by water during high tide. The temple is dedicated to the sea gods and is one of the seven sea temples around the Balinese coast. The area around the temple offers stunning views, especially during sunset, when the silhouette of the temple against the orange sky creates a magical atmosphere. Visitors can explore the surrounding cliffs, browse through the market stalls, and enjoy traditional Balinese performances.",
    image: "tanah-lot.jpg",
    location: {
      lat: -8.6211,
      lng: 115.0868,
      address: "Beraban, Kediri, Tabanan Regency, Bali"
    },
    category: "Temple",
    highlights: [
      "Stunning sunset views",
      "Traditional Balinese architecture",
      "Cultural performances",
      "Sacred snake caves",
      "Coastal clifftop walks"
    ]
  },
  {
    id: "tegallalang-rice-terraces",
    title: "Tegallalang Rice Terraces",
    shortDescription: "UNESCO-recognized rice terraces showcasing Bali's traditional irrigation system and stunning landscapes.",
    fullDescription: "The Tegallalang Rice Terraces are among the most photographed landscapes in Bali. Located in Ubud, these terraces demonstrate the traditional Balinese cooperative irrigation system known as 'Subak,' which dates back to the 9th century and is recognized by UNESCO. The terraces create a dramatic stepped landscape carved into the hillside, offering visitors a glimpse into the ancient agricultural practices that have shaped Bali's culture. Walk along the narrow paths between the paddies, visit local cafes with panoramic views, or try the famous jungle swing for an adrenaline rush above the verdant landscape.",
    image: "rice-terraces.jpg",
    location: {
      lat: -8.4365,
      lng: 115.2784,
      address: "Jalan Raya Tegallalang, Tegallalang, Gianyar Regency, Bali"
    },
    category: "Nature",
    highlights: [
      "UNESCO World Heritage Site",
      "Traditional Subak irrigation system",
      "Jungle swing experience",
      "Photography opportunities",
      "Local craft shops"
    ]
  },
  {
    id: "sacred-monkey-forest",
    title: "Sacred Monkey Forest Sanctuary",
    shortDescription: "Ancient temple complex surrounded by lush jungle, home to over 700 Balinese long-tailed monkeys.",
    fullDescription: "The Sacred Monkey Forest Sanctuary in Ubud is a nature reserve and Hindu temple complex that spans approximately 12.5 hectares of dense forest. Home to over 700 Balinese long-tailed macaques, the sanctuary serves as an important spiritual and ecological site. The forest contains three ancient temples dating back to the 14th century, stone pathways winding through towering trees, and moss-covered statues creating a mystical atmosphere. The monkeys are considered sacred guardians of the temple and live freely throughout the forest. Visitors can observe these playful primates in their natural habitat while exploring the beautiful temple architecture and lush tropical vegetation.",
    image: "monkey-forest.jpg",
    location: {
      lat: -8.5194,
      lng: 115.2587,
      address: "Jl. Monkey Forest, Ubud, Gianyar Regency, Bali"
    },
    category: "Nature",
    highlights: [
      "Over 700 sacred monkeys",
      "Ancient temple ruins",
      "Lush jungle pathways",
      "Stone sculptures and carvings",
      "Conservation programs"
    ]
  },
  {
    id: "mount-batur",
    title: "Mount Batur Sunrise Trek",
    shortDescription: "Active volcano offering breathtaking sunrise views over the caldera and surrounding landscape.",
    fullDescription: "Mount Batur is an active volcano standing at 1,717 meters above sea level in Bali's Kintamani region. The sunrise trek to the summit is one of Bali's most popular adventures, with hikers starting their journey in the pre-dawn darkness to reach the peak by sunrise. The reward is spectacular: watch the sun emerge over the horizon, illuminating the volcanic caldera, Lake Batur, and on clear days, you can see Mount Agung and the Lombok strait. The trek takes about 2 hours up and offers a moderate challenge suitable for most fitness levels. At the summit, enjoy breakfast cooked using the volcano's natural steam vents before descending through fields of solidified lava and enjoying a soak in the natural hot springs nearby.",
    image: "mount-batur.jpg",
    location: {
      lat: -8.2425,
      lng: 115.3751,
      address: "Kintamani, Bangli Regency, Bali"
    },
    category: "Adventure",
    highlights: [
      "Spectacular sunrise views",
      "Active volcanic landscape",
      "Breakfast cooked by volcanic steam",
      "Natural hot springs nearby",
      "Views of Mount Agung and Lake Batur"
    ]
  }
];
