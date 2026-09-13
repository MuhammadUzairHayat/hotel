/**
 * Central image library.
 *
 * All photography is sourced from Unsplash (free to use) and served through
 * next/image with on-demand optimisation. Each entry is a stable photo id so
 * the whole site feels like it belongs to one warm mountain-hotel brand.
 *
 * `img(id, w)` builds an optimised Unsplash URL at a sensible width/quality.
 */
export function img(id: string, w = 1600, q = 80): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  // Hero / cinematic mountain + hotel
  heroPoster: "1470252649378-9c29740c9fa8", // misty mountain valley
  heroSecondary: "1501785888041-af3ef285b470", // lake + mountains
  valley: "1464822759023-fed622ff2c3b", // green valley peaks
  mountainDusk: "1454496522488-7a8e488e8606", // dramatic dusk peaks
  exterior: "1566073771259-6a8506099945", // hotel exterior
  exteriorNight: "1571003123894-1f0594d2b5d9", // resort at night
  lobby: "1618773928121-c32242e63f39", // warm luxury lobby
  poolTerrace: "1571896349842-33c89424de2d", // terrace / pool

  // Rooms
  roomStandard: "1611892440504-42a792e24d32", // clean bright room
  roomDeluxe: "1590490360182-c33d57733427", // deluxe interior
  roomExecutive: "1618221195710-dd6b41faaea6", // executive suite
  roomFamily: "1560448204-e02f11c3d0e2", // spacious room
  roomSuite: "1596394516093-501ba68a0ba6", // luxury suite
  roomPremium: "1582719478250-c89cae4dc85b", // premium suite
  bedDetail: "1631049307264-da0ec9d70304", // bed close up
  bathroom: "1584622650111-993a426fbf0a", // bathroom
  seatingArea: "1560185007-cde436f6a4d0", // seating area
  balconyRoom: "1522708323590-d24dbb6b0267", // room with view

  // Facilities & dining
  restaurant: "1517248135467-4c7edcad34c4", // restaurant interior
  restaurantTable: "1414235077428-338989a2e8c0", // dining table
  food: "1504674900247-0877df9cc836", // plated food
  foodDetail: "1476224203421-9ac39bcb3327", // food close up
  breakfast: "1533089860892-a7c6f0a88666", // breakfast spread
  bbq: "1544025162-d76694265947", // bbq grill
  dessert: "1551024601-bec78aea704b", // dessert
  beverage: "1470337458703-46ad1756a187", // coffee / beverage

  // Balcony
  balconyView: "1505692952047-1a78307da8f2", // balcony overlooking valley
  balconyEvening: "1540541338287-41700207dee6", // evening balcony
  balconyChairs: "1600585154340-be6161a56a0c", // patio chairs
  natureView: "1439066615861-d1af74d74000", // mountain layers

  // Minibar
  minibar: "1600607687939-ce8a6c25118c", // room bar area
  drinks: "1514362545857-3bc16c4c7d1b", // drinks
  snacks: "1481391319762-47dff72954d9", // snacks
  minibarDetail: "1470337458703-46ad1756a187", // beverage detail

  // Outdoor dining
  outdoorDining: "1533777324565-a040eb52facd", // outdoor table
  outdoorTable: "1466978913421-dad2ebd01d17", // set table outside
  outdoorEvening: "1519671482749-fd09be7ccebf", // evening outdoor
  outdoorNature: "1500530855697-b586d89ba3ee", // nature surrounds

  // Bonfire
  bonfire: "1475619690928-a13d20a3cd67", // campfire
  bonfireSeating: "1504280390367-361c6d9f38f4", // seating around fire (camp)
  nightSky: "1465101162946-4377e57745c3", // night sky stars
  bonfireWarm: "1445308394109-4ec2920981b1", // warm fire glow

  // About / location
  aboutStory: "1571003123894-1f0594d2b5d9", // resort story
  hospitality: "1445019980597-93fa8acb246c", // welcoming staff / lobby
  location: "1506905925346-21bda4d32df4", // sweeping mountain landscape
  landscapeWide: "1519681393784-d120267933ba", // snowy peaks wide
} as const;

export type ImageKey = keyof typeof images;
