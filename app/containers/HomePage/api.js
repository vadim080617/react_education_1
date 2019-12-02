export async function apiGetUsers(from) {
  const result = await fetch(`https://api.github.com/users?since=${from}`);
  const json = await result.json();

  return json;
}
