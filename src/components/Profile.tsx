import Person from './Person';

export default function Profile() {
  const personHachi = {
    name: 'Eiji Hachiya',
    comment: 'テニスが好きなWebアプリケーションエンジニアです',
    image: 'images/hachi.jpg',
    urls: {
            X: 'https://x.com/hachi_eiji',
            gist: 'https://gist.github.com/hachi-eiji/29a7857d1b5faa354b234fe0725e5c2d'
          }
  };
    const personAki = {
    name: 'tadaaki',
    comment: 'プログラマになりたいって一生言ってる文鳥',
    image: 'images/tori.jpg',
    urls: {
            Twitter: 'https://twitter.com/tdkakak'
          }
  };

  return (
    <>
      <section id="profile" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-main-dark text-center">Profile</h2>
        </div>
        <Person {...personHachi} />
        <Person {...personAki} />
      </section>
    </>
  )
}