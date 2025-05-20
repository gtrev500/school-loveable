
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageSquare, 
  Users, 
  ChartLine, 
  Calendar, 
  UserRound, 
  FileText 
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const mainNavItems = [
    {
      title: "Community Chat",
      href: "/community",
      icon: Users,
    },
    {
      title: "Therapy Chat",
      href: "/therapy",
      icon: MessageSquare,
    },
    {
      title: "Progress",
      href: "/progress",
      icon: ChartLine,
    },
  ];

  const secondaryNavItems = [
    {
      title: "Appointments",
      href: "/appointments",
      icon: Calendar,
    },
    {
      title: "Resources",
      href: "/resources",
      icon: FileText,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: UserRound,
    },
  ];

  return (
    <aside 
      className={cn(
        "flex flex-col border-r bg-sidebar transition-all duration-300 h-screen",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-calm-100">
              <div className="w-4 h-4 rounded-full bg-calm-500"></div>
            </div>
            <h1 className="text-lg font-semibold">MindSpace</h1>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1 px-2">
        <nav className="space-y-6 py-4">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  collapsed && "justify-center"
                )}
              >
                <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-calm-600" : "text-muted-foreground")} />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </div>

          <div className="space-y-1">
            <h3 className={cn("text-xs font-semibold text-muted-foreground px-3 py-2", collapsed && "sr-only")}>
              Support
            </h3>
            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  collapsed && "justify-center"
                )}
              >
                <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-calm-600" : "text-muted-foreground")} />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </div>
        </nav>
      </ScrollArea>

      <div className={cn("border-t p-4", collapsed ? "justify-center" : "")}>
        <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
          <div className="h-9 w-9 rounded-full bg-calm-100 flex items-center justify-center">
            <UserRound className="h-5 w-5 text-calm-600" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Jamie Smith</span>
              <span className="text-xs text-muted-foreground">Student</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
