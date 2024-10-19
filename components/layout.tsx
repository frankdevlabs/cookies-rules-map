import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <NavBar />
      </header>
      <main className="flex-1 mx-auto container py-6 md:py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}