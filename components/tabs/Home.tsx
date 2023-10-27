import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Carousel from '@/components/Carousel'

export default function HomeTab() {
    return (
        <>
            <div className="lg:px-20 px-10 pt-5">
                <div className="mb-3 lg:text-5xl text-3xl font-medium">
                    <div>Hello, I&apos;m</div>
                    <div>a <span className="font-bold">Backend</span> Developer</div>
                </div>

                <div className="w-1/2 flex items-center gap-3 font-medium mb-3">
                    <div className="font-bold font-mono">Brazil</div>
                    <Image className="rounded" src="/Flag_of_Brazil.svg" width="20" height="11" alt="brazil flag" loading="lazy" />
                    <Separator className="h-2 rounded-full bg-stone-500" />
                </div>

                <div className="font-medium lg:w-1/2 text-sm mb-10">I&apos;m a Computer Science student who really enjoys solving problems and create software solutions 🤖</div>

                <h1 className="text-3xl font-bold">Portfolio</h1>
            </div>
            <Carousel />
        </>
    )
} 
