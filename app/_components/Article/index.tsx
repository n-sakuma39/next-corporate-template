import styles from "./index.module.css";
import Category from "../Category";
import { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Image from "next/image";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}></h1>
      <p className={styles.description}></p>
      <div className="styles.meta">
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
          alt=""
          className={styles.thumbnail}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}
