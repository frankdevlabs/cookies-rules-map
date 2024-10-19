'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

interface CountryData {
  name: string
  implementingLegislation: string
  supervisoryAuthority: string
  approachToAnalyticalCookies: string
}

interface CountryDetailProps {
  country: CountryData
}

export function CountryDetail({ country }: CountryDetailProps) {
  const router = useRouter()

  return (
    <>
      <Button
        variant="outline"
        onClick={() => router.back()}
        className="mb-6"
        aria-label="Back to map"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Map
      </Button>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{country.name}</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-300 rounded text-sm text-yellow-800">
        <strong>Disclaimer:</strong> The data presented in this map has been derived from ChatGPT and has not been legally validated. Please do not use this information to make legal decisions.
      </div>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-gray-500">Implementing Legislation</dt>
              <dd className="mt-1">{country.implementingLegislation}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Supervisory Authority</dt>
              <dd className="mt-1">{country.supervisoryAuthority}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-medium text-gray-500">Approach to Analytical Cookies</dt>
              <dd className="mt-1">{country.approachToAnalyticalCookies}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </>
  )
}
