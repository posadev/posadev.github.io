import {Button} from "@/components/ui/button.tsx";
import React from "react";
import {BriefcaseMedical, Download, Palette} from "lucide-react";
import Pantone from "@/components/media-kit/Pantone.tsx";
import {Card} from "@/components/ui/card.tsx";

const MediaKit = () => {
    return (
        <section className="p-8 md:p-20 min-h-screen flex flex-col gap-4 items-center justify-center text-center">
            <aside className="flex flex-col gap-4 items-center py-10 md:py-20 px-8 w-full">
                <BriefcaseMedical className="w-24 h-24 text-posadev-brightPink"/>
                <h1 className="text-3xl md:text-4xl gradient-text">Posadev Media Kit</h1>
                <p className="text-xl md:text-2xl lg:w-1/2 md:p-10">¡Bienvenido al Media Kit de Posadev! Este documento funge como una guía sobre el uso adecuado de nuestro logo para mantener la coherencia y preservar nuestra identidad de marca.
                </p>
                <a href="/img/posadev-media-kit.zip" className="md:w-96 lg:min-[400px]:" download>
                    <Button className="w-full py-6" >
                        Descarga todos nuestros assets
                    </Button>
                </a>
            </aside>
            <span className="w-full h-[1px] bg-posadev-brightPink mx-auto my-8 rounded-full "/>
            <section className="flex flex-col md:flex-row-reverse flex-wrap items-center justify-center gap-y-10 gap-x-20">
                <div className="flex flex-col items-center gap-10 md:gap-4 md:w-1/3">
                    <img src="../../img/posadev_logo_rojo_negro.png" alt="Posadev Logo Fondo Blanco" className="w-full h-auto"/>
                    <div className="flex flex-row justify-center gap-4 w-full">
                        <a href="/img/posadev_logo_rojo_negro.svg" download>
                            <Button  >
                                <Download/>
                                SVG
                            </Button>
                        </a>
                        <a href="/img/posadev_logo_rojo_negro.png" download>
                            <Button  >
                                <Download/>
                                PNG
                            </Button>
                         </a>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 md:gap-4 md:w-1/3">
                     <img src="../../img/posadev_logo_negro.png" alt="Posadev Logo" className="w-full h-auto"/>
                    <div className="flex flex-row gap-4 w-full justify-center">
                        <a href="/img/posadev_logo_negro.svg" download>
                            <Button  >
                                <Download/>
                                SVG
                            </Button>
                        </a>
                        <a href="/img/posadev_logo_negro.png" download>
                            <Button  >
                                <Download/>
                                PNG
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 md:gap-4 md:w-1/3">
                    <img src="../../img/posadev_logo_rojo_blanco.png" alt="Posadev Logo" className="w-full h-auto bg-black"/>
                    <div className="flex flex-row gap-4 justify-center w-full">
                        <a className="" href="/img/posadev_logo_rojo_blanco.svg" download>
                            <Button  >
                                <Download/>
                                SVG
                            </Button>
                        </a>
                        <a href="/img/posadev_logo_rojo_blanco.png" download>
                            <Button  >
                                <Download/>
                                PNG
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 md:gap-4 md:w-1/3">
                    <img src="/img/posadev_logo_blanco.png" alt="Posadev Logo" className="w-full h-auto bg-black"/>
                    <div className="flex flex-row gap-4 w-full justify-center">
                        <a href="/img/posadev_logo_blanco.svg" download>
                            <Button  >
                                <Download/>
                                SVG
                            </Button>
                        </a>
                        <a href="/img/posadev_logo_blanco.png" download>
                            <Button  >
                                <Download/>
                                PNG
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
            <span className="w-full h-[1px] bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto my-8 rounded-full "/>
            <section className="flex flex-col gap-4 items-center py-10 ">
                <h2 className="text-4xl text-primary-600">
                    Colores de la marca
                </h2>
                <p className="text-2xl w-[80%] my-4">
                    El logotipo de Posadev siempre debe aparecer en los colores designados para la marca.
                </p>
                <div className="flex md:flex-row flex-col gap-10">
                    <Pantone name="Bright Pink" hex="#FF0B55" color="bg-posadev-brightPink" colorCopy="text-white"/>
                    <Pantone name="Dark" hex="#000000" color="bg-black" colorCopy="text-white"/>
                    <Pantone name="White" hex="#FFFFFF" color="bg-white"/>
                </div>
                <p className="text-lg text-gray-700 font-semibold p-10">
                    **No modifique los colores ni aplique degradados.
                </p>
            </section>
        </section>
    );
};

export default MediaKit;