// app/bacaan/[uid]/page.tsx
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import Artikel from "@/components/bacaan/view";

export default async function ArtikelPage({ params }: { params: { uid: string } }) {
  const client = createClient();
  const doc = await client.getByUID("article", params.uid);

  return (
    <Artikel
      imageSitus={doc.data.image_situs?.url ?? ""}
      titleSitus={asText(doc.data.title_situs) ?? ""}
      paragraphSitus={asText(doc.data.paragraph_situs) ?? ""}

      imageTradisi={doc.data.image_tradisi?.url ?? ""}
      imageTradisi2={doc.data.image_tradisi2?.url ?? ""}
      titleTradisi={asText(doc.data.title_tradisi) ?? ""}
      paragraphTradisi={asText(doc.data.paragraph_tradisi) ?? ""}

      imageMakanan={doc.data.image_makanan?.url ?? ""}
      titleMakanan={asText(doc.data.title_makanan) ?? ""}
      paragraphMakanan={asText(doc.data.paragraph_makanan) ?? ""}
    />
  );
}
