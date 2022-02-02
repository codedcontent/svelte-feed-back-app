import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam asperiores reprehenderit autem hic quidem facere consequatur architecto fugit, recusandae ex molestias error esse neque, odit quod, a voluptatem eius.",
  },
  {
    id: 2,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam asperiores reprehenderit autem hic quidem facere consequatur architecto fugit, recusandae ex molestias error esse neque, odit quod, a voluptatem eius.",
  },
  {
    id: 3,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam asperiores reprehenderit autem hic quidem facere consequatur architecto fugit, recusandae ex molestias error esse neque, odit quod, a voluptatem eius.",
  },
]);
