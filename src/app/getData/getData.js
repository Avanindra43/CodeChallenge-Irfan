export default async function getData() {
  const res = await fetch(
    `https://randomuser.me/api?results=8&inc=name,email,phone,id,picture&nat=us&seed=3e9b1a23deff7af0`
  );

  console.log(res.data);
  const data = await res.json();
  console.log(data.results);
  return data.results;
}
