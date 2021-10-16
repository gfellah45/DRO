export function getURL(path = "") {
  return `${"https://www.anapioficeandfire.com/api"}${path}`;
}

// Helper to make GET requests the endpoint
export async function fetchAPI(path: string) {
  const requestUrl = getURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
