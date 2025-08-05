import { ArrowUp } from "lucide-react"

function Footer() {
  return (
    <footer className="flex flex-wrap justify-between items-center py-8 px-4 bg-card relative border-t border-border mt-12 pt-8">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Akpowenre Daniel. All rights reserved </p>
        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"><ArrowUp /></a>
    </footer>
  )
}

export default Footer