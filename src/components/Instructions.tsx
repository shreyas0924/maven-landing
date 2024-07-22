const CodeCard = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#09090b] dark:bg-white dark:text-black border text-white rounded-lg px-5 py-2.5 font-mono overflow-x-auto whitespace-nowrap">
      {text}
    </div>
  );
};

export const Instructions = () => {
  return (
    <main className="md:w-2/5 w-4/5 flex flex-col gap-3 mx-auto mb-20">
      <div className="text-lg font-bold mb-4 text-center">Getting Started</div>

      <p>
        To use Maven Studio, you'll need to set up your environment with the
        necessary configurations.
      </p>

      <div className="mb-4 flex flex-col gap-3">
        <div className="font-bold">MacOS/Linux Users</div>
        <p>
          Open a terminal and run the following command to set the environment
          variable:
        </p>
        <CodeCard
          text={`export MAVEN_STUDIO_OPENAI_API_KEY=your_openai_api_key`}
        />
        <p>
          Replace <code>your_openai_api_key</code> with your actual OpenAI API
          key.
        </p>
      </div>

      <div className="mb-4 flex flex-col gap-3">
        <div className="font-bold">Windows Users</div>
        <p>
          Open a command prompt and run the following command to set the
          environment variable:
        </p>
        <CodeCard
          text={`set MAVEN_STUDIO_OPENAI_API_KEY=your_openai_api_key`}
        />
        <p>
          Replace <code>your_openai_api_key</code> with your actual OpenAI API
          key.
        </p>
      </div>

      <p>
        Note: These commands only set the environment variable for the current
        session. Ideally, you should set the environment variable permanently on
        your operating system.
      </p>

      <p>
        Next, start the Maven Studio server by running the following command in
        your terminal at the root of your Maven Studio project with the type of
        ORM and AI as flag:
      </p>
      <CodeCard
        text={`npx maven-studio@latest --prisma --openai "MAVEN_STUDIO_OPENAI_API_KEY"`}
      />

      <p>
        Once the server is running, Maven Studio will provide you with a URL to
        access the UI in your web browser.
      </p>

      <div className="mb-4 flex flex-col gap-3">
        <div className="font-bold">Run it with Gemini</div>
        <p>
          You can also run Maven Studio with Gemini. To do so, set the following
          environment variables:
        </p>
        <CodeCard
          text={`export MAVEN_STUDIO_GEMINI_API_KEY="your_gemini_key"`}
        />
      </div>

      <div className="mb-4 flex flex-col gap-3">
        <div className="font-bold">Security Considerations</div>
        <p>
          Your OpenAI API key is sensitive information, and we do not have
          access to it since Maven Studio runs entirely on your machine. We
          recommend that you keep your API key secure and do not share it with
          others.
        </p>
        <p>
          Feel free to adjust any specific details or commands based on your
          actual project requirements!
        </p>
      </div>
    </main>
  );
};

export default Instructions;
