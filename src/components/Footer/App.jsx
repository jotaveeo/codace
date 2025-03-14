import React from "react";
// import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[black] text-white py-8">
      <div className="container mx-auto px-4">
        {/* <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Sobre Nós</h5>
            <p className="text-gray-400 pr-6">
              Grupo para os amantes e aspirantes à programação! Dúvidas, códigos
              e muito café!
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Links Úteis</h5>
            <ul className="list-none">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Integrantes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-bold mb-2">Contato</h5>
            <p className="text-gray-400">Email: contato@coda.ce</p>
            <p className="text-gray-400">Telefone: (88) 99999-9999</p>
          </div>
        </div> */}

        <div className="border-t border-[#f5d119] mt-8 pt-4 text-center text-gray-400">
          <p>Copyright Coda.Ce &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
