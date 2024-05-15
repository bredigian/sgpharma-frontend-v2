export interface ISocialImage {
  ID: string;
  WELFARE_ID: string;
  URL: string;
}

export interface ISocial {
  ID: string;
  TITULO: string;
  DESCRIPCION: string;
  IMAGEN_PRINCIPAL: string;
  desarrollo_social_galeria: ISocialImage[];
}
