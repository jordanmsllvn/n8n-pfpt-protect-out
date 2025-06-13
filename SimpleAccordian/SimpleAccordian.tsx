import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './styles.module.scss';

// Type definitions
export interface AccordionItem {
  field_plain_description: string;
  field_body: string | React.ReactNode;
}

export interface SimpleAccordionContent {
  field_simple_accordion_items: AccordionItem[];
  classes?: string[];
  attributes?: {
    [key: string]: any;
  };
}

interface AccordionItemProps {
  item: AccordionItem;
  index: number;
  isActive: boolean;
  maxHeight: number;
  onClick: (index: number) => void;
}

// Individual accordion item component
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  isActive,
  maxHeight,
  onClick
}) => {
  return (
    <div 
      className={styles.item}
      onClick={() => onClick(index)}
    >
      <section className={styles.titleWrapper}>
        <h3 className={styles.title}>
          {item.field_plain_description}
        </h3>
        <div className={`${styles.button} ${isActive ? styles.isActive : ''}`}></div>
      </section>
      <section 
        className={`${styles.desc} ${isActive ? styles.isActive : ''}`}
        style={{ 
          maxHeight: isActive ? `${maxHeight}px` : '0px'
        }}
      >
        {item.field_body}
      </section>
    </div>
  );
};

// Main accordion component
const SimpleAccordion: React.FC<{ content: SimpleAccordionContent }> = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [itemHeights, setItemHeights] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Debounce function
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Calculate heights for each accordion item
  const calculateHeights = useCallback(() => {
    const heights: number[] = [];
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const descElement = ref.querySelector(`.${styles.desc}`) as HTMLElement;
        if (descElement) {
          // Temporarily set max-height to unset to get natural height
          const originalMaxHeight = descElement.style.maxHeight;
          descElement.style.maxHeight = 'unset';
          heights[index] = descElement.offsetHeight;
          descElement.style.maxHeight = originalMaxHeight;
        }
      }
    });
    
    setItemHeights(heights);
  }, []);

  // Debounced resize handler
  const debouncedCalculateHeights = useCallback(
    debounce(calculateHeights, 100),
    [calculateHeights]
  );

  // Handle accordion item click
  const handleItemClick = (index: number) => {
    if (activeIndex === index) {
      // If clicking the active item, close it
      setActiveIndex(-1);
    } else {
      // Otherwise, open the clicked item
      setActiveIndex(index);
    }
  };

  // Setup resize listener and initial calculations
  useEffect(() => {
    const handleResize = () => {
      debouncedCalculateHeights();
    };

    const handleLoad = () => {
      calculateHeights();
    };

    // Calculate heights on mount
    calculateHeights();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
    };
  }, [calculateHeights, debouncedCalculateHeights]);

  // Recalculate heights when content changes
  useEffect(() => {
    calculateHeights();
  }, [content.field_simple_accordion_items, calculateHeights]);

  // Merge default classes with provided classes
  const classes = [styles.accordion, ...(content.classes || [])];
  const className = classes.join(' ');

  return (
    <div 
      className={className}
      {...(content.attributes || {})}
    >
      <div 
        className={styles.wrapper} 
        data-animate="true"
        ref={wrapperRef}
      >
        {content.field_simple_accordion_items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {itemRefs.current[index] = el;}}
          >
            <AccordionItem
              item={item}
              index={index}
              isActive={activeIndex === index}
              maxHeight={itemHeights[index] || 0}
              onClick={handleItemClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleAccordion;
