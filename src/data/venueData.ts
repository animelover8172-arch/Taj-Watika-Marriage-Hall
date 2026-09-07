import { ExperienceBlock, GalleryItem, ReviewItem } from '../types';
import weddingsImg from '../assets/images/regenerated_image_1788808353763.png';
import familyImg from '../assets/images/regenerated_image_1788808576709.png';
import specialEventsImg from '../assets/images/regenerated_image_1788808584244.png';
import hospitalityImg from '../assets/images/regenerated_image_1788808590766.png';

export const BUSINESS_INFO = {
  name: 'TAJ WATIKA MARRIAGE HALL',
  hindiName: 'ताज वाटिका मैरिज हॉल',
  category: 'Banquet Hall / Marriage Hall',
  address: 'TAJ WATIKA, Sasaram Rd, near NEW BLOCK, Kochas, Hetampur, Bihar 821112',
  phone: '+91 99347 81245',
  phoneRaw: '+919934781245',
  googleRating: '4.0',
  googleReviewsCount: '272+',
  location: 'Hetampur, Kochas, Bihar',
  plusCode: '6WC9+53 Kochas, Bihar',
  opening: 'Open 24 Hours',
  services: ['Dine-in', 'Takeaway', 'Delivery'],
  mapQuery: 'TAJ+WATIKA+Sasaram+Rd+Kochas+Bihar',
  mapEmbedUrl: 'https://maps.google.com/maps?q=6WC9%2B53%20Kochas,%20Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=6WC9%2B53+Kochas,+Bihar',
  whatsappUrl: (message?: string) => {
    const text = message 
      ? encodeURIComponent(message)
      : encodeURIComponent('Hello Taj Watika, I would like to enquire about venue booking and availability for our upcoming celebration.');
    return `https://wa.me/919934781245?text=${text}`;
  },
  socials: {
    facebook: '#', // [Add Facebook URL]
    instagram: '#', // [Add Instagram URL]
    email: '#', // [Add Email]
  },
  developer: {
    name: 'RoadsideDeveloper',
    whatsapp: '+91 7654224826',
    whatsappUrl: 'https://wa.me/917654224826',
    call: '+91 8405918172',
    callUrl: 'tel:+918405918172',
  }
};

export const EXPERIENCE_BLOCKS: ExperienceBlock[] = [
  {
    id: 'weddings',
    tag: 'WEDDINGS',
    title: 'A Majestic Setting for Sacred Unions',
    description: 'Celebrate your most important day in an atmosphere designed for unforgettable memories.',
    imageUrl: weddingsImg,
    imageAlt: 'Luxury Indian wedding stage setup with floral chandeliers'
  },
  {
    id: 'family',
    tag: 'FAMILY CELEBRATIONS',
    title: 'Cherished Gatherings Across Generations',
    description: 'A welcoming setting for celebrations shared with the people who matter most.',
    imageUrl: familyImg,
    imageAlt: 'Elegant banquet gathering celebration'
  },
  {
    id: 'special-events',
    tag: 'SPECIAL EVENTS',
    title: 'Occasions Brought to Vibrant Life',
    description: 'Bring your important occasions to life with a refined and memorable venue experience.',
    imageUrl: specialEventsImg,
    imageAlt: 'Evening celebration with champagne lighting and floral decor'
  },
  {
    id: 'hospitality',
    tag: 'HOSPITALITY',
    title: 'Gracious Care for Every Guest',
    description: 'Thoughtful hospitality designed to make every gathering feel special.',
    imageUrl: hospitalityImg,
    imageAlt: 'Bespoke banquet dining and gracious hospitality arrangement'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Floral Mandap',
    category: 'Weddings',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
    aspect: 'tall',
    caption: 'Bespoke floral wedding altar and stage architecture.'
  },
  {
    id: 'gal-2',
    title: 'Illuminated Evening Lawn',
    category: 'Lighting & Ambience',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'Warm ambient celebration lighting across open banquet grounds.'
  },
  {
    id: 'gal-3',
    title: 'Royal Banquet Stage',
    category: 'Banquet & Stage',
    imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square',
    caption: 'Palatial stage draping and warm golden illumination.'
  },
  {
    id: 'gal-4',
    title: 'Banqueting & Dining Arrangement',
    category: 'Dining & Hospitality',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop',
    aspect: 'tall',
    caption: 'Elegant table arrangement with refined hospitality service.'
  },
  {
    id: 'gal-5',
    title: 'Golden Celebration Entrance',
    category: 'Lighting & Ambience',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'Grand illuminated ceremonial entry pathway for arriving guests.'
  },
  {
    id: 'gal-6',
    title: 'Candid Moments of Joy',
    category: 'Weddings',
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square',
    caption: 'Timeless traditional wedding celebrations and family blessings.'
  },
  {
    id: 'gal-7',
    title: 'Crystal Chandelier Pavilion',
    category: 'Banquet & Stage',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'Opulent crystal accents and celebratory indoor aesthetics.'
  },
  {
    id: 'gal-8',
    title: 'Courtyard Evening Aura',
    category: 'Lighting & Ambience',
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop',
    aspect: 'tall',
    caption: 'Serene warm candlelight and evening atmosphere.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Kumar Singh',
    rating: 5,
    date: 'Recent Google Review',
    occasion: 'Wedding Reception',
    text: 'A very spacious and beautifully maintained marriage hall in Kochas. The staff was cordial, lighting was magnificent, and the parking arrangement made it effortless for all our visiting relatives.'
  },
  {
    id: 'rev-2',
    author: 'Sunil Pandey',
    rating: 5,
    date: 'Verified Visitor',
    occasion: 'Family Celebration',
    text: 'Best destination for wedding functions on Sasaram Road. Ample space for grand stage setup and dining. 24-hour accessibility is a big advantage for night ceremonies.'
  },
  {
    id: 'rev-3',
    author: 'Dr. Amit Verma',
    rating: 4,
    date: 'Local Guide Review',
    occasion: 'Engagement & Ring Ceremony',
    text: 'Taj Watika offers a truly premium ambiance in Hetampur. The stage decor and hospitality were well handled. Highly recommended for families planning significant celebrations in Kochas.'
  },
  {
    id: 'rev-4',
    author: 'Prakash Tiwary',
    rating: 5,
    date: 'Verified Reviewer',
    occasion: 'Anniversary Celebration',
    text: 'Clean surroundings, hospitable team, and grand visual setup. We hosted our family gathering here and everyone appreciated the prompt hospitality and management.'
  },
  {
    id: 'rev-5',
    author: 'Manoj Gupta',
    rating: 4,
    date: 'Local Reviewer',
    occasion: 'Marriage Ceremony',
    text: 'Prominent location near New Block on Sasaram road. Easy to locate for outside guests. Taj Watika provided an elegant setting for our wedding rituals.'
  }
];
