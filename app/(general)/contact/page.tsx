import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['Contact Page','Fchagas']
   
   };

export  default function ContactPage() {
    return (
        <>
            <span className="text-7xl">
                Contact Page
            </span>
        </>
    )
}
