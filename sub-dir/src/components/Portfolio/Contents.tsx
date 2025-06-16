type ConponetsProps = {
  title: string;
  summary: string;
  image: string;
  url: string
};

export default function Contents({ title, summary, image, url }: ConponetsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-700 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{summary}</p>
        <a href={url} className="text-main-dark hover:text-asagi font-medium transition duration-300">→ 詳細</a>
      </div>
    </div>
  )
}