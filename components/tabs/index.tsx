import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HomeTab from "./Home"
import AcademicTab from "./Academic"

export default function IndexTab() {
    return (
        <Tabs defaultValue="home" className="w-full h-full">
            <div className="lg:px-20 px-10 pt-14">
                <TabsList>
                    <TabsTrigger value="home" className="font-bold">Home</TabsTrigger>
                    <TabsTrigger value="academic" className="font-bold">Academic</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="home"><HomeTab /></TabsContent>
            <TabsContent value="academic"><AcademicTab /></TabsContent>
        </Tabs>
    )
}