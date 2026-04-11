
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MaterialFinishCard = ({ icon: Icon, title, description, image, alt, imageContentKey, onQuoteClick }) => {
  return (
    <div className="flex flex-col h-full bg-card rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-border/50 overflow-hidden">
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-t-2xl relative group bg-muted">
          {/* 
            The img tag must be the direct target for data-content-key and have relative z-10 
            to ensure it sits above any potential overlays and captures click events for the visual editor.
          */}
          <img 
            src={image} 
            alt={alt} 
            data-content-key={imageContentKey}
            className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-80 group-hover:scale-105 cursor-pointer relative z-10" 
            loading="lazy"
          />
        </div>
      )}
      
      <div className="flex flex-col h-full p-6">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        <Button 
          onClick={onQuoteClick} 
          variant="outline" 
          className="w-full mt-auto group/btn border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors"
        >
          Get Quote
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};

export default MaterialFinishCard;
