import {
  AllCatogryData,
  AllCatogryDataType,
} from "@/components/typesandArrays/AllMensData";
import AllMens from "@/components/views/AllMens";
import Navbar from "@/components/views/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Allmen() {
  const router = useRouter();
  const slug = router.query.slug;
  let particularData = AllCatogryData.find(
    (item: AllCatogryDataType) => item.catogry === slug
  );
  return (
    <main>
      <Navbar page="allmen" />
      {particularData ? (
        <AllMens slug={slug} particularDatas={particularData} />
      ) : (
        ""
      )}
    </main>
  );
}
