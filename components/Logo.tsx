import Image from "next/image";
import Link from "next/link";

/**
 * James Williams, LLC logo.
 * Uses the real brand artwork. The artwork sits on a white background, so on
 * dark surfaces we set `variant="light"` to wrap it in a white card.
 */
export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const img = (
    <Image
      src="/logo/jw-lockup.png"
      alt="James Williams, LLC — General Contracting"
      width={1056}
      height={678}
      className="h-14 w-auto sm:h-16"
    />
  );

  return (
    <Link
      href="/"
      className={`inline-flex ${className}`}
      aria-label="James Williams, LLC home"
    >
      {variant === "light" ? (
        <span className="inline-flex rounded-lg bg-white p-3 shadow-sm">{img}</span>
      ) : (
        img
      )}
    </Link>
  );
}
