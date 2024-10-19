"use client"

import React, { useState } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import * as Tooltip from '@radix-ui/react-tooltip'
import { useRouter } from "next/navigation"

// You'll need to download this JSON file and place it in your public folder
const geoUrl = "/europe.json"

type CountryData = {
  country: string
  code: string
  legislation: string
  authority: string
  approach: string
  color: string
}

type CountryMapProps = {
  countriesData: CountryData[]
}

export function CountryMap({ countriesData }: CountryMapProps) {
  const [tooltipContent, setTooltipContent] = useState("")
  const router = useRouter()

  const handleCountryClick = (countryName: string) => {
    const countryData = countriesData.find(
      (country) => country.country === countryName
    )
    console.log(countryData)
    if (countryData) {
      router.push(`/country/${countryData.code.toLowerCase()}`)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tooltip.Provider>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-10.0, -53.0, 0],
            scale: 1200,
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.NAME || geo.properties.name
                const countryData = countriesData.find(
                  (country) => country.country === countryName || country.code === geo.properties.ISO_A2
                )
                return (
                  <Tooltip.Root key={geo.rsmKey}>
                    <Tooltip.Trigger asChild>
                      <Geography
                        geography={geo}
                        fill={countryData ? countryData.color : "#E0E0E0"}
                        stroke="#FFFFFF"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", opacity: 0.8 },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={() => {
                          const content = countryData
                            ? `${countryData.country}\n${countryData.approach}`
                            : countryName
                          setTooltipContent(content)
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("")
                        }}
                        onClick={() => handleCountryClick(countryName)}
                        tabIndex={0}
                        role="button"
                        aria-label={`View details for ${countryName}`}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            handleCountryClick(countryName)
                          }
                        }}
                      />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="max-w-xs p-2 text-sm bg-white border border-gray-200 rounded shadow-md"
                        sideOffset={5}
                      >
                        {tooltipContent.split('\n').map((line, index) => (
                          <div key={index} className={index === 0 ? "font-semibold" : "mt-1 text-xs"}>
                            {line}
                          </div>
                        ))}
                        <Tooltip.Arrow className="fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                )
              })
            }
          </Geographies>
        </ComposableMap>
      </Tooltip.Provider>
    </div>
  )
}
