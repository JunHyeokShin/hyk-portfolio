import { projectListMock } from "@/mocks";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { PiGithubLogoLight, PiInstagramLogoLight } from "react-icons/pi";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <div className={styles["header-left"]}>
            <div className={styles["header-left-pretitle"]}>my finished</div>
            <div className={styles["header-left-title"]}>projects</div>
          </div>
          <div className={styles["header-right"]}>
            <div className={styles["header-right-icon-box"]}>
              <Link href="https://github.com/junhyeokshin" className={styles["header-right-icon"]}>
                <PiGithubLogoLight />
              </Link>
              <Link href="https://instagram.com/junhyeok_shin" className={styles["header-right-icon"]}>
                <PiInstagramLogoLight />
              </Link>
            </div>
            <div className={styles["header-right-email"]}>junhyeok001010@gmail.com</div>
          </div>
        </div>
        <div className={styles["content"]}>
          {projectListMock.map((projectListItem) => (
            <Link
              key={projectListItem.id}
              href={`/project/${projectListItem.id}`}
              className={styles["project-container"]}
              style={{ background: `${projectListItem.themeColor}`, textDecoration: "none" }}
            >
              <Image
                src={projectListItem.titleImage ? projectListItem.titleImage : ""}
                alt={projectListItem.title}
                width={1600}
                height={1200}
                className={styles["project-title-image"]}
              />
              <div className={styles["project-info-box"]}>
                <div className={styles["project-info"]}>
                  <div className={styles["project-title"]}>{projectListItem.title}</div>
                  <div className={styles["project-description"]}>{projectListItem.description}</div>
                </div>
                <button className={styles["button"]}>
                  <div className={styles["button-text"]}>view project</div>
                  <GoArrowUpRight className={styles["button-icon"]} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
