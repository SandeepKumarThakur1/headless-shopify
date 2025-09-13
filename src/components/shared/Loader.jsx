export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center py-12 text-gray-600">
      <span className="animate-pulse">{text}</span>
    </div>
  );
}
