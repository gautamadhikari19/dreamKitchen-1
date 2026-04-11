
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const BudgetLevelCard = ({ title, priceRange, description, features, image, isRecommended = false }) => {
  return (
    <Card 
      className={`relative transition-all duration-300 h-full flex flex-col overflow-hidden ${
        isRecommended 
          ? 'scale-105 shadow-xl ring-2 ring-primary' 
          : 'hover:shadow-lg'
      }`}
    >
      {isRecommended && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
            Recommended
          </span>
        </div>
      )}
      
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={`${title} - ${priceRange}`} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-card-foreground">{title}</CardTitle>
        <div className="text-3xl font-bold text-primary mt-2" style={{fontVariantNumeric: 'tabular-nums'}}>
          {priceRange}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-3 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button 
            className={`w-full transition-all duration-200 active:scale-[0.98] ${
              isRecommended 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Get Estimate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetLevelCard;
