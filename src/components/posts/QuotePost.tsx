import { QuotePostModel as QuotePostProps } from "@/models/postModels";

const QuotePost: React.FC<QuotePostProps> = (props) => {
  return (
    <article className="brick entry format-quote animate-this">
      <div className="entry-thumb">
        <blockquote>
          <p>{props.quote}</p>

          <cite>{props.cite}</cite>
        </blockquote>
      </div>
    </article>
  );
};

export default QuotePost;
