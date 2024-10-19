'use client'

import { CountryDetail } from './country-detail'

interface CountryData {
  name: string
  implementingLegislation: string
  supervisoryAuthority: string
  approachToAnalyticalCookies: string
}

interface CountryDetailWrapperProps {
  country: CountryData
}

export function CountryDetailWrapper({ country }: CountryDetailWrapperProps) {
  return <CountryDetail country={country} />
}
