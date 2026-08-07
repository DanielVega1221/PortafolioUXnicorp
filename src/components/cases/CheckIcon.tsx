export default function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "0.15rem" }}>
      <circle cx="7" cy="7" r="6" fill={color} fillOpacity="0.15" />
      <path d="M4.5 7l1.75 1.75L9.5 5.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
