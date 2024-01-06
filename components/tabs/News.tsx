import TemplateTab from "./template"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

type News = {
    title: string
    description: string
}

const news = [

] satisfies Array<News>

export default function NewsTab() {
    return (
        <>
            <TemplateTab>
                <h1 className='font-bold text-Cstone text-3xl mb-5'>News</h1>
                <div className="space-y-5 w-full">
                    {
                        news.length > 0
                            ? news.map(item => {
                                const { title, description, image } = item
                                return (
                                    <Card key={title} className="block shadow-lg dark:shadow-transparent shadow-gray-350 hover:scale-105 hover:border-stone-400 transition-transform w-full cursor-pointer">
                                        <CardContent className="space-y-2 mt-5">
                                            <h2 className="text-xl font-bold font-tight text-darkGreen">{title}</h2>
                                            <div className="flex space-x-3 text-sm text-muted-foreground">
                                                <div className="flex items-center">
                                                    {description}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })
                            : <p className="text-lg font-bold text-lightGreen">No news yet</p>
                    }
                </div>
            </TemplateTab>
        </>
    )
} 
