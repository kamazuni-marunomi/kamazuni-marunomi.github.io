export default function PersonUrl(props: { url: string, text: string }) {
  return (
    <div className="flex space-x-3">
        <a href={props.url} className="text-main-dark hover:text-main transition duration-300">{props.text}</a>
    </div>
  )
}