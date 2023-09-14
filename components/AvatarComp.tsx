import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarComp() {
    return (
        <div className="mb-5 text-center">
            <div className="px-14 mb-3">
                <Avatar className="w-full h-full aspect-square">
                    <AvatarImage src="https://avatars.githubusercontent.com/caio-farias21" />
                    <AvatarFallback>CF</AvatarFallback>
                </Avatar>
            </div>
            <div className="font-semibold text-bege text-xl leading-none">Caio P. Farias</div>
            <div className="text-md text-grey font-semibold leading-none">Backend Developer</div>
        </div>
    )
}