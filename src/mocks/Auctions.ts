import tender1 from "@/assets/tender-1.jpeg";
import tender2 from "@/assets/tender-2.jpeg";
import tender3 from "@/assets/tender-3.jpeg";
import tender4 from "@/assets/tender-4.jpeg";
import tender5 from "@/assets/tender-5.jpeg";
import tender6 from "@/assets/tender-6.jpeg";
import tender7 from "@/assets/tender-7.jpeg";
import tender8 from "@/assets/tender-8.jpeg";
import tender9 from "@/assets/tender-9.jpeg";
import tenderSub1 from "@/assets/tender-sub-1.jpeg";
import tenderSub2 from "@/assets/tender-sub-2.jpeg";
import tenderSub3 from "@/assets/tender-sub-3.jpeg";

export interface IAuction {
  id: number;
  name: string;
  subDescription: string;
  startDate: Date;
  endDate: Date;
  lastBid: number;
  location: string;
  category: string;
  description: string;
  images: string[];
}

export const AUCTION_MOCKS = [
  {
    id: 1,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    // create startDate with date and time  to be random date between today and 15 of may
    startDate: new Date("2024-05-02T21:00:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-02T22:00:00.000Z"),
    lastBid: 129,
    location: "Yerevan",
    category: "Classic & Collector Cars",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender1,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 2,
    name: "2013 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
    // end date is 1 hour after start date
    startDate: new Date("2024-05-04T12:35:00.000Z"),
    endDate: new Date("2024-05-04T13:35:00.000Z"),

    lastBid: 250,
    location: "Yerevan",
    category: "Vintage Treasures",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender2,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 3,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    // create startDate with date and time  to be random date between today and 15 of may
    startDate: new Date("2024-05-03T16:45:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-03T17:45:00.000Z"),
    lastBid: 900,
    location: "Yerevan",
    category: "Luxury Lifestyles",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 4,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-05T22:15:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-05T23:15:00.000Z"),
    lastBid: 820,
    location: "Yerevan",
    category: "Art Collectors' Corner",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender4,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 5,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-07T06:00:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-07T07:00:00.000Z"),
    lastBid: 0,
    location: "Yerevan",
    category: "Tech & Gadgets",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender5,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 6,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-09T13:20:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-09T14:20:00.000Z"),
    lastBid: 129,
    location: "Yerevan",
    category: "Home & Garden",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender6,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 7,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-11T18:45:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-11T19:45:00.000Z"),
    lastBid: 240,
    location: "Yerevan",
    category: "Sports & Memorabilia",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender7,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 8,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-02T03:10:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-02T04:10:00.000Z"),
    lastBid: 1800,
    location: "Yerevan",
    category: "Rare Finds",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender8,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 9,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-04T11:25:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-04T12:25:00.000Z"),
    lastBid: 450,
    location: "Yerevan",
    category: "Automotive Alley",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender9,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 10,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-06T19:40:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-06T20:40:00.000Z"),
    lastBid: 729,
    location: "Yerevan",
    category: "Books & Manuscripts",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender1,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 11,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-08T07:55:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-08T08:55:00.000Z"),
    lastBid: 610,
    location: "Yerevan",
    category: "Music & Instruments",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender2,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
  {
    id: 12,
    name: "2014 AUDI Q5 PREMIUM",
    subDescription: "A breif 40min hiking trip through the alps.",
    startDate: new Date("2024-05-10T14:30:00.000Z"),
    // end date is 1 hour after start date
    endDate: new Date("2024-05-10T15:30:00.000Z"),
    lastBid: 529,
    location: "Yerevan",
    category: "Fashion Forward",
    description:
      "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
    images: [
      tender3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
      tenderSub1,
      tenderSub2,
      tenderSub3,
    ],
  },
];
