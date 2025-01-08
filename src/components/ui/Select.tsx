import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  options: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Select({ 
  options, 
  placeholder = "Select an option",
  onChange,
  className = ""
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between group transition-all duration-200 hover:border-[#f78800] focus:outline-none focus:ring-2 focus:ring-[#f78800] focus:border-transparent"
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption || placeholder}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
          >
            {options.map((option, index) => (
              <motion.button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className={`h-2 w-2 rounded-full ${
                  selectedOption === option ? 'bg-[#f78800]' : 'bg-transparent'
                }`} />
                <span className={selectedOption === option ? 'text-[#f78800]' : 'text-gray-700'}>
                  {option}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}