export function extractPageNumber(url: string): number {
  const urlParts = url.split('page=');
  const pageNum = urlParts[urlParts.length - 1];
  return Number(pageNum);
}
