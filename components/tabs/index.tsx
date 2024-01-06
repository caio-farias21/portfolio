import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HomeTab from "./Home"
import AcademicTab from "./Academic"
import WorkTab from "./Work"
import NewsTab from "./News"
import ContactTab from "./Contact"

export default function IndexTab() {
    return (
        <Tabs defaultValue={"home"} className="w-full h-full">
            <div className="lg:px-20 px-10 pt-14">
                <TabsList>
                    <TabsTrigger value="home" className="font-bold">Home</TabsTrigger>
                    <TabsTrigger value="academic" className="font-bold">Academic</TabsTrigger>
                    <TabsTrigger value="work" className="font-bold">Work</TabsTrigger>
                    <TabsTrigger value="news" className="font-bold hidden lg:block">News</TabsTrigger>
                    <TabsTrigger value="contact" className="font-bold">Contact</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="home"><HomeTab /></TabsContent>
            <TabsContent value="academic"><AcademicTab /></TabsContent>
            <TabsContent value="work"><WorkTab /></TabsContent>
            <TabsContent value="news"><NewsTab /></TabsContent>
            <TabsContent value="contact"><ContactTab /></TabsContent>
        </Tabs>
    )
}