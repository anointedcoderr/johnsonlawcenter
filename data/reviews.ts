export type Review = {
  author: string;
  rating: 5;
  excerpt: string;
};

export const reviews: Review[] = [
  {
    author: "Sara Fourney",
    rating: 5,
    excerpt: "We definitely recommend William Johnson as an attorney. He listened, explained our options clearly, and stayed in contact through the process.",
  },
  {
    author: "Mike S",
    rating: 5,
    excerpt: "Bill Johnson is awesome. Had a reckless speed charge and got it reduced. Straightforward to work with and easy to reach.",
  },
  {
    author: "Austin Daly",
    rating: 5,
    excerpt: "Bill Johnson is an excellent lawyer and a fantastic individual. He treated our situation with care and gave us honest guidance.",
  },
];

export const reviewNote =
  "Review excerpts are displayed for presentation. Connect the live Google review feed before launch.";
