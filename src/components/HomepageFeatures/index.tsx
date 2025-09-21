import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Centralized Configuration",
    description: <>Keep all project settings in one place — linting, formatting, tsconfig, and more — to ensure consistency across repos.</>,
  },
  {
    title: "Reusable & Scalable",
    description: (
      <>
        Easily share and extend configs for TypeScript, ESLint, Prettier, and build tools. Scale your projects without duplicating boilerplate.
      </>
    ),
  },
  {
    title: "Developer Productivity",
    description: (
      <>Save time with pre-built, opinionated defaults. Focus on writing features while the config package enforces standards automatically.</>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={styles.mx400}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
