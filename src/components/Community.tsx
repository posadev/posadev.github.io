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
      <Card className="h-full flex md:flex-row flex-col items-center gap-4 border-0 bg-transparent shadow-none">
          <a
              className="text-white bg-alternative-700 rounded-3xl w-full max-w-80 min-h-52 flex flex-col justify-center items-center overflow-hidden p-4"
              href={community.link}
              target="_blank"
              style={{ cursor: "pointer" }}
          >
              <img
                  src={community.image}
                  alt={community.name}
                  className="h-24 object-contain mb-2.5"
              />
              <p className="text-center">{community.name}</p>
          </a>

          <CardContent className="flex flex-col gap-4 items-start">
              <CardDescription className="text-xl whitespace-pre-line">
                  {community.description}
              </CardDescription>
              <div className="flex flex-row justify-end gap-4 text-alternative-500">
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