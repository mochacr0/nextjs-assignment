import { BlogMetaModel } from "@/models/blogModels";
import { v4 as uuidv4 } from "uuid";

type BlogMetaProps = {
  meta: BlogMetaModel;
};

const BlogMeta = ({ meta }: BlogMetaProps) => {
  return (
    <>
      <h1 className="page-title">{meta.title}</h1>

      <ul className="entry-meta">
        <li className="date">{meta.publishedDate}</li>
        <li className="cat">
          {meta.categories.map((category, index) => {
            return (
              <a key={uuidv4()} href="">
                {category}
              </a>
            );
          })}
        </li>
      </ul>
    </>
  );
};

export default BlogMeta;
