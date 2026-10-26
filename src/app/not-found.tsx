import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#f5f0e4",
          color: "#171510",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ maxWidth: "32rem", padding: "2rem" }}>
          <p
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            404
          </p>
          <h1 style={{ fontSize: "2.5rem", lineHeight: 1, margin: "1rem 0" }}>
            This page doesn&apos;t exist.
          </h1>
          <p style={{ color: "#6b655a", lineHeight: 1.6 }}>
            The address may be wrong, or the page may have moved.
          </p>
          <Link
            href="/en"
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              padding: "0.75rem 1.25rem",
              background: "#a84327",
              color: "#fbf7ef",
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
