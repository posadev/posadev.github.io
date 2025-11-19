import {Card, CardFooter} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Speech} from "lucide-react";
import React from "react";

const SessionCard = ({session}) => {
  return (
      <Card className="py-8 px-6 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-alternative-700">
              Charla
          </h2>
          <h3 className="text-2xl text-gray-700 font-semibold">
              {session.title}
          </h3>
          <span className="text-lg text-primary-600 font-semibold">Descripción</span>
          <p className="text-lg text-gray-700">{session.description}</p>
          <CardFooter className="p-0">
              <Badge variant="default" className="flex gap-2"><Speech/> Track: {session.category}</Badge>
          </CardFooter>
      </Card>
  )
}

export default SessionCard