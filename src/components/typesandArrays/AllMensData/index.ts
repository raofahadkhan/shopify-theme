import { reviews } from "@/components/assets";

interface NavigationDataLabelType {
    label: string,
    catogry: string,
}
interface NavigationDataType {
    catogry: string,
    catogryToShow: string,
    labels: Array<NavigationDataLabelType>,
}
interface ProductDataType {
    imageUrl: string,
    imageUrl2: string,
    name: string,
    price: string,
    reviews?: any,
    reviewPerson?: string,
    availableColours?: string[],
    banner?: string,
    bannerColor?: string,
    imageAlt: string,
    catogry1?: string,
    catogry2: string,
}

export interface AllCatogryDataType {
    homeImageUrl: string,
    homeAltText: string,
    catogry: string,
    NavigationData: NavigationDataType,
    productData?: Array<ProductDataType>,
}

export const AllCatogryData: Array<AllCatogryDataType> = [
    {
        homeImageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/collections/mens-Stocksy_txpd2ea9debXoZ100_Medium_222225-edited_1800x.jpg?v=1500224081",
        homeAltText: "Men",
        catogry: "mens",
        NavigationData: {
            catogry: "All men",
            catogryToShow: "allmens",
            labels: [
                {
                    label: "Shirt",
                    catogry: "shirt",
                },
                {
                    label: "Shorts",
                    catogry: "shorts",
                },
                {
                    label: "Boardshorts",
                    catogry: "boardshorts",
                },
                {
                    label: "Jackets",
                    catogry: "jackets",
                },
                {
                    label: "Sale",
                    catogry: "sale",
                },
            ],
        },
        productData: [
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock3_360x.jpg?v=1584466287",
                name: "Chambray Button Down",
                price: "$68",
                reviews: reviews,
                reviewPerson: "2 reviews",
                banner: "BEST SELLING",
                bannerColor: "bg-[#111111]",
                imageAlt: "allmens",
                catogry1: "allmens",
                catogry2: "shirt",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey1_dc18d2f2-d762-48fe-a650-ee56dc67f428_1800x1800.jpg?v=1609257895",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_b2facf5e-7e6a-489d-ab6d-87c2be3d4db7_360x.jpg?v=1609257900",
                name: "Adventure Mobile Terry Pullover",
                price: "$58",
                imageAlt: "Adventure Mobile Terry Pullover",
                availableColours: ["bg-[#B4BBC5]", "bg-[#4B635D]"],
                catogry1: "allmens",
                catogry2: "shirt",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-black_1800x1800.jpg?v=1609257990",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-red2_360x.jpg?v=1609258000",
                name: "Polaris Terry Pullover",
                price: "$68 from $52",
                banner: "SAVE $16",
                bannerColor: "bg-[#DA3217]",
                imageAlt: "Polaris Terry Pullover",
                availableColours: ["bg-[#292D33]", "bg-[#F34A5E]"],
                catogry1: "allmens",
                catogry2: "shirt" && "sale",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-pinebear-grey_1800x1800.jpg?v=1497281356",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-pinebear-oak1_360x.jpg?v=1497281366",
                name: "Pine Bear Tee",
                price: "$36",
                banner: "SOLD OUT",
                bannerColor: "bg-[#111111]",
                imageAlt: "Pine Bear Tee",
                catogry1: "allmens",
                catogry2: "shirt",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-colorblockss-navygrey1_1800x1800.jpg?v=1497280597",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-colorblockss-navygrey2_360x.jpg?v=1497280604",
                name: "Colorblock Short Sleeve Tee",
                price: "$42",
                imageAlt: "Colorblock Short Sleeve Tee",
                catogry1: "allmens",
                catogry2: "shirt",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-steele-olive1_1800x1800.jpg?v=1497280216",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-steele-olive2_360x.jpg?v=1497280223",
                name: "Steele Packable Parka",
                banner: "NEW",
                bannerColor: "bg-[#111111]",
                price: "$48",
                imageAlt: "Steele Packable Parka",
                catogry1: "allmens",
                catogry2: "jackets",
            },

            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-uaj-charcoal_1800x1800.jpg?v=1497280489",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-uaj-olive2_360x.jpg?v=1497280489",
                name: "The Ultimate American Jacket",
                price: "$598",
                imageAlt: "The Ultimate American Jacket",
                catogry1: "allmens",
                catogry2: "jackets",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-coastline-grey_360x.jpg?v=1497281749",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-coastline-grey_360x.jpg?v=1497281749",
                name: "Coastline Tee",
                price: "$36",
                imageAlt: "Coastline Tee",
                catogry1: "allmens",
                catogry2: "",
            },

            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-bridgemountain-oak_1800x1800.jpg?v=1518538418",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-bridgemountain-navy1_175cbccb-69eb-4cc8-a81a-e64e73171986_360x.jpg?v=1518538418",
                name: "Bridge Mountain Tee",
                price: "$36",
                imageAlt: "Bridge Mountain Tee",
                catogry1: "allmens",
                catogry2: "",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-holston-tan_1800x1800.jpg?v=1497281240",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-holstonshort-tan2_360x.jpg?v=1497281249",
                name: "Holston Short",
                price: "$62",
                imageAlt: "Holston Short",
                catogry1: "allmens",
                catogry2: "shorts",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-scallopboardshort-backwater-orange_1800x1800.jpg?v=1497280753",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-scallopboardshort-backwater-navy1_360x.jpg?v=1497280766",
                name: "Backwater Scallop Boardshorts",
                price: "$68",
                imageAlt: "Backwater Scallop Boardshorts",
                catogry1: "allmens",
                catogry2: "boardshorts",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-scallopboardshort-ridgedmountains-orange_360x.jpg?v=1497280849",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-scallopboardshort-ridgedmountains-orange_360x.jpg?v=1497280849",
                name: "Ridged Mountains Scallop Boardshorts",
                price: "$78 $68",
                banner: "SAVE $10",
                bannerColor: "bg-[#DA3217]",
                imageAlt: "Ridged Mountains Scallop Boardshorts",
                catogry1: "allmens",
                catogry2: "sale" && "boardshorts",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-forest_54ff4583-4d3e-4f1d-ab10-8178d15afca3_1800x1800.jpg?v=1574090392",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_055da990-b399-4d53-a5c6-fb326eb55124_360x.jpg?v=1574090392",
                name: "Adventure Mobile Gary Pullover",
                price: "$58",
                imageAlt: "Adventure Mobile Gary Pullover",
                catogry1: "allmens",
                catogry2: "",
                availableColours: ["bg-[#B8BBC5]", "bg-[#5A746D]"]
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/w-chelandress-teal1_1800x1800.jpg?v=1497277984",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/w-chelandress-teal2_360x.jpg?v=1497277984",
                name: "Chelan Dress",
                price: "$108 $88",
                banner: "SAVE $20",
                bannerColor: "bg-[#DA3217]",
                imageAlt: "Adventure Mobile Gary Pullover",
                catogry2: "sale",
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/w-grafton-blue1_1800x1800.jpg?v=1497277701",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/w-grafton-blue2_360x.jpg?v=1497277701",
                name: "Grafton Pant",
                price: "$98 $78",
                banner: "SAVE $20",
                bannerColor: "bg-[#DA3217]",
                imageAlt: "Grafton Pant",
                catogry2: "sale",
            },
        ],
    },
    {
        homeImageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/collections/womens-edited_1800x.jpg?v=1500224178",
        homeAltText: "Women",
        catogry: "allwomens",
        NavigationData: {
            catogry: "All women",
            catogryToShow: "allwomans",
            labels: [
                {
                    label: "Dresses",
                    catogry: "dresses",
                },
                {
                    label: "Jackets",
                    catogry: "jackets",
                },
                {
                    label: "Shirts",
                    catogry: "shirts",
                },
                {
                    label: "PantsPants",
                    catogry: "pantspants",
                },
            ],
        },
        productData: [
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/products/w-adventuremobilepullover-olive1_1800x1800.jpg?v=1497278429",
                imageUrl2: "https://cdn.shopify.com/s/files/1/2091/0251/products/w-adventuremobilepullover-olive3_360x.jpg?v=1497278437",
                name: "Adventure Mobile Terry Pullover",
                price: "$58",
                imageAlt: "allmens",
                catogry1: "allwomans",
                catogry2: "shirts",
            }
        ]
    },
]