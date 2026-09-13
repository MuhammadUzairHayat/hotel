import { images } from "./images";

/* ---------------------------------- Facilities --------------------------- */

export type Facility = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  /** grid emphasis: feature cards span more space */
  span: "feature" | "tall" | "regular";
};

export const facilities: Facility[] = [
  {
    title: "Restaurant",
    category: "Dining",
    description:
      "Exceptional dining with carefully prepared meals and beautiful surroundings.",
    image: images.restaurant,
    href: "/amenities?tab=restaurant",
    span: "feature",
  },
  {
    title: "Private Balcony",
    category: "Rooms",
    description: "Relax with peaceful views from your own private balcony.",
    image: images.balconyView,
    href: "/amenities?tab=private-balcony",
    span: "tall",
  },
  {
    title: "Minibar",
    category: "In-Room",
    description:
      "Enjoy refreshments and beverages in the comfort of your room.",
    image: images.minibar,
    href: "/amenities?tab=minibar",
    span: "regular",
  },
  {
    title: "Outdoor Dining",
    category: "Experiences",
    description: "Experience memorable meals surrounded by nature.",
    image: images.outdoorDining,
    href: "/amenities?tab=outdoor-dining",
    span: "regular",
  },
  {
    title: "Bonfire Nights",
    category: "Experiences",
    description: "Relax beside a warm bonfire under the night sky.",
    image: images.bonfire,
    href: "/amenities?tab=bonfire-nights",
    span: "tall",
  },
  {
    title: "Comfortable Rooms",
    category: "Stay",
    description:
      "Beautifully designed rooms with modern comfort and relaxing interiors.",
    image: images.roomDeluxe,
    href: "/rooms",
    span: "feature",
  },
];

/* ----------------------------------- Reviews ----------------------------- */

export type Review = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  image: string;
};

export const reviews: Review[] = [
  {
    name: "Ayesha Khan",
    location: "Islamabad",
    rating: 5,
    quote:
      "An unforgettable stay. The views, hospitality, and peaceful environment were exceptional. We didn't want to leave.",
    image: img("1494790108377-be9c29b29330"),
  },
  {
    name: "Daniyal Ahmed",
    location: "Lahore",
    rating: 5,
    quote:
      "The perfect place to disconnect and enjoy nature. Everything was beautifully maintained and genuinely calming.",
    image: img("1500648767791-00dcc994a43e"),
  },
  {
    name: "Sara Malik",
    location: "Karachi",
    rating: 5,
    quote:
      "Beautiful rooms, excellent food, and genuinely welcoming staff. The bonfire nights were the highlight of our trip.",
    image: img("1438761681033-6461ffad8d80"),
  },
  {
    name: "Bilal Hussain",
    location: "Peshawar",
    rating: 5,
    quote:
      "From the outdoor dining to the private balcony, every detail felt considered. A truly premium mountain escape.",
    image: img("1507003211169-0a1dd7228f2d"),
  },
];

function img(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&q=80`;
}

/* --------------------------------- Amenities ----------------------------- */

export type AmenityTab = {
  id: string;
  label: string;
  heading: string;
  intro: string;
  cta?: { label: string; href: string };
  gallery: { src: string; alt: string }[];
};

export const amenityTabs: AmenityTab[] = [
  {
    id: "restaurant",
    label: "Restaurant",
    heading: "Restaurant",
    intro:
      "Our restaurant brings together warm interiors, seasonal ingredients, and attentive service. From slow mountain mornings to candle-lit dinners, every meal is prepared with care and served in beautiful surroundings.",
    cta: { label: "View Menu", href: "#menu" },
    gallery: [
      { src: images.restaurant, alt: "Restaurant dining room interior" },
      { src: images.food, alt: "Beautifully plated main course" },
      { src: images.restaurantTable, alt: "Set dining table by the window" },
      { src: images.foodDetail, alt: "Close-up of a freshly prepared dish" },
      { src: images.breakfast, alt: "Morning breakfast spread" },
    ],
  },
  {
    id: "private-balcony",
    label: "Private Balcony",
    heading: "Private Balcony",
    intro:
      "Step outside and enjoy peaceful views from the privacy of your own balcony. Morning light over the peaks, quiet afternoons, and soft evening air — a space that is entirely yours.",
    cta: { label: "Explore Our Rooms", href: "/rooms" },
    gallery: [
      { src: images.balconyView, alt: "Private balcony overlooking the valley" },
      { src: images.balconyRoom, alt: "Room opening onto the balcony" },
      { src: images.natureView, alt: "Layered mountain and nature view" },
      { src: images.balconyEvening, alt: "Balcony in the evening light" },
      { src: images.balconyChairs, alt: "Comfortable balcony seating" },
    ],
  },
  {
    id: "minibar",
    label: "Minibar",
    heading: "Minibar",
    intro:
      "Enjoy refreshments and beverages without leaving the comfort of your room. A thoughtfully stocked minibar with drinks, snacks, and small indulgences, always within reach.",
    gallery: [
      { src: images.minibar, alt: "In-room minibar setting" },
      { src: images.drinks, alt: "Selection of drinks" },
      { src: images.snacks, alt: "Curated snacks" },
      { src: images.roomDeluxe, alt: "Relaxed room setting" },
      { src: images.minibarDetail, alt: "Close-up beverage detail" },
    ],
  },
  {
    id: "outdoor-dining",
    label: "Outdoor Dining",
    heading: "Outdoor Dining",
    intro:
      "Dine surrounded by nature and turn every meal into an experience. Open-air tables set against the mountains, warm evenings, and unhurried moments shared with the people you love.",
    gallery: [
      { src: images.outdoorDining, alt: "Outdoor dining table in nature" },
      { src: images.outdoorTable, alt: "Table set for an outdoor meal" },
      { src: images.outdoorNature, alt: "Dining surrounded by mountain scenery" },
      { src: images.outdoorEvening, alt: "Evening outdoor dining" },
      { src: images.food, alt: "Freshly prepared food" },
    ],
  },
  {
    id: "bonfire-nights",
    label: "Bonfire Nights",
    heading: "Bonfire Nights",
    intro:
      "Gather around the fire, enjoy the night air, and create unforgettable memories. Warm light, clear mountain skies, and the quiet company of good conversation.",
    gallery: [
      { src: images.bonfire, alt: "Bonfire glowing at night" },
      { src: images.bonfireSeating, alt: "Seating arranged around the fire" },
      { src: images.nightSky, alt: "Star-filled mountain night sky" },
      { src: images.bonfireWarm, alt: "Warm firelight" },
      { src: images.mountainDusk, alt: "Mountain surroundings at dusk" },
    ],
  },
];

/* ----------------------------------- Menu -------------------------------- */

export type MenuCategory = {
  name: string;
  items: { name: string; description: string; price: string }[];
};

export const menu: MenuCategory[] = [
  {
    name: "Breakfast",
    items: [
      { name: "Valley Breakfast", description: "Eggs, seasonal fruit, fresh bread, and local honey", price: "1,600" },
      { name: "Desi Nashta", description: "Halwa puri, chana, and freshly brewed chai", price: "1,400" },
      { name: "Mountain Oats", description: "Warm oats, walnuts, dried apricots, and cream", price: "1,100" },
    ],
  },
  {
    name: "Starters",
    items: [
      { name: "Chapli Kebab", description: "Traditional Peshawari kebab with fresh herbs", price: "1,300" },
      { name: "Garden Soup", description: "Slow-cooked seasonal vegetables", price: "900" },
      { name: "Grilled Halloumi", description: "With mountain honey and toasted seeds", price: "1,500" },
    ],
  },
  {
    name: "Main Course",
    items: [
      { name: "Swat Biryani", description: "Fragrant rice with tender meat and saffron", price: "2,200" },
      { name: "Trout Karahi", description: "Fresh valley trout in a light tomato base", price: "2,600" },
      { name: "Vegetable Handi", description: "Seasonal vegetables in a creamy gravy", price: "1,800" },
    ],
  },
  {
    name: "BBQ",
    items: [
      { name: "Mixed Grill Platter", description: "Assorted kebabs, tikka, and grilled vegetables", price: "3,200" },
      { name: "Malai Boti", description: "Creamy marinated skewers grilled over coals", price: "1,900" },
      { name: "Seekh Kebab", description: "Spiced minced skewers with mint chutney", price: "1,700" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Kheer", description: "Slow-cooked rice pudding with pistachio", price: "800" },
      { name: "Apricot Tart", description: "Local apricots on buttery pastry", price: "1,000" },
      { name: "Warm Gulab Jamun", description: "Served with cardamom cream", price: "850" },
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Kashmiri Chai", description: "Pink tea with almonds and pistachio", price: "650" },
      { name: "Fresh Mountain Juice", description: "Seasonal pressed fruit", price: "700" },
      { name: "Signature Coffee", description: "Locally roasted, freshly brewed", price: "750" },
    ],
  },
];
