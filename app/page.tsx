import Image from "next/image";
import Link from "next/link";
import style from './app.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justity-center p-24">
      <div className="text-4xl">Click any button to View Content</div>
      <div className="flex w-full max-sm:flex-col md:flex-row items-center justify-around">
        <Link href='/cats' className={"btn btn-info text-3xl btn-square " + style.dogs}> Cats </Link>
        <Link href='/dogs' className={"btn btn-info text-3xl btn-square " + style.dogs}> Dogs </Link>
      </div>

    </main>
  );
}
