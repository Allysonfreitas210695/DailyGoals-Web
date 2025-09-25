interface InfoProps {
  label: string;
  value: string;
}
const Info = ({ label, value }: InfoProps) => {
  return (
    <div className="flex flex-col">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default Info;
