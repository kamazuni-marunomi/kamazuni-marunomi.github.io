import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-main text-cente bg-red-100 border border-blackr">
      <div className="container mx-auto py-10">
        <Image src="images/shiba.png" alt="柴犬と文鳥" width={500} height={300} className="w-full max-w-[60%] mx-auto h-auto" />
        <p className="text-white text-lg mt-8">Ruby とか TypeScript とか Linux とかで遊んでいる柴犬と文鳥です。</p>
      </div>
    </header>
  )
}