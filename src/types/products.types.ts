export interface IProduct {
  ID: string;
  NOMBRE: string;
  CATEGORIA: string;
  DESCRIPCION: string;
  DOSIS_SUGERIDA: string;
  IMAGEN: string;
  INSERTO: string;
}

export interface IFavoriteProduct {
  id: string;
  producto: IProduct;
}
