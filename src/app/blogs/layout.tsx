import CommentsSection from "@/components/blogs/Comments";

const BlogLayout = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">{children}</div>
      </div>
      <CommentsSection />
    </section>
  );
};

export default BlogLayout;
