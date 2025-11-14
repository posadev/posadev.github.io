import Sponsor from "@/components/Sponsor.tsx";
import React from "react";
import background from "@/img/background_blue.png";

const SponsorsByTier = ({sponsors}) => {
    const diamondSponsors = sponsors.filter(sponsor => sponsor.type === "diamond");
    const goldSponsors = sponsors.filter(sponsor => sponsor.type === "gold");
    const silverSponsors = sponsors.filter(sponsor => sponsor.type === "silver");
    const bronzeSponsors = sponsors.filter(sponsor => sponsor.type === "bronze");

  return (
      <section>
          <article className="flex flex-col justify-center items-center md:py-10">
              <h2 className="text-4xl font-bold gap-4 hidden md:flex"><span aria-hidden={true}>💎</span>Diamante <span aria-hidden={true}>💎</span></h2>
                  {diamondSponsors.map((sponsor) => (
                      <Sponsor key={sponsor.id} sponsor={sponsor} />
                  ))}
          </article>
          {
                goldSponsors.length > 0 && <div style={{ backgroundImage: `url(${background})` }} className="h-10 md:h-20 bg-cover bg-center flex justify-center items-center">
                </div>
          }
          <article className="flex flex-col items-center justify-center py-10">
                <h2 className="text-4xl font-bold hidden md:flex gap-4 pt-10"><span aria-hidden={true}>⭐</span>Oro<span aria-hidden={true}>⭐</span></h2>
              {goldSponsors.map((sponsor) => (
                  <Sponsor key={sponsor.id} sponsor={sponsor} />
              ))}
          </article>
          {
                silverSponsors.length > 0 && <div style={{ backgroundImage: `url(${background})` }} className="h-10 md:h-20 bg-cover bg-center flex justify-center items-center">
                </div>
          }
          <article className="py-10">
              <div className="relative flex justify-center items-center">

                  <h2 className="text-4xl font-bold hidden md:flex justify-center items-center gap-4 pt-10">

<span
    className="
    inline-block
    bg-[linear-gradient(to_bottom,_#e2e2e2,_#b4b7bc,_#6b6f75,_#3b3e43)]
    bg-clip-text
    text-transparent
    [text-shadow:0_0_5px_rgba(255,255,255,0.8)]
    text-5xl
  "
>
  ✦
</span>


                      Plata
                      <span
                          className="
    inline-block
    bg-[linear-gradient(to_bottom,_#e2e2e2,_#b4b7bc,_#6b6f75,_#3b3e43)]
    bg-clip-text
    text-transparent
    [text-shadow:0_0_5px_rgba(255,255,255,0.8)]
    text-5xl
  "
                      >
  ✦
</span>


                  </h2>
              </div>

              {silverSponsors.map((sponsor) => (
                  <Sponsor key={sponsor.id} sponsor={sponsor}/>
              ))}
          </article>
          {
              bronzeSponsors.length > 0 && <div style={{backgroundImage: `url(${background})` }} className="h-10 md:h-20 bg-cover bg-center flex justify-center items-center">
              </div>
          }
          {
                bronzeSponsors.length > 0 && (
                  <article className="py-10">
                      <h2 className="text-4xl font-bold hidden md:flex justify-center items-center gap-4"><span aria-hidden={true}>🖥</span>Virtual<span aria-hidden={true}>🖥</span></h2>
                      {bronzeSponsors.map((sponsor) => (
                          <Sponsor key={sponsor.id} sponsor={sponsor} />
                      ))}
                  </article>
              )
          }
      </section>
  )
}
export default SponsorsByTier;