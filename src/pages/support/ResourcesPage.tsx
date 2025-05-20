
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, FileText, Users } from "lucide-react";

const resources = [
  {
    name: "CBT Techniques for Students",
    type: "Guide",
    description: "A structured, cognitive-behavioral approach for managing academic anxiety and stress.",
    url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/understanding-cbt/",
    icon: FileText,
  },
  {
    name: "Sleep Hygiene in Young Adults",
    type: "Research Article",
    description: "Peer-reviewed evidence-based practices to improve sleep quality in student populations.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6261294/",
    icon: BookOpen,
  },
  {
    name: "Mindfulness Audio Exercises",
    type: "Self-help Audio",
    description: "Practices to enhance focus, calm, and resilience, curated by clinical psychologists.",
    url: "https://www.mindful.org/audio-resources-for-mindfulness-meditation/",
    icon: BookOpen,
  },
  {
    name: "Peer Support: What to Expect",
    type: "Article",
    description: "An evidence-based overview of peer support models for stress, emotion, and academic pressure.",
    url: "https://www.mentalhealth.org.uk/explore-mental-health/publications/peer-support-mental-health",
    icon: Users,
  },
  {
    name: "Digital Safety & Anonymity",
    type: "Policy Info",
    description: "Explanation of privacy measures, data handling, and anonymity best practices for our platform.",
    url: "/privacy-policy",
    icon: FileText,
  },
  {
    name: "Comprehensive Emergency Contacts",
    type: "Directory",
    description: "List of national and international crisis lines for immediate, confidential support.",
    url: "https://en.wikipedia.org/wiki/List_of_suicide_crisis_lines",
    icon: Users,
  },
];

export default function ResourcesPage() {
  return (
    <PageLayout title="Formal Support Resources">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Formal Resources</CardTitle>
            <CardDescription>
              All resources below are selected for relevance to students in distress, academic stress, or mental health crises. These references are educational, actionable, and evidence-based.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Resource</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resources.map((res) => (
                  <TableRow key={res.name}>
                    <TableCell className="flex items-center gap-2">
                      <res.icon className="h-5 w-5 text-primary" aria-label="resource icon" />
                      {res.name}
                    </TableCell>
                    <TableCell>{res.type}</TableCell>
                    <TableCell>{res.description}</TableCell>
                    <TableCell>
                      {res.url.startsWith("http") ? (
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Access</a>
                      ) : (
                        <a href={res.url} className="underline text-blue-600 hover:text-blue-800">View</a>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
