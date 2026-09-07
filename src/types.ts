export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Banquet & Stage' | 'Dining & Hospitality' | 'Lighting & Ambience';
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  occasion: string;
}

export interface ExperienceBlock {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface EnquiryData {
  name: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  message: string;
}
