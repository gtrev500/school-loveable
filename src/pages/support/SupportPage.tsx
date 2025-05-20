
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function SupportPage() {
  return (
    <PageLayout title="Support">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Support Overview</CardTitle>
            <CardDescription>
              Access support suited for academic, emotional, and practical challenges. The options below are tailored for students and educational organizations seeking timely help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <BookOpen className="h-8 w-8 text-violet-600" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Resource Center</h3>
                  <p className="text-sm text-muted-foreground">
                    Access formal guides, scientific articles, and self-help materials vetted by professionals.
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/support/resources">Browse Resources</Link>
                </Button>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Users className="h-8 w-8 text-blue-500" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Community Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Engage with fellow students and peer advisors in a moderated setting. 
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/community">Join Community</Link>
                </Button>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Mail className="h-8 w-8 text-green-600" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Contact Licensed Therapist</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach out for private, professional support personalized to your needs.
                  </p>
                </div>
                <Button asChild>
                  <Link to="/therapy">Contact Therapist</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
