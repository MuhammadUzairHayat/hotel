export const site = {
  name: "Swat Rezidor",
  fullName: "Swat Rezidor Hotel",
  shortName: "Rezidor",
  tagline: "Where Luxury Meets Nature",
  description:
    "A luxury boutique mountain retreat in the heart of Swat Valley — peaceful stays, breathtaking views, and warm, unforgettable hospitality.",
  phone: "+92 300 123 4567",
  phoneHref: "+923001234567",
  email: "reservations@swatrezidor.com",
  address: "Bypass, opp. SPS Girls Campus, Qambar, Swat, Pakistan",
  addressShort: "Bypass Qambar, Swat Valley, Pakistan",
  reception: "Reception open 24 hours · Check-in 2:00 PM · Check-out 12:00 PM",
  mapEmbed:
  "https://www.google.com/maps?q=Bypass,+opp.+SPS+Girls+Campus,+Swat+Mingora,+Qambar,+Pakistan&output=embed",

mapDirections:
  "https://www.google.com/maps/dir/?api=1&destination=Bypass,+opp.+SPS+Girls+Campus,+Swat+Mingora,+Qambar,+Pakistan",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Executive Room",
  "Family Room",
  "Suite",
  "Premium Suite",
] as const;
