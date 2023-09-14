"use client"
import {
    CircleIcon,
    StarIcon,
    StarFilledIcon
  } from "@radix-ui/react-icons"
  
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link"
import { cn } from "@/lib/utils"
  
  interface GithubCardProps {
    name: string;
    description: string | null;
    stars: number | undefined;
    language: string | null | undefined;
    link: string;
    updatedAt: string;
  }

  const monthToString = (month: string) => {

    const months: any = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    }

    if (!Object.keys(months).includes(month)) {
      return "January"
    }

    return months[month]
  }
  
  export default function GithubCard({ name, description, stars, language, link, updatedAt }: GithubCardProps) {

    const starButtonHandler = (e: any): void => {
      const old_stars = localStorage.getItem("stars")?.split(",") as any
      if (!old_stars) {
        const stars = [] as any

        stars.push(name)
        localStorage.setItem("stars", stars)
        return
      }
  
      else if (!old_stars.includes(name)) {
        old_stars.push(name)
        localStorage.setItem("stars", old_stars)
      }
    }

    const languageColors: any = {
      typescript: "sky-400",
      javascript: "amber-600",
      html: "emerald-700",
      python: "fuchsia-800",
      c: "yellow-600",
      default: "teal-900"
    }
    const color = language ? (languageColors[language.toLocaleLowerCase()] ? languageColors[language.toLocaleLowerCase()] : languageColors["default"] ) : languageColors["default"]

    let starred = localStorage.getItem("stars")?.split(",")
    if (!starred) starred = []

    const StarIconTag = starred.includes(name) ? StarFilledIcon : StarIcon

    return (
    <Link href={link}>
      <Card className="shadow-lg dark:shadow-transparent shadow-gray-350 hover:scale-105 hover:border-stone-400 transition-transform">
        <div className="text-sky-400 text-amber-600 text-emerald-700 text-fuchsia-800 text-yellow-600 text-teal-900 hidden"></div>
        <CardHeader className="grid grid-cols-[1fr_40px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary-foreground">
              <Button variant="secondary" className="px-3 shadow-none" name={name} onClick={starButtonHandler}
              >
                <StarIconTag className={cn("h-4 w-4", StarIconTag === StarFilledIcon ? "text-yellow-500" : "")} />
              </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            {language &&
                <div className="flex items-center">
                <CircleIcon className={`mr-1 h-3 w-3 fill-${color} text-${color}`} />
                {language}
                </div>
            }
            <div className="flex items-center">
              <StarIcon className="mr-1 h-3 w-3" />
              {stars}
            </div>
            <div>Updated {monthToString(updatedAt.substring(5, 7))} {updatedAt.substring(0, 4)}</div>
          </div>
        </CardContent>
      </Card>
     </Link>
    )
  }