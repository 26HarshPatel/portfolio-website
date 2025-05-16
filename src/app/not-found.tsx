import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full min-h-[70vh] flex flex-col justify-center items-center gap-4">
      <div className="border border-amber-700 rounded-2xl px-4 py-3">
        <h2 className="text-red-700 text-2xl font-semibold">
          404 - Page Not Found
        </h2>
        <br />
        <p>Could not find requested resource</p>
        <hr className="border border-amber-700" />
        <br />
        <div className="bg-amber-300 flex justify-center items-center py-2.5 rounded-xl hover:bg-amber-400 active:bg-blue-500 shadow-innerPrimary select-none ">
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
