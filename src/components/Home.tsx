import * as React from "react";
import { hipsterPhrases, jokes, movieQuotes, techPhrases } from "./data";
import Layout from "./Layout";
import RadioButtonGroup from "./RadioButtonGroup";

export default function Home() {
  const [phraseCount, setPhraseCount] = React.useState("5");

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt?.preventDefault();
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
            TODO
          </div>

          <div className="form-group">
            <button type="submit">Generate</button>
          </div>
        </form>

        <div className="generated-content">
          Generated content will appear here
        </div>
      </div>
    </Layout>
  );
}
