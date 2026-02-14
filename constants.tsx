
import { Service, Stylist } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: "Women's Designer Cut",
    category: 'Cut',
    price: '$75+',
    duration: '60 min',
    description: 'Precision haircut customized to your face shape and hair texture, including blowout.'
  },
  {
    id: '2',
    name: "Men's Modern Cut",
    category: 'Cut',
    price: '$45+',
    duration: '45 min',
    description: 'A tailored cut followed by a refreshing wash and style.'
  },
  {
    id: '3',
    name: 'Full Balayage',
    category: 'Color',
    price: '$180+',
    duration: '180 min',
    description: 'Hand-painted highlights for a natural, sun-kissed look.'
  },
  {
    id: '4',
    name: 'Single Process Color',
    category: 'Color',
    price: '$95+',
    duration: '90 min',
    description: 'All-over color from roots to ends for vibrancy and shine.'
  },
  {
    id: '5',
    name: 'Signature Blowout',
    category: 'Style',
    price: '$50+',
    duration: '45 min',
    description: 'Wash and expert blow-dry styling for volume and smoothness.'
  },
  {
    id: '6',
    name: 'Keratin Smoothing',
    category: 'Treatment',
    price: '$250+',
    duration: '150 min',
    description: 'Long-lasting treatment to eliminate frizz and add incredible shine.'
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 's1',
    name: 'Ana Sofia',
    role: 'Master Stylist & Founder',
    image: 'https://picsum.photos/seed/ana/400/500'
  },
  {
    id: 's2',
    name: 'Marcus V.',
    role: 'Senior Colorist',
    image: 'https://picsum.photos/seed/marcus/400/500'
  }
];
