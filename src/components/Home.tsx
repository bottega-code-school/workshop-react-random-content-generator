import * as React from "react";
import CopyToClipboard from "./CopyToClipboard";
import { hipsterPhrases, jokes, movieQuotes, techPhrases } from "./data";
import Layout from "./Layout";
import RadioButtonGroup from "./RadioButtonGroup";

type DataType =
  | "tech-phrases"
  | "movie-quotes"
  | "joke-phrases"
  | "hipster-phrases";

const data: { [key in DataType]: string[] } = {
  "tech-phrases": techPhrases,
  "movie-quotes": movieQuotes,
  "joke-phrases": jokes,
  "hipster-phrases": hipsterPhrases,
};

const contentOptions: { label: string; value: DataType }[] = [
  { label: "Tech Phrases", value: "tech-phrases" },
  { label: "Movie Quotes", value: "movie-quotes" },
  { label: "Jokes", value: "joke-phrases" },
  { label: "Hipster Phrases", value: "hipster-phrases" },
];

const shuffle = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export default function Home() {
  const [phraseCount, setPhraseCount] = React.useState("5");
  const [selectedContent, setContent] = React.useState("tech-phrases");
  const [generatedContent, setGeneratedContent] = React.useState(undefined);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt?.preventDefault();
    setGeneratedContent(
      shuffle(data[selectedContent as DataType])
        .slice(0, +phraseCount)
        .join(" ")
    );
  };

  return (
    <Layout>
      <div className="content-generator-wrapper">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div className="form-group-label">Phrase Count</div>
            <input
              type="number"
              value={phraseCount}
              onChange={(evt) => setPhraseCount(evt.target.value)}
              placeholder="Number of phrases"
            />
          </div>

          <div className="form-group">
            <div className="form-group-label">Category</div>

            <RadioButtonGroup
              options={contentOptions}
              value={selectedContent}
              onChange={(evt) => setContent(evt.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit">Generate</button>
          </div>
        </form>

        <div className="generated-content">
          {generatedContent || "Generated content will appear here"}
          {generatedContent && <CopyToClipboard value={generatedContent} />}
        </div>
      </div>
    </Layout>
  );
}
