import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['Pricing Page','Fchagas']
   
   };

export  default function PricingPage() {
    return (
        <>
            <span className="text-7xl">
                Pricing Page
            </span>
        </>
    )
}
