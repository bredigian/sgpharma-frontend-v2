import { IFavoriteProduct, IProduct } from './products.types';

import { INews } from './news.types';
import { ISocial } from './social.types';

export type IResponse =
  | IProduct[]
  | IProduct
  | IFavoriteProduct[]
  | INews[]
  | ISocial[]
  | IErrorResponse;

export interface IErrorResponse {
  statusCode?: number;
  message?: string;
}
