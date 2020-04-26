export function extractId(url: string): number {
  const urlParts = url.split('/');
  const id = urlParts[urlParts.length - 2];
  return Number(id);
}
