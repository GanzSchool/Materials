import {notFound} from "next/navigation";
import {compileMDX} from "next-mdx-remote/rsc";
import StudentShell from "@/components/StudentShell";
import {mdxComponents} from "@/components/MdxComponents";
import {extractToc,findMaterialBySlug,getCatalog,getMaterialSource} from "@/lib/catalog";
export const dynamic="force-dynamic";
export default async function MaterialPage({params}:{params:Promise<{slug:string[]}>}){const{slug}=await params;const catalog=await getCatalog();const material=findMaterialBySlug(catalog,slug);if(!material)notFound();const source=await getMaterialSource(material);const toc=extractToc(source);const{content}=await compileMDX({source,components:mdxComponents,options:{parseFrontmatter:true,blockJS:false,blockDangerousJS:true}});return <StudentShell catalog={catalog} active={material} toc={toc}>{content}</StudentShell>}
