import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export function ServiceCard({ title, description, href, image, imageAlt }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading text-2xl mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
        >
          Mehr erfahren
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
