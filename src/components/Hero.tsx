"use client";
import { Button } from "./ui/button";
import { useState } from "react";

export const Hero = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("npm i maven-studio@latest")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 3000); // Reset success message after 3 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section className="relative md:w-2/5 w-4/5 mx-auto text-center py-20 md:py-32 gap-10">
      <div className="absolute inset-10 shadow bg-gray-200 mx-auto -z-10"></div>
      <div className="text-center lg:text-start space-y-6 relative z-10">
        <main className="text-3xl md:text-6xl font-bold text-center">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#93e4a9]  to-[#4ca85c] text-transparent bg-clip-text">
              Maven Studio:
            </span>{" "}
            Enhancing Data Interaction with AI-Powered Queries
          </h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground mx-auto text-center lg:mx-0">
          Maven Studio leverages the power of AI to transform the way you
          interact with your database. By simply using natural language prompts,
          Maven Studio generates complex queries, simplifying data retrieval and
          analysis.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 mx-auto flex justify-center ">
          <Button onClick={copyToClipboard} className="w-full md:w-2/5">
            {copySuccess ? "Copied!" : "npm install maven-studio@latest"}
          </Button>
        </div>
      </div>
    </section>
  );
};
