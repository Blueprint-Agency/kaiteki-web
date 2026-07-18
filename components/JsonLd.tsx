/** Renders a JSON-LD structured-data block. Google merges multiple blocks per
 *  page and resolves cross-references by @id, so pages may emit several. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
