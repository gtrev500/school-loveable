import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Link, useLocation } from "react-router-dom";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  const location = useLocation();

  // Sidebar links for navigation
  const navLinks = [
    { path: "/community", label: "Community" },
    { path: "/therapy", label: "Therapy" },
    { path: "/progress", label: "Progress" },
    { path: "/support", label: "Support" },
    { path: "/support/resources", label: "Resources" },
  ];

  return (
    <div className="flex h-screen">
      <aside className="w-56 bg-background border-r flex flex-col">
        <div className="px-6 py-4 text-xl font-bold text-violet-700 tracking-tight">
          MindfulEd
        </div>
        <nav className="flex flex-col gap-2 px-2">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.path}
              className={`block rounded px-3 py-2 transition text-sm font-medium ${
                location.pathname === link.path
                  ? "bg-violet-100 text-violet-900"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto mb-4 px-4 text-[10px] text-muted-foreground">
          &copy; {new Date().getFullYear()} MindfulEd
        </div>
      </aside>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

