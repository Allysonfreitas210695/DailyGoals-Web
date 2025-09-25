interface TaskProps {
  title: string;
  meta: string;
  status: string;
  icon: string;
  color: string;
}

const Task = ({ title, meta, status, icon, color }: TaskProps) => {
  return (
    <li className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-md flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-slate-400">{meta}</div>
        </div>
      </div>
      <div className="text-sm text-slate-500">{status}</div>
    </li>
  );
};

export default Task;
