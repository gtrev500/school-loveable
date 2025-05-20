import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  FileText, 
  BookOpen, 
  Calendar, 
  MessageSquare,
  Phone,
  Video
} from "lucide-react";

interface Message {
  id: string;
  message: string;
  sender: "user" | "ai" | "therapist";
  timestamp: string;
}

// Sample AI chat messages
const initialAiMessages: Message[] = [
  {
    id: "1",
    message: "Hello Jamie! How are you feeling today?",
    sender: "ai",
    timestamp: "9:03 AM"
  },
  {
    id: "2",
    message: "I'm feeling pretty stressed about my upcoming exams. I haven't been sleeping well.",
    sender: "user",
    timestamp: "9:04 AM"
  },
  {
    id: "3",
    message: "I understand exam stress can be challenging. Let's work on this together. Can you tell me more about your sleep issues?",
    sender: "ai",
    timestamp: "9:05 AM"
  },
  {
    id: "4",
    message: "I've been staying up late trying to study, but then I feel anxious and can't fall asleep. Then I'm tired the next day and can't focus.",
    sender: "user",
    timestamp: "9:07 AM"
  },
  {
    id: "5",
    message: "Breaking the loop starts with one small change: set a firm \"books-closed\" time at least an hour before bed. Jot tomorrow's priorities, then shift to a wind-down—try the 4-7-8 breathing or the mindfulness audio in your resources. Solid sleep will lock in what you've studied better than another late-night cram. Think you could give that a shot tonight?",
    sender: "ai",
    timestamp: "9:08 AM"
  },
  {
    id: "6",
    message: "I want to try but honestly I'm freaking out. I still have two chapters to cover and the exam is in three days. If I don't ace this, my scholarship could be at risk. Every time I think about it my heart starts racing and I feel like I can't breathe. I don't know how to calm down enough to sleep.",
    sender: "user",
    timestamp: "9:10 AM"
  },
  {
    id: "7",
    message: "I hear how overwhelming this feels right now, Jamie. When our scholarships and future feel like they're hanging in the balance, that fear is absolutely real. Your body's reaction—the racing heart, the trouble breathing—that's your system trying to protect you, even though it doesn't feel helpful right now.\n\nLet's take a small step back together. The pressure to perform perfectly is immense, but your worth isn't defined by a single exam score. I know that might be hard to believe in this moment.\n\nFor tonight, instead of trying to tackle everything, what if we aim for just 15 minutes of focused breathing before bed? Not to fall asleep instantly, but just to acknowledge this difficult moment. The mindfulness audio in your resources isn't about erasing your stress—it's about sitting with it more gently.\n\nAnd tomorrow, we can work on breaking those two chapters into smaller pieces. The path through stress isn't always about eliminating it completely—sometimes it's about finding tiny moments of calm within the storm. Would a 15-minute break feel possible tonight?",
    sender: "ai",
    timestamp: "9:12 AM"
  }
];

// Sample therapist chat messages
const initialTherapistMessages: Message[] = [
  {
    id: "t1",
    message: "Hi Jamie, it's Dr. Taylor. I saw in your check-ins that you've been experiencing increased anxiety this week. How are you managing?",
    sender: "therapist",
    timestamp: "Yesterday, 4:15 PM"
  },
  {
    id: "t2",
    message: "Hi Dr. Taylor, thanks for checking in. I've been trying the breathing techniques you suggested, but I'm still finding it hard during peak stress moments.",
    sender: "user",
    timestamp: "Yesterday, C4:20 PM"
  },
  {
    id: "t3",
    message: "That's understandable, Jamie. It takes practice to use these techniques effectively during high stress. Let's discuss some modifications in our next session. In the meantime, have you been using the thought record we worked on?",
    sender: "therapist",
    timestamp: "Yesterday, 4:25 PM"
  }
];

export default function TherapyPage() {
  const [aiMessages, setAiMessages] = useState<Message[]>(initialAiMessages);
  const [therapistMessages, setTherapistMessages] = useState<Message[]>(initialTherapistMessages);
  const [activeTab, setActiveTab] = useState("ai");
  
  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: `${Date.now()}`,
      message,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (activeTab === "ai") {
      setAiMessages([...aiMessages, newMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: `${Date.now() + 1}`,
          message: "Breaking the loop starts with one small change: set a firm \"books-closed\" time at least an hour before bed. Jot tomorrow's priorities, then shift to a wind-down—try the 4-7-8 breathing or the mindfulness audio in your resources. Solid sleep will lock in what you've studied better than another late-night cram. Think you could give that a shot tonight?",
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setAiMessages(prev => [...prev, aiResponse]);
      }, 1000);
    } else {
      setTherapistMessages([...therapistMessages, newMessage]);
    }
  };

  const therapistInfo = {
    name: "Dr. Sarah Taylor",
    title: "Licensed Therapist",
    specialization: "CBT, Anxiety, Academic Stress",
    nextSession: "Thursday, 3:00 PM",
    avatar: ""
  };

  const resources = [
    { id: 1, title: "Anxiety Management Guide", type: "PDF", icon: FileText },
    { id: 2, title: "Sleep Hygiene Techniques", type: "Article", icon: BookOpen },
    { id: 3, title: "Mindfulness Exercise Audio", type: "Audio", icon: BookOpen }
  ];

  return (
    <PageLayout title="Therapy Support">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full">
        {/* Sidebar with therapist info and resources */}
        <div className="lg:col-span-1 space-y-4">
          {/* Therapist info */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Your Therapist</CardTitle>
              <CardDescription>Professional support when you need it</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={therapistInfo.avatar} />
                  <AvatarFallback className="bg-mindful-100 text-mindful-700 text-lg">
                    {therapistInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-medium">{therapistInfo.name}</h3>
                  <p className="text-sm text-muted-foreground">{therapistInfo.title}</p>
                  <Badge variant="outline" className="mt-1">
                    {therapistInfo.specialization}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Next session: {therapistInfo.nextSession}</span>
              </div>
              
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button size="sm" className="flex-1">
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Resources</CardTitle>
              <CardDescription>Recommended by your therapist</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {resources.map((resource) => (
                  <button key={resource.id} className="w-full flex items-center space-x-3 text-sm p-2 rounded-md hover:bg-muted text-left">
                    <resource.icon className="h-4 w-4 text-muted-foreground" />
                    <span>{resource.title}</span>
                    <Badge variant="outline" className="ml-auto text-xs py-0">
                      {resource.type}
                    </Badge>
                  </button>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                View all resources
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Chat area */}
        <div className="lg:col-span-3 flex flex-col h-[calc(100vh-13rem)]">
          <Tabs defaultValue="ai" value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <TabsList className="grid grid-cols-2 w-[400px]">
              <TabsTrigger value="ai">AI Assistant</TabsTrigger>
              <TabsTrigger value="therapist">Dr. Taylor</TabsTrigger>
            </TabsList>
            
            {["ai", "therapist"].map((tabId) => (
              <TabsContent key={tabId} value={tabId} className="flex-1 flex flex-col mt-0 data-[state=inactive]:hidden">
                <Card className="flex-1 flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>
                          {tabId === "ai" ? "AI Therapy Assistant" : "Dr. Sarah Taylor"}
                        </CardTitle>
                        <CardDescription>
                          {tabId === "ai" 
                            ? "24/7 AI-powered support based on CBT principles" 
                            : "Licensed therapist specializing in anxiety and academic stress"
                          }
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={tabId === "ai" ? "outline" : "secondary"} 
                        className={tabId === "ai" ? "bg-therapy-50 text-therapy-700" : ""}
                      >
                        {tabId === "ai" ? "Active now" : "Responds within 24h"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-hidden p-0">
                    <ScrollArea className="h-full p-4">
                      <div className="space-y-4">
                        {(tabId === "ai" ? aiMessages : therapistMessages).map((msg, index) => (
                          <ChatMessage
                            key={msg.id}
                            id={msg.id}
                            message={msg.message}
                            sender={msg.sender}
                            timestamp={msg.timestamp}
                            isLatest={index === (tabId === "ai" ? aiMessages.length - 1 : therapistMessages.length - 1)}
                          />
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <ChatInput 
                    onSendMessage={handleSendMessage} 
                    placeholder={tabId === "ai" 
                      ? "Message your AI assistant..." 
                      : "Message Dr. Taylor..."
                    }
                  />
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
}
