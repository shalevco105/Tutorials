import { Company } from "./companyModel";

export interface FullUser {
  id: number;
  phone: string;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    country: string;
  };
  website: string;
  company: Company;
}


