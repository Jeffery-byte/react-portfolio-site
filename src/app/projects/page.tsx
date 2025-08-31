export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="space-y-8">
        {/* Add your projects here as cards or list items */}
        <div className="p-6 border rounded-lg shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
          <p className="text-gray-700 mb-2">Short project description goes here.</p>
          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">React</span>
        </div>
      </div>
    </section>
  );
}
