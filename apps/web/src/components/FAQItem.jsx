
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQItem = ({ question, answer, value }) => {
  return (
    <AccordionItem value={value} className="border-b border-border">
      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors duration-200">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed max-w-prose">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
