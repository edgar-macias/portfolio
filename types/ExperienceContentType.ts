import { StaticImport } from "next/dist/shared/lib/get-img-props"


export type ExperienceContentType = {
    path:string | StaticImport,
    title: string,
    description:string
}