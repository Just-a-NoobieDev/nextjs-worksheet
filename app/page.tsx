import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar isActivity1 />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Hello World</h1>
      </main>
    </>
  );
}
