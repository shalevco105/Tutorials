import { Address } from "cluster";
import { Company } from "./companyModel";

export interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
