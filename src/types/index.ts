export interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  features: string[];
  price?: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}
