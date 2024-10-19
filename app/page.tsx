import { CountryMap } from "@/components/country-map"
import { Legend } from "@/components/legend"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { countriesData } from "@/lib/countriesData"

export default function Page() {
  return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            EEA Cookie Rules for Analytical Cookies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <CountryMap countriesData={countriesData} />
              <Legend />
            </div>
          </CardContent>
      </Card>
  )
}