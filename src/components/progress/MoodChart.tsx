
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock data for the mood chart
const moodData = [
  { day: "Mon", score: 7, mood: "Good" },
  { day: "Tue", score: 5, mood: "Neutral" },
  { day: "Wed", score: 8, mood: "Great" },
  { day: "Thu", score: 4, mood: "Low" },
  { day: "Fri", score: 6, mood: "Good" },
  { day: "Sat", score: 9, mood: "Great" },
  { day: "Sun", score: 7, mood: "Good" },
];

type TimeRange = "week" | "month" | "3months";

export function MoodChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("week");
  
  const getBarColor = (score: number) => {
    if (score >= 8) return "#22c570"; // mindful-500
    if (score >= 6) return "#47b0f9"; // therapy-400
    if (score >= 4) return "#a68df8"; // calm-400
    return "#f97316"; // orange
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle>Your Mood Trends</CardTitle>
            <CardDescription>Tracking your emotional wellbeing over time</CardDescription>
          </div>
          <div className="flex space-x-1 self-start">
            {(["week", "month", "3months"] as TimeRange[]).map((range) => (
              <Button
                key={range}
                variant="ghost"
                size="sm"
                onClick={() => setTimeRange(range)}
                className={cn(
                  "text-xs",
                  timeRange === range && "bg-muted font-medium"
                )}
              >
                {range === "week" ? "Week" : range === "month" ? "Month" : "3 Months"}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 10]} tickCount={6} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 border rounded-md shadow-sm">
                        <p className="font-medium">{data.day}</p>
                        <p className="text-sm">Mood: {data.mood}</p>
                        <p className="text-sm">Score: {data.score}/10</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="score"
                radius={[4, 4, 0, 0]}
                barSize={30}
                animationDuration={1000}
                label={{ position: "top", formatter: (value: number) => `${value}` }}
                fill="#8662f2"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
