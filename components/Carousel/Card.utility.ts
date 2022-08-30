import { CardMediaPropsWithId } from '../Card/Card';

export const mapResponseToCard = (response: any): CardMediaPropsWithId[] => {
  if (!response) return [];
  return response.map((item: any) => {
    return {
      id: item.id,
      title: item.name,
      imageSrc: item.thumnail.url,
      imageAlt: item.thumnail.alt,
      href: undefined,
    };
  });
};
