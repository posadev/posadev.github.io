import {ICommunity} from "@/types/types.ts";
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {FacebookIcon, Instagram, LinkedinIcon} from "lucide-react";
import XTwitter from "@/components/ui/x-twitter.tsx";
import TikTok from "@/components/ui/tiktok.tsx";

interface CommunityProps {
    community: ICommunity
}
const Community: React.FC<CommunityProps> = ({ community }) => {

  return (
      <Card className="h-full flex md:flex-row flex-col items-center gap-8 border-0 bg-transparent shadow-none w-full">
          <a
              className="bg-alternative-700 rounded-3xl w-full max-w-80 min-h-52 flex flex-col justify-center items-center p-4 transition-all duration-300"
              href={community.link}
              target="_blank"
          >
              <img
                  src={community.image}
                  alt={community.name}
                  className="min-w-24 max-h-52 object-contain mb-2.5 hover:scale-105 transition-transform duration-300"
              />
          </a>

          <CardContent className="flex flex-col items-start justify-center gap-1 p-0">
                  <h3 className="text-2xl text-primary-700 font-semibold">{community.name}</h3>
                  <p className="text-xl text-gray-500 line-clamp-5 md:line-clamp-none">
                      {community.description}
                  </p>
              <div className="flex flex-row justify-end gap-4 text-alternative-500 mt-2">
                  {
                      community.socials.facebook &&
                      <a href={community.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-alternative-400 transition-colors">
                          <FacebookIcon height={26} width={26}>
                                <title>Facebook</title>
                          </FacebookIcon>
                      </a>
                  }
                  {
                      community.socials.instagram &&
                      <a href={community.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-alternative-400 transition-colors">
                          <Instagram height={26} width={26}>
                              <title>Instagram</title>
                          </Instagram>
                      </a>
                  }
                  {
                      community.socials.twitter &&
                      <a href={community.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-alternative-400 transition-colors">
                          <XTwitter height={26} width={26}>
                              <title>Twitter</title>
                          </XTwitter>
                      </a>
                  }
                  { community.socials.linkedin &&
                      <a href={community.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-alternative-400 transition-colors">
                          <LinkedinIcon height={26} width={26}>
                              <title>Linkedin</title>
                          </LinkedinIcon>
                      </a>
                  }
                  {
                      community.socials.tikTok &&
                      <a href={community.socials.tikTok} target="_blank" rel="noopener noreferrer" className="hover:text-alternative-400 transition-colors">
                          <TikTok />
                      </a>
                  }
              </div>
          </CardContent>
      </Card>
  )
}
export default Community