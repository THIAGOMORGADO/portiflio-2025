import { Badge } from "@/components/ui/badge";
type BadgersProps = {
  src: string;
  title: string;
  className: string;
};

export default function Badgers({ src, title, className }: BadgersProps) {
  return (
    <Badge
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:scale-105 ${className}`}
    >
      <img src={src} alt={title} className="w-6 h-6 object-contain" />
      <span className="text-sm font-semibold tracking-wide">{title}</span>
    </Badge>
  );
}
