import Prismic from '@prismicio/client';

export default function getPrismicClient(req) {
  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACESS_TOKEN,
  });

  
  return prismic;
}

export const server = getPrismicClient ? 'http:localhost:3000' : 'https://rafaelalmendra.com';