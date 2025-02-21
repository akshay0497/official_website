export interface MSREANA {
  Id: number;
  Heading: string;
  Title: string;
  Description: string;
  Image: string;
  isActive: boolean;
  UpdatedOn: any;
  CreatedOn: any;
  ImageName: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
}