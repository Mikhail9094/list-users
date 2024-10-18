import { IFormData } from "./types";

interface IField {
  label: string;
  id: string;
  key: keyof IFormData;
  type: string;
}

export const fields: IField[] = [
  { label: "Name", id: "name", key: "name", type: "text" },
  { label: "User name", id: "userName", key: "userName", type: "text" },
  { label: "Email", id: "email", key: "email", type: "email" },
  { label: "Street", id: "street", key: "street", type: "text" },
  { label: "City", id: "city", key: "city", type: "text" },
  { label: "Zip code", id: "zipcode", key: "zipcode", type: "string" },
  { label: "Phone", id: "phone", key: "phone", type: "tel" },
  { label: "Website", id: "website", key: "website", type: "url" },
];
