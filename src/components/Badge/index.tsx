interface BadgeProps {
  src: string;
  title: string;
  className?: string;
}

export default function Badgers({ src, title, className }: BadgeProps) {
  return (
    <div
      className={`group flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 p-2 md:p-3 rounded-xl shadow-lg transition-all duration-300 font-medium text-sm md:text-base cursor-pointer ${className}`}
    >
      <img
        src={src}
        alt={`${title} icon`}
        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-gray-200">{title}</span>
    </div>
  );
}
