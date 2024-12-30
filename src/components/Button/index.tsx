

interface ButtonProps {
  title: string;
  type?: "default" | "download";
  className?: string;
  icon?: React.ReactNode;
}

export function Buttons({
  title,
  type = "default",
  className,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

  const getHref = () => {
    if (type === "download") {
      return "https://docs.google.com/document/d/18ANQ3m6czFuGHoNk6-k5ogoend-h0vwFwoqEto9Mguk/edit?usp=drive_link";
    }
    return "#";
  };

  return (
    <a
      href={getHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${className}`}
      download={type === "download"}
      role="button"
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {title}
    </a>
  );
}
