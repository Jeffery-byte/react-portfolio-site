'use client'

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Feel free to reach out for opportunities, collaboration, or just to connect!
      </p>
      <div className="bg-slate-800/60 text-slate-200 p-8 rounded-xl text-center font-semibold">
        Please contact me directly at <a href="mailto:owusuagyemangjeffery18@gmail.com" className="text-cyan-400 underline hover:text-emerald-400 transition-colors">owusuagyemangjeffery18@gmail.com</a>.
      </div>
    </section>
  );
}
