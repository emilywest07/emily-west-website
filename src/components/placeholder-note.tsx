export function PlaceholderNote({ children = "Authoritative content to be supplied." }: { children?: React.ReactNode }) {
  return <p className="placeholder-note">{children}</p>;
}
