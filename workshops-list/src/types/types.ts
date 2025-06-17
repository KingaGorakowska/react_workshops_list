interface Address {
  district: string;
  locality: string;
  localitySlug: string;
  postcode: string;
  street: string;
}

interface Review {
  count: number;
  score: number;
}

interface Network {
  [key: string]: any;
}

export interface Workshop {
  address: Address;
  booking: boolean;
  distance: number;
  filteredServices: any | null; 
  hashedKhCode: string;
  image: string;
  moreCategories: boolean;
  name: string;
  networks: Network[];
  partnerBrands: any[];    
  phoneNumber: string;
  promotedCategories: any[];  
  reviews: Review;
  slug: string;
  sponsored: boolean;
  type: string;
}

export interface Filters{
  additional: string[],
  availability: string[],
  brands: string[],
  districts: string[],
  networks: string[],
} 