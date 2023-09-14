import { BookOpen, GraduationCap, ExternalLink } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function AcademicTab() {
    const academic = [
        {
            institution: "Instituto Federal Goiano",
            course: "Information Technology",
            start: 2020,
            end: 2022,
            icon: BookOpen
        },
        {
            institution: "Universidade Federal de Goiás",
            course: "Computer Science",
            start: 2023,
            end: "moment",
            icon: GraduationCap
        },
    ]

    const certificates = [
        {
            name: "CS50’s Introduction to Programming with Python",
            institution: "Harvard University",
            imageName: "harvard.svg",
            alt: "harvard logo",
            link: "https://certificates.cs50.io/975690eb-d7b5-4837-8bc9-c642eb64a414.pdf?size=letter"
        },
        {
            name: "CS50’s Introduction to Computer Science",
            institution: "Harvard University",
            imageName: "harvard.svg",
            alt: "harvard logo",
            link: "https://certificates.cs50.io/82cf79da-496f-456e-9833-490b7e63924d.pdf?size=letter"
        },
    ]

    return (
        <>
            <div className="lg:px-20 px-10 pt-5">
            <div className='mb-16'>
                <h1 className='font-bold text-Cstone text-3xl mb-5'>Academic Education</h1>

                {academic.map(item => {
                    const Icon = item.icon
                    return (
                        <div className="flex items-center space-x-4 text-sm mb-5" key={item.course}>
                            <Icon className='w-6 h-6' />
                            <Separator orientation="vertical" className='w-1 h-5 rounded-full bg-lightGreen' />
                            <div>
                                <h4 className="text-md leading-none font-bold tracking-normal">{item.institution}</h4>
                                <p className="text-xs font-bold font-mono tracking-normal text-stone-secondary mb-1">{item.course}</p>
                                <p className="text-xs font-bold font-mono tracking-normal text-stone-secondary">{item.start} - {item.end}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

                <h1 className='font-bold text-Cstone text-3xl mb-5'>Certificates</h1>

                {certificates.map(item => {
                    return (
                        <div className='flex gap-4 items-center mb-5 lg:w-7/12 w-full' key={item.name}>
                        <Image src={`/${item.imageName}`} width={30} height={30} alt={item.alt} loading='lazy' className='select-none'/>
                        <Separator orientation="vertical" className='w-1 h-5 rounded-full bg-lightGreen' />
                        <div>
                            <span className='font-bold font-mono leading-none text-xs tracking-normal'>{item.name}</span>
                            <p className="leading-none text-xs font-bold font-mono tracking-normal text-stone-secondary">{item.institution}</p>
                        </div>
                        <Button variant="default" size="icon" className='ms-auto aspect-square' asChild>
                            <Link href={item.link}>
                                <ExternalLink className='w-4 h-4' />
                            </Link>
                        </Button>
                </div>
                    )
                })}
            </div>
        </>
    )
}