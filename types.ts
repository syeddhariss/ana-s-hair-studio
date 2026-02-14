
export interface Service {
  id: string;
  name: string;
  category: 'Cut' | 'Color' | 'Style' | 'Treatment';
  price: string;
  duration: string;
  description: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BookingDetails {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}
