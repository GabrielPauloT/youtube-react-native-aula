import { TrendingEnum } from '~/services/types';

export type TrendCategoryType = {
  activeCategory: TrendingEnum;
  setActiveCategory: (category: TrendingEnum) => void;
};
