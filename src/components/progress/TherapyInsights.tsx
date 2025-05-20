
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const insights = [
  {
    id: 1,
    category: "Mood Patterns",
    insight: "Your mood tends to improve significantly in the afternoon compared to mornings.",
    relevance: "High",
    date: "2 days ago",
  },
  {
    id: 2,
    category: "Communication",
    insight: "You've been more engaged in community discussions this week.",
    relevance: "Medium",
    date: "5 days ago",
  },
  {
    id: 3,
    category: "Coping Strategies",
    insight: "Deep breathing exercises appear to effectively reduce your anxiety levels.",
    relevance: "High",
    date: "1 week ago",
  },
  {
    id: 4,
    category: "Thought Patterns",
    insight: "We've identified fewer instances of catastrophizing in your recent check-ins.",
    relevance: "Medium",
    date: "2 weeks ago",
  },
];

export function TherapyInsights() {
  const getBadgeVariant = (relevance: string) => {
    switch (relevance.toLowerCase()) {
      case "high":
        return "bg-mindful-100 text-mindful-800 hover:bg-mindful-100";
      case "medium":
        return "bg-therapy-100 text-therapy-800 hover:bg-therapy-100";
      default:
        return "bg-muted text-muted-foreground hover:bg-muted";
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Therapy Insights</CardTitle>
        <CardDescription>AI-generated observations from your sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className={getBadgeVariant(insight.relevance)}>
                  {insight.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{insight.date}</span>
              </div>
              <p className="text-sm">{insight.insight}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
