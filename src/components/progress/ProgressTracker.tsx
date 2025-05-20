
import { 
  ArrowUpCircle, 
  CheckCircle, 
  CircleDashed, 
  Calendar 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const goals = [
  {
    id: 1,
    title: "Complete daily mood check-ins",
    description: "Track your mood every day this week",
    progress: 85,
    status: "in-progress",
    dueDate: "3 days left",
  },
  {
    id: 2,
    title: "Practice mindfulness meditation",
    description: "10 minutes of meditation, 5 days a week",
    progress: 60,
    status: "in-progress",
    dueDate: "2 days left",
  },
  {
    id: 3,
    title: "Complete CBT worksheet",
    description: "Challenge negative thought patterns",
    progress: 100,
    status: "completed",
    dueDate: "Completed",
  },
  {
    id: 4,
    title: "Join a group therapy session",
    description: "Connect with others facing similar challenges",
    progress: 0,
    status: "not-started",
    dueDate: "Next week",
  },
];

export function ProgressTracker() {
  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-mindful-500" />;
      case "in-progress":
        return <ArrowUpCircle className="h-5 w-5 text-therapy-500" />;
      default:
        return <CircleDashed className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Therapy Goals</CardTitle>
        <CardDescription>Track your progress on therapeutic activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="flex items-start gap-4">
              <StatusIcon status={goal.status} />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">{goal.title}</h4>
                    <p className="text-xs text-muted-foreground">{goal.description}</p>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {goal.dueDate}
                  </div>
                </div>
                <Progress 
                  value={goal.progress} 
                  className={
                    goal.status === "completed" 
                      ? "bg-muted h-2 [&>div]:bg-mindful-500" 
                      : goal.status === "in-progress"
                      ? "bg-muted h-2 [&>div]:bg-therapy-500"
                      : "bg-muted h-2 [&>div]:bg-muted-foreground"
                  } 
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
