const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const service = {
  jokes: (category: string) => `${apiUrl}/joke/${category}`,
  categories: `${apiUrl}/categories`,
};

export default service;
