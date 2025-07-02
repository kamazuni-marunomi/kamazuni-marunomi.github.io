import './main.css'
import Nav from '../components/Nav';

export const metadata = {
  title: 'かまずにまるのみどっとこむ',
  description: 'プログラミングしている柴犬と文鳥',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
