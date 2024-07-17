import React, { useState } from "react";

interface AccordionProps {
      title: string;
      content: string;
}

const Accordion: React.FC<AccordionProps> = () => {
      const [isOpen, setIsOpen] = useState(false);

      return <div className="accordion">Accordion</div>;
};

export default Accordion;
