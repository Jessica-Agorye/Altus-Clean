const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
