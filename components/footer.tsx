'use client'

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <Card className="mt-auto border-t">
      <footer className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="mb-2 sm:mb-0">©2024 Frank de Vries</p>
          <div className="h-px w-full sm:w-px sm:h-4 bg-border sm:mx-4 my-2 sm:my-0" />
          <a
            href="https://www.linkedin.com/in/devriesfr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary transition-colors duration-200"
          >
            LinkedIn
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </footer>
    </Card>
  )
}