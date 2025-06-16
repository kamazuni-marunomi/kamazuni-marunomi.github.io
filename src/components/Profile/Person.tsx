import PersonUrl from './PersonUrl'

type UrlMap = { [text: string]: string };
type PersonProps = {
  name: string;
  comment: string;
  image: string;
  urls: UrlMap
};

export default function Person({ name, comment, image, urls }: PersonProps) {
  return (
    <>
      <div className="max-w-3xl mx-auto rounded-xl shadow-md px-6 py-4">
        <div className="flex flex-col px-6 md:flex-row items-center md:items-start">
          <img src={image} alt="プロフィール写真" className="w-32 h-32 rounded-full md:mr-8 mb-6 md:mb-0 shadow-lg" />
          <div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-2">{name}</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
                {comment}
            </p>
            {　Object.entries(urls).map(([text, url], index) => (
              <PersonUrl key={index} url={url} text={text} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}