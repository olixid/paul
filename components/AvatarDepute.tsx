import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarDepute = ({ src }: { src: string }) => {
  return (
    <Avatar className="size-20">
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default AvatarDepute;
