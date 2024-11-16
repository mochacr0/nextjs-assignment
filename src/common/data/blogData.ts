import { BlogModel, BlogType } from "@/models/blogModels";
import { authors } from "./authorData";

const sampleBlogBody = `<p className="lead">
        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
        cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
        adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
        dolor irure velit commodo cillum sit nulla ullamco magna amet magna
        cupidatat qui labore cillum sit in tempor veniam consequat non laborum
        adipisicing aliqua ea nisi sint.
      </p>

      <p>
        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
        cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
        adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
        dolor irure velit commodo cillum sit nulla ullamco magna amet magna
        cupidatat qui labore cillum sit in tempor veniam consequat non laborum
        adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa
        occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim
        veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi
        non ut enim aliqua laborum mollit quis nostrud sed sed.
      </p>

      <p>
        <img src="/images/shutterbug.jpg" alt="" />
      </p>

      <h2>Large Heading</h2>

      <p>
        Harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime
        placeat facere possimus, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et.
      </p>

      <blockquote>
        <p>
          This is a simple example of a styled blockquote. A blockquote tag
          typically specifies a section that is quoted from another source of
          some sort, or highlighting text in your post.
        </p>
      </blockquote>

      <p>
        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae
        elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor
        voluptate enim veniam consequat occaecat fugiat in adipisicing in amet
        Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..
      </p>

      <h3>Smaller Heading</h3>

      <p>
        Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
        soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis
        dolor repellendus.
      </p>

      <p>
        Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
        soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis
        dolor repellendus.
      </p>

      <pre><code>code {
    font-size: 1.4rem;
    margin: 0 .2rem;
    padding: .2rem .6rem;
    white-space: nowrap;
    background: #F1F1F1;
    border: 1px solid #E1E1E1;	
    border-radius: 3px;
}</code></pre>

      <p>
        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa.
      </p>

      <ul>
        <li>
          Donec nulla non metus auctor fringilla.
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </li>
        <li>Donec nulla non metus auctor fringilla.</li>
        <li>Donec nulla non metus auctor fringilla.</li>
      </ul>

      <p>
        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae
        elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor
        voluptate enim veniam consequat occaecat fugiat in adipisicing in amet
        Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..
      </p>`;

export const blogs: BlogModel[] = [
  {
    id: "1",
    slug: "standard-blog",
    type: BlogType.STANDARD,
    title: "Standard Post",
    content: {
      meta: {
        title: "Hey, This Is A Standard Format Post.",
        publishedDate: "September 06, 2016",
        categories: ["Wordpress", "Design"],
      },
      tags: ["orci", "lectus", "varius", "turpis"],
      author: authors[0],
      body: sampleBlogBody,
    },
    headerMedia: {
      thumbnailUrl: "/images/thumbs/single/single-01.jpg",
    },
  },
  {
    id: "2",
    slug: "gallery-blog",
    type: BlogType.GALLERY,
    title: "Gallery Post",
    content: {
      meta: {
        title: "Hey, This Is a Gallery Format Post.",
        publishedDate: "August 25, 2016",
        categories: ["Branding", "Marketing"],
      },
      tags: ["gallery", "photos", "design", "creativity"],
      author: authors[0],
      body: sampleBlogBody,
    },
    headerMedia: {
      slideUrls: [
        "/images/thumbs/single/gallery/single-gallery-01.jpg",
        "/images/thumbs/single/gallery/single-gallery-02.jpg",
        "/images/thumbs/single/gallery/single-gallery-03.jpg",
      ],
    },
  },
  {
    id: "3",
    slug: "audio-blog",
    type: BlogType.AUDIO,
    title: "Audio Post",
    content: {
      meta: {
        title: "Hey, This Is a Audio Format Post.",
        publishedDate: "March 12, 2016",
        categories: ["Mockup", "Music"],
      },
      author: authors[0],
      body: sampleBlogBody,
      tags: ["audio", "music", "design", "creativity"],
    },
    headerMedia: {
      thumbnailUrl: "/images/thumbs/single/single-02.jpg",
      audioSourceUrl: "/media/AirReview-Landmarks-02-ChasingCorporate.mp3",
    },
  },
  {
    id: "4",
    slug: "video-blog",
    type: BlogType.VIDEO,
    title: "Video Post",
    content: {
      meta: {
        title: "Hey, This Is a Video Format Post.",
        publishedDate: "July 1, 2016",
        categories: ["Mockup", "Music"],
      },
      author: authors[0],
      body: sampleBlogBody,
      tags: ["audio", "music", "design", "creativity"],
    },
    headerMedia: {
      videoSourceUrl:
        "https://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0",
    },
  },
];

export const getBlogBySlug = (slug: string) => {
  return blogs.find((blog) => blog.slug === slug);
};
