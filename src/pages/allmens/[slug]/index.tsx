import { AllCatogryData ,AllCatogryDataType } from "@/components/typesandArrays/AllMensData";
import AllMens from "@/components/views/AllMens";
import Image from "next/image";
import { useRouter } from "next/router"

export default function Allmen() {
    const router = useRouter();
    const slug = router.query.slug;
    let particularData = AllCatogryData.find((item: AllCatogryDataType) => item.catogry === slug);
    return (
        <main>
            {particularData ? <AllMens slug={slug} particularDatas={particularData} /> : ""}
        </main>
    )
}