import type { MDXComponents } from "mdx/types";
import styles from "./mdx-components.module.css";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    hr: ({ children }) => <hr className={styles["hr"]}>{children}</hr>,
    h1: ({ children }) => <h1 className={styles["h1"]}>{children}</h1>,
    h2: ({ children }) => <h2 className={styles["h2"]}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles["h3"]}>{children}</h3>,
    h4: ({ children }) => <h4 className={styles["h4"]}>{children}</h4>,
    p: ({ children }) => <p className={styles["p"]}>{children}</p>,
    ul: ({ children }) => <ul className={styles["ul"]}>{children}</ul>,
    li: ({ children }) => <li className={styles["li"]}>{children}</li>,
    ol: ({ children }) => <ol className={styles["ol"]}>{children}</ol>,
    pre: ({ children }) => <pre className={styles["pre"]}>{children}</pre>,
    ...components,
  };
}
