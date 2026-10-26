export default function SectionHeading({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="label-mono">{label}</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
      </div>
      {lead && (
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:text-base">
          {lead}
        </p>
      )}
    </div>
  );
}
