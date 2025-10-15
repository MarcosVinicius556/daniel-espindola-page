export const API_BASE_URL = "https://api.dwvapp.com.br";

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscar ${endpoint}: ${res.statusText}`);
  }

  return res.json();
}
