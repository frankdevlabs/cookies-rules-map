import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About This Application</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Purpose</CardTitle>
            <CardDescription>Understanding EEA Cookie Rules</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This application provides an overview of how each country in the European Economic Area (EEA) has implemented the ePrivacy Directive, with a specific focus on the handling of analytical cookies. Our goal is to help website owners, developers, and privacy professionals navigate the complex landscape of cookie regulations across the EEA. Please note that the information presented here has been researched using ChatGPT, and while we strive for accuracy, we cannot guarantee the completeness or correctness of all details.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Country-specific information on cookie regulations</li>
              <li>Focus on analytical cookie requirements</li>
              <li>Easy-to-understand summaries of each country&apos;s approach</li>
              <li>Regular updates to reflect changes in legislation</li>
            </ul>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <h2 className="text-2xl font-semibold mb-4">Acknowledgments and References</h2>
        <Card>
          <CardHeader>
            <CardTitle>Sources and Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We would like to acknowledge the following sources and contributors that have informed this application:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>ChatGPT, an AI language model used for research and information gathering</li>
              <li>European Data Protection Board (EDPB) guidelines</li>
              <li>National data protection authorities of EEA countries</li>
              <li>Open-source contributors to our codebase</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Please be aware that while we&apos;ve used ChatGPT to assist in our research, the information provided may not be exhaustive or up-to-date. We recommend verifying critical details with official sources or legal professionals before making any decisions based on this information.
            </p>
          </CardContent>
        </Card>
      </div>
  )
}
