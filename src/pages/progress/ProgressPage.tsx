
import { PageLayout } from "@/components/layout/PageLayout";
import { MoodChart } from "@/components/progress/MoodChart";
import { ProgressTracker } from "@/components/progress/ProgressTracker";
import { TherapyInsights } from "@/components/progress/TherapyInsights";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Brain, Calendar, MessageCircle, CalendarCheck } from "lucide-react";

export default function ProgressPage() {
  const sessionStats = [
    { id: 1, title: "AI Sessions", count: 24, icon: Brain, color: "bg-therapy-100 text-therapy-700" },
    { id: 2, title: "Therapist Sessions", count: 8, icon: MessageCircle, color: "bg-mindful-100 text-mindful-700" },
    { id: 3, title: "Group Sessions", count: 6, icon: BookOpen, color: "bg-calm-100 text-calm-700" },
    { id: 4, title: "Completed Exercises", count: 15, icon: CalendarCheck, color: "bg-therapy-100 text-therapy-700" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Therapy Session",
      date: "May 5, 2023",
      time: "3:00 PM",
      type: "1-on-1",
    },
    {
      id: 2,
      title: "Group Support: Exam Stress",
      date: "May 7, 2023",
      time: "6:00 PM",
      type: "Group",
    },
    {
      id: 3,
      title: "CBT Workshop",
      date: "May 12, 2023",
      time: "4:30 PM",
      type: "Workshop",
    },
  ];

  return (
    <PageLayout title="Progress Tracking">
      <div className="space-y-6">
        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sessionStats.map((stat) => (
            <Card key={stat.id} className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <h3 className="text-3xl font-bold mt-1">{stat.count}</h3>
                  </div>
                  <div className={`p-3 rounded-md ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="col-span-2 space-y-6">
            <MoodChart />
            <ProgressTracker />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <TherapyInsights />
            
            {/* Upcoming events */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your scheduled appointments and workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex gap-4 p-3 rounded-md bg-card border">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-md bg-muted">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{event.title}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-muted-foreground">
                            {event.date} • {event.time}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Weekly streaks */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Weekly Check-in Streak</CardTitle>
                <CardDescription>You're on a roll! Keep it up</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-mindful-500 text-white font-semibold">
                      15
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Days</span>
                      <span className="text-xs text-muted-foreground">Current streak</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-semibold">
                      30
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Days</span>
                      <span className="text-xs text-muted-foreground">Longest streak</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-7 gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-10 rounded-md flex items-center justify-center text-xs font-medium ${
                        i < 5 ? "bg-mindful-100 text-mindful-700" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
