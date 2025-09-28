import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-main shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white hover:text-slate-200 transition duration-300">かまずにまるのみどっとこむ</a>
        <div className="space-x-4 text-white ">
            <a href="/#profile" className="hover:hover-text-main-light transition duration-300">Profile</a>
            <a href="/#portfolio" className="hover:hover-text-main-light transition duration-300">Portfolio</a>
            <a href="/omikuji">Omijiku</a>
        </div>
      </div>
    </nav>
  )
}
