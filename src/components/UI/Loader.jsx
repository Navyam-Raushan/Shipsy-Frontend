export const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="w-12 h-12 border-4 border-dashed border-blue-500 rounded-full animate-spin"></div>
      <h1 className="mt-4 text-xl font-semibold animate-pulse">Loading...</h1>
    </div>
  );
};
