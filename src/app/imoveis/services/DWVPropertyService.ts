import { Property } from "../../api/dwv-integration/dtos/PropertyDTO";

export interface PropertyFilter {
  search?: string;
  limit?: number;
  page?: number;
}

const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Apartamento moderno no centro",
    price: 350000,
    city: "São Paulo",
    state: "SP",
    bedrooms: 2,
    bathrooms: 1,
    area: 68,
    imageUrl: "https://placehold.co/600x400?text=Apartamento+1",
  },
  {
    id: 2,
    title: "Casa térrea com quintal",
    price: 480000,
    city: "Campinas",
    state: "SP",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    imageUrl: "https://placehold.co/600x400?text=Casa+2",
  },
  {
    id: 3,
    title: "Cobertura com vista panorâmica",
    price: 820000,
    city: "Santos",
    state: "SP",
    bedrooms: 3,
    bathrooms: 3,
    area: 150,
    imageUrl: "https://placehold.co/600x400?text=Cobertura+3",
  },
  {
    id: 4,
    title: "Apartamento com varanda gourmet",
    price: 590000,
    city: "São Paulo",
    state: "SP",
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    imageUrl: "https://placehold.co/600x400?text=Apartamento+4",
  },
  {
    id: 5,
    title: "Casa de campo com piscina",
    price: 1200000,
    city: "Atibaia",
    state: "SP",
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    imageUrl: "https://placehold.co/600x400?text=Casa+5",
  },
  {
    id: 6,
    title: "Kitnet próxima à praia",
    price: 180000,
    city: "Guarujá",
    state: "SP",
    bedrooms: 1,
    bathrooms: 1,
    area: 38,
    imageUrl: "https://placehold.co/600x400?text=Kitnet+6",
  },
];

export async function fetchProperties(
  filters: PropertyFilter = {}
): Promise<Property[]> {
  const { search = "", limit = 10, page = 1 } = filters;

  let filtered = MOCK_PROPERTIES.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * limit;
  const end = start + limit;
  filtered = filtered.slice(start, end);

  await new Promise((resolve) => setTimeout(resolve, 300));

  return filtered;
}
