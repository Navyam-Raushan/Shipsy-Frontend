export const Contect = () => {
  const handleFormSubmit =(formData)=>{
     const data = Object.fromEntries(formData.entries());
     console.log(data);
  }
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-8">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Contact With Us!
        </h1>
        <form action={handleFormSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              autoComplete="off"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              autoComplete="off"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Enter your Message"
              name="message"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
