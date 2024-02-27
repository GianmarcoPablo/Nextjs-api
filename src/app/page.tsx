import { redirect } from "next/navigation";


export default async function Home() {

  redirect("/dashboard")

  return (
    <>
      <h1>home</h1>
    </>
  );
}
