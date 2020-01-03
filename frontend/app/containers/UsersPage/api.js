export async function apiGetUsers() {
  const result = await fetch('http://localhost:3001/users');
  const json = await result.json();

  return json;
}
