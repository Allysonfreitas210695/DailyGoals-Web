interface FeatureCardProps {
  title: string;
  desc: string;
}

const FeatureCard = ({ title, desc }: FeatureCardProps) => {
  return (
    <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-slate-500 text-sm">{desc}</p>
    </article>
  );
};

export default FeatureCard;
