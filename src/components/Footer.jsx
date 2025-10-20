export default function Footer() {
  return (
    <footer className="text-center py-4 mt-10 border-t dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} React Task App. All rights reserved.
      </p>
    </footer>
  );
}
