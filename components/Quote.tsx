import React, { useEffect, useState } from "react";
import { Quote as QuoteType } from "../types/Quote";
import PreLoader from "./PreLoader";

type Props = {
  refresh: () => {};
};

const Quote = () => {
  const [results, setResults] = useState({} as QuoteType);
  const [isLoaded, setIsLoaded] = useState(false);

  const getQuote = async () => {
    const quoteResponse = await fetch(`https://api.quotable.io/random`);
    if (quoteResponse.ok) {
      const data: QuoteType = await quoteResponse.json();
      setResults(data);
    } else {
      alert("Something is wrong, try again later.");
    }
    setIsLoaded(true);
  };

  const renderQuote = () => {
    if (isLoaded) {
      return (
        <div className="flex flex-col p-8 max-w-2xl transition-opacity duration-300 ease-in-out opacity-100">
          <span className="my-2 text-2xl sm:text-4xl drop-shadow-sm">
            {results.content}
          </span>
          <span className="my-4 drop-shadow-sm italic">{results.author}</span>
          <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs dark:text-gray-600 text-inherit">
            Made by{" "}
            <a
              href="https://x.com/h4ck4life"
              target="_blank"
              rel="noopener noreferrer"
            >
              @h4ck4life
            </a>
          </footer>
        </div>
      );
    } else {
      return (
        <div className="transition-opacity duration-300 ease-in-out opacity-30">
          <PreLoader />
        </div>
      );
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return renderQuote();
};

export default Quote;
