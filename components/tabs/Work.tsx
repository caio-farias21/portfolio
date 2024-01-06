import { BookOpen, GraduationCap, ExternalLink } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import TemplateTab from './template'

type Work = {
    company: string
    title: string
    start: string
    end: string
    logo: string
}

export default function WorkTab() {
    const work = [
        {
            company: "Vozic",
            title: "Backend developer",
            start: "10.2023",
            end: "moment",
            logo: "vozic_logo.jpeg"
        }
    ] satisfies Array<Work>

    return (
        <TemplateTab>
            <div className='mb-16'>
                <h1 className='font-bold text-Cstone text-3xl mb-5'>Work Experience</h1>

                {work.map(item => {
                    const { company, title, start, end, logo } = item
                    return (
                        <div className="flex items-center space-x-4 text-sm mb-5" key={company + start}>
                            <Image src={`/${logo}`} width={50} height={50} alt={company + " logo"} loading='lazy' className='select-none rounded-md shadow-xl' />
                            <Separator orientation="vertical" className='w-1 h-5 rounded-full bg-lightGreen' />
                            <div>
                                <h4 className="text-md leading-none font-bold tracking-normal">{company}</h4>
                                <p className="text-xs font-bold font-mono tracking-normal text-stone-secondary mb-1">{title}</p>
                                <p className="text-xs font-bold font-mono tracking-normal text-stone-secondary">{start} - {end}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </TemplateTab>
    )
}