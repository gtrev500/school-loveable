
import { useState } from "react";
import { Paperclip, Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
}

export function ChatInput({ onSendMessage, placeholder = "Type a message..." }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-4 border-t bg-card rounded-b-lg">
      <div className="flex items-end gap-2">
        <Textarea
          placeholder={placeholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[60px] resize-none"
        />
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            size="icon"
            type="button"
            className="rounded-full"
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            type="button"
            className="rounded-full"
          >
            <Smile className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            size="icon"
            type="button"
            className="rounded-full bg-calm-500 text-white hover:bg-calm-600"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
