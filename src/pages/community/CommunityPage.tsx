
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface CommunityMessage {
  id: string;
  message: string;
  sender: "user" | "community";
  senderName?: string;
  timestamp: string;
}

// Sample community messages for demonstration
const initialAnxietyMessages: CommunityMessage[] = [
  {
    id: "a1",
    message: "Hi everyone, I've been feeling really anxious about my upcoming exams. Anyone have any tips for managing test anxiety?",
    sender: "community",
    senderName: "Alex",
    timestamp: "2:34 PM"
  },
  {
    id: "a2",
    message: "I deal with test anxiety all the time. What helps me is breaking my study sessions into smaller chunks and taking breaks. Also, deep breathing exercises right before the exam.",
    sender: "community",
    senderName: "Taylor",
    timestamp: "2:38 PM"
  },
  {
    id: "a3",
    message: "Have you tried the 5-4-3-2-1 grounding technique? It helps me refocus when I'm spiraling with anxiety.",
    sender: "community",
    senderName: "Jordan",
    timestamp: "2:45 PM"
  }
];

const initialStressMessages: CommunityMessage[] = [
  {
    id: "s1",
    message: "This semester is killing me. I have so many assignments due and not enough time. How do you all manage your workload?",
    sender: "community",
    senderName: "Morgan",
    timestamp: "1:22 PM"
  },
  {
    id: "s2",
    message: "I use a prioritization matrix - basically dividing tasks into urgent/important quadrants. It helps me figure out what to focus on first.",
    sender: "community",
    senderName: "Casey",
    timestamp: "1:30 PM"
  }
];

export default function CommunityPage() {
  const [anxietyMessages, setAnxietyMessages] = useState<CommunityMessage[]>(initialAnxietyMessages);
  const [stressMessages, setStressMessages] = useState<CommunityMessage[]>(initialStressMessages);
  const [activeTab, setActiveTab] = useState("anxiety");
  
  const activeTopics = [
    { id: "anxiety", name: "Exam Anxiety", messageCount: anxietyMessages.length, participants: 8 },
    { id: "stress", name: "Managing Stress", messageCount: stressMessages.length, participants: 6 },
    { id: "sleep", name: "Sleep Issues", messageCount: 24, participants: 11 },
    { id: "social", name: "Social Anxiety", messageCount: 32, participants: 15 },
    { id: "motivation", name: "Loss of Motivation", messageCount: 19, participants: 9 },
  ];

  const getMessages = (topicId: string) => {
    switch (topicId) {
      case "anxiety":
        return anxietyMessages;
      case "stress":
        return stressMessages;
      default:
        return [];
    }
  };

  const handleSendMessage = (message: string) => {
    const newMessage: CommunityMessage = {
      id: `${Date.now()}`,
      message,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (activeTab === "anxiety") {
      setAnxietyMessages([...anxietyMessages, newMessage]);
    } else if (activeTab === "stress") {
      setStressMessages([...stressMessages, newMessage]);
    }
  };

  const onlineMembers = [
    { id: 1, name: "Alex", status: "speaking", avatar: "" },
    { id: 2, name: "Taylor", status: "online", avatar: "" },
    { id: 3, name: "Jordan", status: "online", avatar: "" },
    { id: 4, name: "Morgan", status: "active", avatar: "" },
    { id: 5, name: "Casey", status: "away", avatar: "" },
  ];

  return (
    <PageLayout title="Community Support">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full">
        {/* Sidebar with topics and members */}
        <div className="lg:col-span-1 space-y-4">
          {/* Topics list */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Discussion Topics</CardTitle>
              <CardDescription>Join conversations on specific themes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {activeTopics.map((topic) => (
                  <button
                    key={topic.id}
                    className={`w-full flex justify-between items-center text-sm rounded-md p-2.5 transition-colors ${
                      activeTab === topic.id
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setActiveTab(topic.id)}
                  >
                    <span>{topic.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {topic.messageCount}
                    </Badge>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Online members */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Online Now</CardTitle>
              <CardDescription>Community members currently active</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {onlineMembers.map((member) => (
                  <div key={member.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="bg-calm-100 text-calm-700">
                          {member.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span 
                        className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
                          member.status === "speaking" 
                            ? "bg-mindful-500 animate-pulse-gentle" 
                            : member.status === "online" || member.status === "active"
                            ? "bg-mindful-500" 
                            : "bg-muted"
                        }`}
                      />
                    </div>
                    <span className="text-sm">{member.name}</span>
                    {member.status === "speaking" && (
                      <Badge variant="outline" className="ml-auto text-[10px] py-0 h-5 bg-mindful-50 text-mindful-700">
                        Speaking
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Chat area */}
        <div className="lg:col-span-3 flex flex-col h-[calc(100vh-13rem)]">
          <Tabs defaultValue="anxiety" value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <TabsList className="grid grid-cols-2 w-[400px]">
              <TabsTrigger value="anxiety">Exam Anxiety</TabsTrigger>
              <TabsTrigger value="stress">Managing Stress</TabsTrigger>
            </TabsList>
            
            {["anxiety", "stress"].map((tabId) => (
              <TabsContent key={tabId} value={tabId} className="flex-1 flex flex-col mt-0 data-[state=inactive]:hidden">
                <Card className="flex-1 flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>
                          {tabId === "anxiety" ? "Exam Anxiety" : "Managing Stress"} Discussion
                        </CardTitle>
                        <CardDescription>
                          {tabId === "anxiety" 
                            ? "Strategies for managing test-related anxiety" 
                            : "Tips for balancing coursework and reducing stress"
                          }
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="ml-auto">
                        {tabId === "anxiety" ? "8" : "6"} participants
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-hidden p-0">
                    <ScrollArea className="h-full p-4">
                      <div className="space-y-4">
                        {getMessages(tabId).map((msg, index) => (
                          <ChatMessage
                            key={msg.id}
                            message={msg.message}
                            sender={msg.sender}
                            timestamp={msg.timestamp}
                            name={msg.senderName}
                            isLatest={index === getMessages(tabId).length - 1}
                          />
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <ChatInput 
                    onSendMessage={handleSendMessage} 
                    placeholder="Share your thoughts or questions with the group..."
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
