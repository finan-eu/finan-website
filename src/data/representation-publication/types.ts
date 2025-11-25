export interface Publication {
  title: string;
  journal: string;
  doi?: string;
  urn?: string;
  isbn?: string;
}

export interface PublicationData {
  country: string;
  publications: Publication[];
}
