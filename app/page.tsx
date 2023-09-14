import ModeToggle from "./dark-theme";
import AvatarComp from "@/components/AvatarComp";
import { Separator } from "@/components/ui/separator";
import IndexTab from "@/components/tabs";
import { cn } from "@/lib/utils";
import Contacts from "@/components/Contacts";
import { Button } from "@/components/ui/button";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon
} from '@radix-ui/react-icons'
import Link from "next/link";

const LINKS = {
  GITHUB: "https://github.com/caio-farias21",
  LINKEDIN: "https://www.linkedin.com/in/caio-pereira-farias-359b46245/"
}

const TopDotsDetail = () => {
  return (
    <div className="flex gap-1">
      <div className="border-8 border-lightGreen w-16 rounded-full"></div>
      <div className="rounded-full border-8 border-lightGreen" ></div>
      <div className="rounded-full border-8 border-lightGreen" ></div>
    </div>
  )
}

const SocialMedias = () => {
  return (
    <div className="flex space-x-3">
      <Button variant="secondary" size="icon" asChild>
        <Link href={LINKS.GITHUB}><GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" /></Link>
      </Button>
      <Button variant="secondary" size="icon" asChild>
        <Link href={LINKS.LINKEDIN}><LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" /></Link>
      </Button>
    </div>
  )
}

const DetailWrapper = ({ ...props }) => {
  return (
    <div className={cn("absolute mx-6 my-5", props.className)}>
      {props.children}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="h-full flex justify-center items-center bg-lightGreen">
      <div className="w-[1350px] lg:max-h-[620px] h-full lg:flex lg:flex-row relative shadow-2xl">
        <div className="lg:basis-1/4 relative lg:rounded-s-lg px-12 py-20 bg-darkGreen">
          <DetailWrapper className="top-0 start-0"><TopDotsDetail /></DetailWrapper>
          <DetailWrapper className="bottom-0 start-0"><ModeToggle /></DetailWrapper>
          <DetailWrapper className="bottom-0 end-0"><SocialMedias /></DetailWrapper>
          <AvatarComp />
          <Separator className="h-1 rounded-full mb-5 bg-lightGreen" />
          <Contacts />
        </div>
        <div className="lg:basis-3/4 lg:rounded-e-lg pb-20 bg-bege dark:bg-neutral-800">
          <IndexTab />
        </div>
      </div>
    </div>
  )
}