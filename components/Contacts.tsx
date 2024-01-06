"use client"
import { Separator } from '@/components/ui/separator'
import { EnvelopeClosedIcon, CodeIcon, Share2Icon } from '@radix-ui/react-icons'
import { BiLogoPython, BiLogoTypescript, BiLogoPhp, BiLogoNodejs } from 'react-icons/bi'
import LogoCLanguage from './custom-icons/LogoCLanguage'
import { BsCCircleFill } from 'react-icons/bs'
import { useToast } from "@/components/ui/use-toast"

const languages = [
    {
        language: "Python",
        icon: BiLogoPython
    },
    {
        language: "C/C++",
        icon: LogoCLanguage
    },
    {
        language: "Typescript",
        icon: BiLogoTypescript
    },
    {
        language: "Node",
        icon: BiLogoNodejs
    }
]

export default function Contacts() {
    const { toast } = useToast()

    return (
        <div className='mb-3'>

            <div className="flex mb-5 items-center space-x-4 text-sm">
                <EnvelopeClosedIcon className='w-6 h-6 text-white' />
                <Separator orientation="vertical" className='w-1 h-5 rounded-full bg-white' />
                <div>
                    <h4 className="text-md text-white leading-none font-bold tracking-normal">Email</h4>
                    <p className="text-xs font-bold text-neutral-400 font-mono tracking-normal">caiopereira221@gmail.com</p>
                </div>
            </div>

            <div className="flex mb-5 space-x-4 text-sm">
                <CodeIcon className='w-6 h-6 text-white' />
                <Separator orientation="vertical" className='h-5 w-1 rounded-full bg-white' />
                <div>
                    <h4 className="text-md text-white leading-none font-bold tracking-normal">Skills</h4>
                    <div className="text-xs font-medium text-neutral-400 mt-1 space-y-1">

                        {languages.map((item) => {
                            const Icon = item.icon
                            return (
                                <div className='flex ms-1 items-center' key={item.language}>
                                    <div className='flex items-center content-center'>
                                    <Icon className="w-6 h-6 text-white me-2" />
                                    </div>
                                    <span className='text-xs font-bold text-neutral-400 font-mono tracking-normal'>{item.language}</span>
                                </div>

                            )
                        })}

                    </div>
                </div>
            </div>
            <button title='share' type='button' onClick={() => {
                if (navigator.clipboard) {
                    try {
                        navigator.clipboard.writeText(window.location.href)
                        toast({ title: "Copy", description: "Successfully copied to your clipboard! 🥳" })
                    } catch {
                        toast({ title: "Copy", description: "Failed to copy to your clipboard! 😢" })
                    }
                    return
                }
                toast({ title: "Copy", description: "Function not suported! 😢" })
            }}>
                <div className="flex items-center space-x-4 text-sm">
                    <Share2Icon className='w-6 h-6 text-white' />
                    <Separator orientation="vertical" className='w-1 h-5 rounded-full bg-white' />
                    <div>
                        <h4 className="text-md text-white leading-none font-bold tracking-normal">Share</h4>
                    </div>
                </div>
            </button>

        </div>
    )
}