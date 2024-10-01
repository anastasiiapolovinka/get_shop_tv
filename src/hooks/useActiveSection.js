import { useEffect, useRef, useState } from "react";

export const useActiveSection = () => {
   const [activeSection, setActiveSection] = useState('');

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section1Rect = section1Ref.current.getBoundingClientRect();
      const section2Rect = section2Ref.current.getBoundingClientRect();

      const isSection1InView = section1Rect.top < window.innerHeight && section1Rect.bottom >= 0;
      const isSection2InView = section2Rect.top < window.innerHeight && section2Rect.bottom >= 0;

      if (isSection1InView && !isSection2InView) {
        setActiveSection('section1');
      } else if (isSection2InView && !isSection1InView) {
        setActiveSection('section2');
      } else if (isSection1InView && isSection2InView) {
        setActiveSection('section1');
      } else {
         setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
   section1Ref,
   section2Ref,
   activeSection
  }
}