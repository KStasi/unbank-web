export default function shortifyAddress(str) {
  if (str.length <= 12) {
    return str;
  }

  const start = str.slice(0, 7);
  const end = str.slice(-5);

  return start + "..." + end;
}
