import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:{default:"Ganz Tananyag",template:"%s | Ganz Tananyag"},description:"Interaktív digitális tananyag a Ganz Ábrahám Technikum diákjainak."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="hu"><body>{children}</body></html>}
