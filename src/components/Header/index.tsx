'use client'

import { useState } from "react";
import "./header.css";
import { FaInstagram, FaBars } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";
import { RiPinterestLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`header fixed top-0 left-0 w-full z-50 bg-[#171717] backdrop-blur-sm md:pt-2 md:pb-2`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 text-white relative">

        <div className="hidden md:flex gap-4 text-xl">
          <a href="https://www.instagram.com/danielespindolaimobiliaria" target="_blank" aria-label="Instagram" className="hover:text-gray-400 transition ">
            <FaInstagram className="text-gray-200" size={30} />
          </a>
          <a href="#" aria-label="Pinterest" className="hover:text-gray-400 transition">
            <RiPinterestLine className="text-gray-200" size={30} />
          </a>
          <a href="https://www.facebook.com/p/Daniel-Esp%C3%ADndola-Investimentos-Imobili%C3%A1rios-61567441977530/" target="_blank" aria-label="Facebook" className="hover:text-gray-400 transition">
            <LiaFacebookSquare className="text-gray-200" size={30} />
          </a>
        </div>

        <img loading="lazy" src="/images/logo/svg/horzt branco.svg" alt="Logo de Daniel Espindola" className="h-8 md:h-10" />

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer text-2xl hover:text-gray-400 transition"
            aria-label="Abrir menu"
          >
            <FaBars />
          </button>

          {menuOpen && (
            <ul
              className="absolute right-0 mt-3 w-48 bg-[#1f1f1f] border border-gray-700 rounded-lg shadow-lg overflow-hidden animate-fadeIn"
              onMouseLeave={() => setMenuOpen(false)}
            >
              {[
                { href: "#hero", label: "Home" },
                { href: "#featured-properties", label: "Destaques" },
                { href: "#team", label: "Equipe" },
                { href: "#daniel-espindola", label: "Daniel Espindola" },
                { href: "#contact", label: "Contato" },
                { href: "/imoveis", label: "Imóveis" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
