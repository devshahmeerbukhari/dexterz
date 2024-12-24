export type Project = {
  name: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  slug: string;
  detail: string
};