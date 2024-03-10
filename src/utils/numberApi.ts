export async function getNumber() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (res.ok) {
    return res.json();
  } else throw new Error("Error");
}
