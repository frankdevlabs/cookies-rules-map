import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const legendItems = [
  { color: "bg-red-500", label: "Consent Required for Analytical Cookies" },
  { color: "bg-orange-400", label: "Limited Exceptions for Analytical Cookies with Low Impact" },
  { color: "bg-gray-300", label: "No Data Available" },
]

export function Legend() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Legend</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {legendItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div
                className={`w-4 h-4 ${item.color} border border-gray-300 shadow-sm`}
                aria-hidden="true"
              />
              <span className="text-sm text-gray-700">{item.label}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}