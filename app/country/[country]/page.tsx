import { notFound } from 'next/navigation'
import { CountryDetailWrapper } from '@/components/country-detail-wrapper'
import { countriesData } from '@/lib/countriesData'
import { Metadata } from 'next'

interface PageProps {
  params: { country: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const countryCode = params.country.toUpperCase()
  const countryData = countriesData.find(country => country.code === countryCode)

  if (!countryData) {
    return {
      title: 'Country Not Found',
    }
  }

  return {
    title: `${countryData.country} - Cookie Rules`,
    description: `Cookie rules and regulations for ${countryData.country}`,
  }
}

export default function CountryPage({ params }: PageProps) {
  const countryCode = params.country.toUpperCase()
  const countryData = countriesData.find(country => country.code === countryCode)

  if (!countryData) {
    notFound()
  }

  const formattedCountryData = {
    ...countryData,
    name: countryData.country,
    implementingLegislation: countryData.legislation,
    supervisoryAuthority: countryData.authority,
    approachToAnalyticalCookies: countryData.approach
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CountryDetailWrapper country={formattedCountryData} />
    </div>
  )
}
