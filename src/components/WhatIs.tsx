import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardInfo from "./CardInfo";
import Image from "next/image";
import Bg from "../../public/bg2.png";

const WhatIs = () => {
  return (
    <section className="relative">
      <Image
        src={Bg}
        alt="Bg"
        className="w-full h-full object-fill absolute -z-10"
      />
      <div className="font-geist grid md:grid-cols-2 gap-10 p-10 md:p-16 z-10 text-white">
        <div>
          <h1 className="font-bold text-xl sm:text-3xl md:text-5xl">
            {" "}
            ADAPTIVE COLLABORATION
          </h1>
          <h1 className="font-bold text-xl sm:text-3xl md:text-5xl">
            {" "}
            TO ENCOUNTER{" "}
          </h1>
          <h1 className="font-bold text-xl sm:text-3xl md:text-5xl">
            {" "}
            DIGITAL DISRUPTION
          </h1>
          <p className="mt-10 font-geistMono text-xs sm:text-sm md:text-base">
            {" "}
            Arkavidia merupakan acara IT tahunan yang diadakan oleh Himpunan
            Mahasiswa Informatika ITB. Dengan tema “Adaptive Collaboration to
            Encounter Digital Disruption”, Arkavidia 8.0 diharapkan akan lebih
            banyak individu sadar akan hak dan kewajibannya di dunia digital,
            sehingga dapat mewujudkan kemerdekaan digital bagi dirinya.
            Diharapkan dengan diadakannya acara ini, dapat memberikan manfaat
            bagi pelajar, civitas akademik, dan masyarakat umum seluruh
            Indonesia.{" "}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Carousel className="w-full max-w-[10rem] xs:max-w-[15rem] sm:max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="grid md:grid-cols-3 p-5 md:p-16 gap-10 z-10">
        <CardInfo
          title="412"
          description="PAST PARTICIPANTS"
          classname="bg-gradient-to-br from-[#2d0d7eee] to-[#0c233b]"
        />
        <CardInfo
          title="329"
          description="COMMITTEES"
          classname="bg-gradient-to-br from-[#5f2353ee] to-[#141516]"
        />
        <CardInfo
          title="69"
          description="PAST PARTNERS"
          classname="bg-gradient-to-br from-[#060606ee] to-[#0c4680]"
        />
      </div>
    </section>
  );
};

export default WhatIs;
