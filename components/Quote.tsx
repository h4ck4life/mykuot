import React, { useEffect, useState } from "react";
import { Quote } from "../types/Quote";
import PreLoader from "./PreLoader";

const Quote = () => {
  const [results, setResults] = useState({} as Quote);
  const [isLoaded, setIsLoaded] = useState(false);

  const getQuote = async () => {
    const quoteResponse = await fetch(`https://api.quotable.io/random`);
    const data: Quote = await quoteResponse.json();
    setResults(data);
    setIsLoaded(true);
  };

  const renderQuote = () => {
    if (isLoaded) {
      return (
        <div className="flex flex-col p-8">
          <span className="my-2 text-4xl drop-shadow-sm">
            {results.content}
          </span>
          <span className="my-2 drop-shadow-sm">{results.author}</span>
        </div>
      );
    } else {
      return <PreLoader />;
    }
  };

  useEffect(() => {
    getQuote();
    return () => {
      console.log("cleanup");
    };
  }, []);

  return renderQuote();
};

export default Quote;
