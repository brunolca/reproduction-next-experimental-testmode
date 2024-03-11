export default async function Home() {
  const post = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  // const post2 = await (
  //   await fetch("https://jsonplaceholder.typicode.com/posts/2")
  // ).json();

  return (
    <main>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      {/* <pre>{JSON.stringify(post2, null, 2)}</pre> */}
    </main>
  );
}
