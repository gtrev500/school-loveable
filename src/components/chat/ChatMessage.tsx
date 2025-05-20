import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

type SenderType = "user" | "ai" | "therapist" | "community";

interface ChatMessageProps {
  id?: string;
  message: string;
  sender: SenderType;
  timestamp: string;
  name?: string;
  isLatest?: boolean;
}

export function ChatMessage({
  id,
  message,
  sender,
  timestamp,
  name,
  isLatest = false
}: ChatMessageProps) {
  const isFromUser = sender === "user";
  
  const avatarMap: Record<SenderType, { src: string; fallback: string; color: string }> = {
    user: { 
      src: "", 
      fallback: "ME", 
      color: "bg-calm-100 text-calm-700" 
    },
    ai: { 
      src: "", 
      fallback: "AI", 
      color: "bg-therapy-100 text-therapy-700" 
    },
    therapist: { 
      src: "", 
      fallback: "DR", 
      color: "bg-mindful-100 text-mindful-700" 
    },
    community: { 
      src: "", 
      fallback: name ? name.substring(0, 2).toUpperCase() : "CM", 
      color: "bg-calm-100 text-calm-700" 
    }
  };

  const avatarInfo = avatarMap[sender];

  // Check for the specific AI message with the sleep advice
  const shouldShowNote = 
    sender === "ai" && 
    message.includes("books-closed") && 
    message.includes("wind-down");

  return (
    <div 
      className={cn(
        "flex gap-3 mb-4",
        isFromUser ? "flex-row-reverse" : "flex-row",
        isLatest && "animate-fade-in"
      )}
    >
      <Avatar className="h-9 w-9 mt-1">
        <AvatarImage src={avatarInfo.src} alt={sender} />
        <AvatarFallback className={avatarInfo.color}>{avatarInfo.fallback}</AvatarFallback>
      </Avatar>
      
      <div className={cn("flex flex-col max-w-[80%]", isFromUser && "items-end")}>
        {name && <span className="text-xs text-muted-foreground">{name}</span>}
        
        <div className={cn(
          "rounded-lg p-3",
          isFromUser 
            ? "bg-calm-500 text-white rounded-tr-none" 
            : "bg-card shadow-sm rounded-tl-none"
        )}>
          <p className="text-sm whitespace-pre-line">{message}</p>
          
          {shouldShowNote && (
            <div className="mt-3 border-t border-therapy-200 pt-2 text-xs bg-therapy-50/50 -mx-3 -mb-3 px-3 pb-2 rounded-b-lg">
              <p className="mb-2 text-therapy-700 font-medium">Would you like to leave a note for your next session with Dr. Taylor about setting a study cut-off and wind-down routine?</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-6 px-3 py-0 text-xs bg-therapy-50 text-therapy-700 hover:bg-therapy-100 border-therapy-200">Yes</Button>
                <Button variant="ghost" size="sm" className="h-6 px-3 py-0 text-xs text-muted-foreground hover:bg-transparent hover:text-therapy-700">No</Button>
              </div>
            </div>
          )}
        </div>
        
        <span className="text-xs text-muted-foreground mt-1">{timestamp}</span>
      </div>
    </div>
  );
}
