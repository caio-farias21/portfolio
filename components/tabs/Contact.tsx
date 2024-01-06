"use client"

import TemplateTab from "./template";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactTab() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.location.href = `mailto:example@email.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <TemplateTab>
            <div className="mb-5">
                <h1 className='font-bold text-Cstone text-3xl'>Contact</h1>
                <p className="text-sm tracking-tight text-lightGreen">Give me a feedback, i will be happy to answer you!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 w-full lg:w-1/2">
                <Input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="bg-white" />
                <Textarea name="body" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Message" className="bg-white" rows={5} />
                <Button type="submit">
                    <Mail className="w-4 h-4 mr-2" />
                    Send
                </Button>
            </form>
        </TemplateTab>
    );
}