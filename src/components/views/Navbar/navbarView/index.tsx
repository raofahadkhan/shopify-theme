"use client"
import { logo, logo2 } from "@/components/assets"
import Image from "next/image"
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci"
import { GrClose } from 'react-icons/gr';
import { NavbarItemType } from "@/components/typesandArrays/NavbarItems";
import { Jost } from 'next/font/google'
import { useEffect, useState, useContext } from "react"
import DropDownMenu from "./DropDownMenu";
import OffCanvasSidebarMobile from "./OffCanvasSidebarMobile";
import { subMenuType } from "@/components/typesandArrays/NavbarItems";
import Link from "next/link";
import { useRouter } from "next/router";
import CartSectoin from "./CartSectoin";
import { CartContext } from "@/components/shared/CartContext";

const inter = Jost({ subsets: ['latin'] })

interface typeofNavItems {
  navItem: Array<NavbarItemType>,
}

export default function NavbarView({ navItem }: typeofNavItems) {
  const { price, navbarcolor, setNavbarcolor }: any = useContext(CartContext);
  const [SearchBoxView, setSearchBoxView] = useState(false);
  const { reload, query } = useRouter();
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [opacityForScroll, setOpacityForScroll] = useState(100);
  const [isOpenCart, setOpenCart] = useState(false);

  const isBrowser = (): boolean => typeof window !== "undefined";

  useEffect(() => {
    return () => {
      if (window.scrollY >= 401) {
        if (!navbarcolor) {
          setOpacityForScroll(0);
        }
        window.setTimeout(() => {
          if (!navbarcolor) {
            setOpacityForScroll(100)
          }
        }, 10);
      }
    }
  }, [
    isBrowser() && window.scrollY >= 401
  ])

  if (isBrowser()) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 511) {
        setNavbarcolor(true);
      }else{
        setNavbarcolor(false);
      }
    })
  }

  return (
    <div>
      <div onClick={() => { setSidebar(false); setOpenCart(false); }} className={`${sidebar || isOpenCart ? "flex z-40 md:z-50" : "hidden"} flex w-full h-screen bg-black opacity-50 fixed inset-0 `}></div>
      <main className={`w-full py-4 bg-transparent ${navbarcolor ? `top-0 duration-500 bg-white fixed shadow-sm h-20 opacity-${opacityForScroll} z-40` : "bg-transparent absolute z-40"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className={` cursor-pointer`}>
            <Link href="/">
              {navbarcolor ? <Image src={logo2} alt="motion" /> :
                <Image src={logo} alt="motion" />
              }
            </Link>
          </div>
          <ul className={`hidden md:flex flex-wrap space-x-10 text-gray-100 ${navbarcolor ? "text-gray-900" : ""}`}>
            {navItem && navItem.map((item: { label: string, href?: string, dropdown: boolean, child?: Array<subMenuType> }, index: number) => (
              <div key={index + 700} className={`${item.label == "About" ? "relative" : ""} hover:border-b-0  border-white flex items-center cursor-pointer group ${item.child ? "hover:bg-white hover:text-black" : ""} pt-3 px-4 `}>
                <h4 className={`text-lg group-hover:border-b-[1px] pb-2 h-full ${item.label == "Theme features" ? "border-transparent" : " "} ${inter.className} `}>
                  <a href={item.href ? item.href : ""}>{item.label}</a>
                </h4>
                <div className="-mt-1">
                  {item.dropdown ? <RiArrowDropDownLine size={25} /> : ""}
                </div>
                <div className="z-50" >
                  <DropDownMenu item={item} navbarcolors={navbarcolor} />
                </div>
              </div>
            ))}
          </ul>
          <div className={`flex text-gray-100 ${navbarcolor && "text-gray-900"} space-x-6 sm:space-x-5`}>
            <div onClick={() => { setSearchBoxView(true); }}>
              <FiSearch className="cursor-pointer" size={25} />
            </div>
            <div onClick={() => { setSidebar(!sidebar) }}>
              <CgMenuLeftAlt className="block md:hidden cursor-pointer" size={30} />
            </div>
            <div onClick={() => { setOpenCart(true); setOpenCart(true); }}>
              <RiShoppingBagLine className="cursor-pointer" size={25} />
            </div>
          </div>
        </div>
        <OffCanvasSidebarMobile data={navItem} sidebar={sidebar} setSidebar={setSidebar} />
      </main>
      <div className={`${navbarcolor ? `top-0 fixed shadow-sm h-20 sm:h-20` : "relative top-0 h-20 sm:h-24"} ${SearchBoxView ? "visible" : "invisible"} overflow-hidden w-full z-50`}>
        <div className={`px-2 sm:px-12 ${SearchBoxView ? "traslate-y-0" : "-translate-y-36"} duration-700 absolute top-0 w-full bg-white ${navbarcolor ? `h-20 sm:h-20` : "h-20 sm:h-24"} z-50`}>
          <div className="flex flex-1 items-center h-full px-2">
            <form className="flex flex-1" action="/search" method="get" role="search">
              <button className="px-0 pr-3 sm:px-2"><CiSearch size={30} /></button>
              <input className="w-full focus:outline-0 px-2 text-2xl " type="search" placeholder="Search Our Store" />
            </form>
            <div className="cursor-pointer" onClick={() => { setSearchBoxView(false); }}>
              <GrClose size={19} />
            </div>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 py-3 sm:py-5 px-4 sm:px-8 h-screen z-50 bg-white ${isOpenCart ? "right-0 visible" : "-right-[520px] invisible"} transition-all duration-500`}>
        <div className="relative w-full h-full bg-white">
          <div className="flex item-center justify-center w-full py-4 border-b-2">
            <h2 className="text-3xl font-bold pr-32 text-gray-800">Cart</h2>
            <div className="pl-32 mt-3 cursor-pointer" onClick={() => { setOpenCart(false); setOpenCart(false); }}>
              <GrClose />
            </div>
          </div>
          <CartSectoin />
          <div className="space-y-4 w-full py-4 border-t-2 absolute bottom-0 left-0">
            <div className="w-full flex item-center justify-between items-center ">
              <h2 className="text-xl font-bold text-gray-800">SUBTOTAL</h2>
              <p>${price}</p>
            </div>
            <p className="text-xs">Shipping, taxes, and discount codes calculated at checkout.</p>
            <button className="w-full py-3 bg-black font-semibold text-white">Check out</button>
          </div>
        </div>
      </div>
    </div>
  )
}