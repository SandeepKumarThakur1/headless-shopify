export default function ErrorMessage({ message = "Something went wrong" }) {
  return (
    <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center">
      ⚠️ {message}
    </div>
  );
}
