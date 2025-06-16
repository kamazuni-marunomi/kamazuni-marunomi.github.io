export default function Header() {
  return (
    <header className="bg-main text-center">
      <div className="container mx-auto py-10">
        <img src="/images/shiba.png" alt="柴犬と文鳥" className="w-full max-w-[60%] mx-auto h-auto" />
        <p className="text-white text-lg mt-8">Ruby とか TypeScript とか Linux とかで遊んでいる柴犬と文鳥です。</p>
      </div>
    </header>
  )
}