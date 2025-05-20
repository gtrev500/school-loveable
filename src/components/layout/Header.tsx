
import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Header({ title }: { title: string }) {
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="flex items-center justify-between p-4 bg-background border-b">
      <h1 className="text-xl font-semibold">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-background border rounded-md px-3 py-1">
          <Search className="h-4 w-4 text-muted-foreground mr-2" />
          <Input 
            type="text" 
            placeholder="Search..." 
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-8"
          />
        </div>
        
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {notifications > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-calm-500 text-white">
              {notifications}
            </Badge>
          )}
        </Button>
        
        <Avatar className="h-8 w-8">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="bg-calm-100 text-calm-700">JS</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
