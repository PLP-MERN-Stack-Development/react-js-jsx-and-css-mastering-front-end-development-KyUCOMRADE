export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
