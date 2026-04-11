
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const KitchenTypeCard = ({ icon: Icon, title, description, image, alt, imageContentKey }) => {
  return (
    <Card className="border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full overflow-hidden group">
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={alt || `${title} Kitchen Layout`} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          data-content-key={imageContentKey}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-background/90 backdrop-blur flex items-center justify-center flex-shrink-0">
            <Icon className="h-5 w-5 text-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="p-5 flex flex-col h-full">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default KitchenTypeCard;
