import Link from "next/link";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-panel-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-brand-400">DevDocs</span>
            <span className="rounded-full bg-panel px-2 py-0.5 text-xs font-medium text-foreground border border-panel-border">v1.0</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 rounded-md bg-panel border border-panel-border px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground">
            <Search className="h-4 w-4" />
            <span>Search docs...</span>
            <span className="hidden sm:inline-flex text-xs ml-2 border border-panel-border rounded px-1">⌘K</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
