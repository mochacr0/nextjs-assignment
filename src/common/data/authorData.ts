import { BlogAuthorModel } from "@/models/blogModels";

export const authors: BlogAuthorModel[] = [
  {
    name: "Jonathan Smith",
    avatarUrl: "/images/avatars/user-05.jpg",
    about: `Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga
          fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed
          ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.`,
    socialLinks: [
      { platform: "Facebook", url: "#" },
      { platform: "Twitter", url: "#" },
      { platform: "GooglePlus", url: "#" },
      { platform: "Instagram", url: "#" },
    ],
  },
];
