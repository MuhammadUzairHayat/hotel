import { images } from "./images";

export type Room = {
  slug: string;
  name: string;
  price: string;
  priceNote: string;
  size: string;
  bed: string;
  guests: string;
  description: string;
  longDescription: string;
  amenities: string[];
  image: string;
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: "standard-room",
    name: "Standard Room",
    price: "PKR 14,000",
    priceNote: "/ night",
    size: "1500 SQ.FT",
    bed: "King Size Bed",
    guests: "2–4 Guests",
    description:
      "Designed for guests seeking comfort without compromise, our Standard Rooms offer a relaxing atmosphere with elegant interiors, modern amenities, and everything you need for a peaceful stay in Swat Valley.",
    longDescription:
      "Our Standard Rooms are a calm, uncluttered retreat after a day exploring the valley. Warm natural textures, soft lighting, and thoughtfully chosen furnishings create a space that feels both restful and refined. Every detail — from the crisp linens to the quiet corners — is arranged to help you slow down and settle in.",
    amenities: [
      "Free Toiletries",
      "Kitchen",
      "Safety Deposit Box",
      "Wi-Fi",
      "Room Service",
    ],
    image: images.roomStandard,
    gallery: [
      images.roomStandard,
      images.bedDetail,
      images.bathroom,
      images.seatingArea,
    ],
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    price: "PKR 18,500",
    priceNote: "/ night",
    size: "1800 SQ.FT",
    bed: "King Size Bed",
    guests: "2–4 Guests",
    description:
      "Step into a more refined stay with our Deluxe Rooms, thoughtfully designed with elegant interiors, generous space, and modern amenities for a comfortable and relaxing experience in Swat Valley.",
    longDescription:
      "The Deluxe Room gives you room to breathe. A dedicated seating area, climate control, and elevated finishes make it ideal for guests who want a little more space and a little more quiet. Large windows frame the mountains and fill the room with soft, natural light throughout the day.",
    amenities: [
      "Free Toiletries",
      "Kitchen",
      "Safety Deposit Box",
      "Comfortable Seating Area",
      "Air Conditioning",
      "Wi-Fi",
      "Room Service",
    ],
    image: images.roomDeluxe,
    gallery: [
      images.roomDeluxe,
      images.seatingArea,
      images.bedDetail,
      images.bathroom,
    ],
  },
  {
    slug: "executive-room",
    name: "Executive Room",
    price: "PKR 24,000",
    priceNote: "/ night",
    size: "2200 SQ.FT",
    bed: "King Size Bed",
    guests: "2–4 Guests",
    description:
      "Designed for guests who appreciate extra space and elevated comfort, our Executive Rooms combine contemporary interiors, thoughtful amenities, and a peaceful atmosphere for a memorable stay.",
    longDescription:
      "Our Executive Rooms are built around space and calm. A spacious seating area, premium bedding, and curated in-room amenities come together in interiors that feel contemporary yet grounded in the warmth of the valley. It is the natural choice for a longer, more leisurely stay.",
    amenities: [
      "Free Toiletries",
      "Kitchen",
      "Safety Deposit Box",
      "Spacious Seating Area",
      "Premium Room Amenities",
      "Air Conditioning",
      "Wi-Fi",
      "Room Service",
    ],
    image: images.roomExecutive,
    gallery: [
      images.roomExecutive,
      images.seatingArea,
      images.balconyRoom,
      images.bathroom,
    ],
  },
  {
    slug: "family-room",
    name: "Family Room",
    price: "PKR 28,000",
    priceNote: "/ night",
    size: "2600 SQ.FT",
    bed: "King Size Bed / Family Bedding",
    guests: "3–6 Guests",
    description:
      "Our Family Rooms provide generous space and practical comfort for families traveling together. With thoughtfully arranged interiors and modern amenities, they offer a welcoming place to relax after exploring Swat Valley.",
    longDescription:
      "Made for togetherness, the Family Room offers a generous, flexible layout with comfortable bedding for everyone and a relaxed seating area to gather in the evenings. Practical touches and plenty of room to spread out make it easy for families to feel instantly at home.",
    amenities: [
      "Free Toiletries",
      "Kitchen",
      "Safety Deposit Box",
      "Spacious Family Area",
      "Comfortable Seating",
      "Air Conditioning",
      "Wi-Fi",
      "Room Service",
    ],
    image: images.roomFamily,
    gallery: [
      images.roomFamily,
      images.seatingArea,
      images.bedDetail,
      images.bathroom,
    ],
  },
  {
    slug: "suite",
    name: "Suite",
    price: "PKR 36,000",
    priceNote: "/ night",
    size: "3200 SQ.FT",
    bed: "King Size Bed",
    guests: "2–4 Guests",
    description:
      "Experience an elevated stay in our spacious Suites, designed with refined interiors, generous living space, and premium comforts for guests looking for something truly special.",
    longDescription:
      "The Suite is our most indulgent retreat. A separate sitting area, expansive living space, and premium amenities are wrapped in refined, warm interiors that look out over the valley. It is designed for guests who want their stay to feel like a genuine occasion.",
    amenities: [
      "Free Toiletries",
      "Kitchen",
      "Safety Deposit Box",
      "Separate Sitting Area",
      "Premium Amenities",
      "Spacious Interior",
      "Air Conditioning",
      "Wi-Fi",
      "Room Service",
    ],
    image: images.roomSuite,
    gallery: [
      images.roomSuite,
      images.seatingArea,
      images.balconyRoom,
      images.bathroom,
    ],
  },
];

export function getRoom(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
