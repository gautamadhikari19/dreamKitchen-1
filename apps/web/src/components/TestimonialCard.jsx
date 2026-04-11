
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialCard = ({ quote, name, role, location, image }) => {
  return (
    <Card className="bg-muted border-border break-inside-avoid mb-6 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <p className="text-muted-foreground italic leading-relaxed mb-6">
          "{quote}"
        </p>
        <div className="flex items-center gap-4 border-t border-border/50 pt-4">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-background shadow-sm"
            loading="lazy"
          />
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role} • {location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
