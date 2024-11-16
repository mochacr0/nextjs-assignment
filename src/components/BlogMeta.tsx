import { BlogMetaModel } from "@/models/blogModels";

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
              <a key={index} href="">
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
