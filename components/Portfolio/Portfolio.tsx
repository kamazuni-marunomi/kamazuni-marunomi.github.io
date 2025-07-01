import Contents from './Contents';
import { contents } from '../../data/contents';

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-main-dark mb-10 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-z lg:grid-cols-4 gap-8">
            {contents.map((item, index) => (
              <Contents key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}