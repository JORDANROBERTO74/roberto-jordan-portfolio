import React from "react";
import { motion } from "framer-motion";

interface TypewriterAnimationProps {
  texts: {
    type: string;
    content: string;
    className: string;
  }[];
}

export default function TypewriterAnimation({
  texts,
}: TypewriterAnimationProps) {
  const [displayedTexts, setDisplayedTexts] = React.useState(
    Array(texts.length).fill("")
  );
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex >= texts.length) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < texts[currentIndex].content.length) {
        setDisplayedTexts((prev) => {
          const updated = [...prev];
          updated[currentIndex] = texts[currentIndex].content.slice(
            0,
            index + 1
          );
          return updated;
        });
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setCurrentIndex((prev) => prev + 1), 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, texts]);

  return (
    <div>
      {displayedTexts?.map((text: string, i: number) => {
        const Tag = texts[i].type as keyof JSX.IntrinsicElements;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-2"
          >
            <Tag className={texts[i].className}>
              {text}
              {i === currentIndex && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                >
                  |
                </motion.span>
              )}
            </Tag>
          </motion.div>
        );
      })}
    </div>
  );
}
