import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type Additional = {
  __typename?: 'ADDITIONAL';
  result?: Maybe<CustomAdditional>;
  status?: Maybe<ResponseStatus>;
};

export type Additionals = {
  __typename?: 'ADDITIONALS';
  result?: Maybe<CustomAdditionalResult>;
  status?: Maybe<ResponseStatus>;
};

export type Address = {
  __typename?: 'ADDRESS';
  result?: Maybe<CustomAddress>;
  status?: Maybe<ResponseStatus>;
};

export type Addresses = {
  __typename?: 'ADDRESSES';
  result?: Maybe<CustomAddressResult>;
  status?: Maybe<ResponseStatus>;
};

export type Ainvoice = {
  __typename?: 'AINVOICE';
  result?: Maybe<CustomAdditionalInvoice>;
  status?: Maybe<ResponseStatus>;
};

export type Ainvoices = {
  __typename?: 'AINVOICES';
  result?: Maybe<CustomAdditionalInvoiceResult>;
  status?: Maybe<ResponseStatus>;
};

export type Article = {
  __typename?: 'ARTICLE';
  result?: Maybe<CustomArticle>;
  status?: Maybe<ResponseStatus>;
};

export type Articles = {
  __typename?: 'ARTICLES';
  result?: Maybe<CustomArticleResult>;
  status?: Maybe<ResponseStatus>;
};

export type Additional = {
  __typename?: 'Additional';
  MEDIA?: Maybe<Media>;
  PRODUCTS?: Maybe<Array<Product>>;
  _count: AdditionalCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdditionalCount = {
  __typename?: 'AdditionalCount';
  PRODUCTS: Scalars['Int'];
};

export type AdditionalCreateInput = {
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutAdditionalsInput>;
  PRODUCTS?: InputMaybe<ProductCreateNestedManyWithoutAdditionalsInput>;
  description?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  type?: InputMaybe<Scalars['String']>;
};

export type AdditionalCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<AdditionalWhereUniqueInput>>;
};

export type AdditionalInvoiceCreateInput = {
  available?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  optional?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
};

export type AdditionalInvoiceOrderByWithRelationInput = {
  available?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  optional?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum AdditionalInvoiceScalarFieldEnum {
  Available = 'available',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Optional = 'optional',
  Price = 'price',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AdditionalInvoiceUpdateInput = {
  available?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  optional?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
};

export type AdditionalInvoiceWhereInput = {
  AND?: InputMaybe<Array<AdditionalInvoiceWhereInput>>;
  NOT?: InputMaybe<Array<AdditionalInvoiceWhereInput>>;
  OR?: InputMaybe<Array<AdditionalInvoiceWhereInput>>;
  available?: InputMaybe<StringListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  optional?: InputMaybe<BoolFilter>;
  price?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdditionalInvoiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AdditionalListRelationFilter = {
  every?: InputMaybe<AdditionalWhereInput>;
  none?: InputMaybe<AdditionalWhereInput>;
  some?: InputMaybe<AdditionalWhereInput>;
};

export type AdditionalOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdditionalOrderByWithRelationInput = {
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  PRODUCTS?: InputMaybe<ProductOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum AdditionalScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Media = 'media',
  Order = 'order',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AdditionalUpdateInput = {
  MEDIA?: InputMaybe<MediaUpdateOneWithoutAdditionalsNestedInput>;
  PRODUCTS?: InputMaybe<ProductUpdateManyWithoutAdditionalsNestedInput>;
  description?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  type?: InputMaybe<Scalars['String']>;
};

export type AdditionalUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<AdditionalWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AdditionalWhereUniqueInput>>;
};

export type AdditionalWhereInput = {
  AND?: InputMaybe<Array<AdditionalWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<AdditionalWhereInput>>;
  OR?: InputMaybe<Array<AdditionalWhereInput>>;
  PRODUCTS?: InputMaybe<ProductListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  media?: InputMaybe<IntFilter>;
  order?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdditionalWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Address = {
  __typename?: 'Address';
  CITY?: Maybe<City>;
  DELIVERIES?: Maybe<Array<Delivery>>;
  PROVINCE?: Maybe<Province>;
  USER?: Maybe<User>;
  _count: AddressCount;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
  zip?: Maybe<Scalars['String']>;
};

export type AddressCount = {
  __typename?: 'AddressCount';
  DELIVERIES: Scalars['Int'];
};

export type AddressCreateInput = {
  CITY?: InputMaybe<CityCreateNestedOneWithoutAddressesInput>;
  PROVINCE?: InputMaybe<ProvinceCreateNestedOneWithoutAddressesInput>;
  USER?: InputMaybe<UserCreateNestedOneWithoutAddressesInput>;
  address?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  zip?: InputMaybe<Scalars['String']>;
};

export type AddressCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AddressWhereUniqueInput>>;
};

export type AddressCreateNestedOneWithoutDeliveriesInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
};

export type AddressListRelationFilter = {
  every?: InputMaybe<AddressWhereInput>;
  none?: InputMaybe<AddressWhereInput>;
  some?: InputMaybe<AddressWhereInput>;
};

export type AddressOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AddressOrderByWithRelationInput = {
  CITY?: InputMaybe<CityOrderByWithRelationInput>;
  PROVINCE?: InputMaybe<ProvinceOrderByWithRelationInput>;
  USER?: InputMaybe<UserOrderByWithRelationInput>;
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  province?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
};

export enum AddressScalarFieldEnum {
  Address = 'address',
  City = 'city',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  Name = 'name',
  Number = 'number',
  Province = 'province',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  User = 'user',
  Zip = 'zip'
}

export type AddressUpdateInput = {
  CITY?: InputMaybe<CityUpdateOneWithoutAddressesNestedInput>;
  PROVINCE?: InputMaybe<ProvinceUpdateOneWithoutAddressesNestedInput>;
  USER?: InputMaybe<UserUpdateOneWithoutAddressesNestedInput>;
  address?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  zip?: InputMaybe<Scalars['String']>;
};

export type AddressUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AddressWhereUniqueInput>>;
};

export type AddressUpdateOneWithoutDeliveriesNestedInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  CITY?: InputMaybe<CityRelationFilter>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  PROVINCE?: InputMaybe<ProvinceRelationFilter>;
  USER?: InputMaybe<UserRelationFilter>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  province?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<IntFilter>;
  zip?: InputMaybe<StringFilter>;
};

export type AddressWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Article = {
  __typename?: 'Article';
  COMMENTS?: Maybe<Array<Comment>>;
  FAQS?: Maybe<Array<Faq>>;
  LABELS?: Maybe<Array<Label>>;
  MEDIA?: Maybe<Media>;
  RESERVES?: Maybe<Array<Reserve>>;
  SEO?: Maybe<Seo>;
  TAGS?: Maybe<Array<Tag>>;
  URLS?: Maybe<Array<Url>>;
  _count: ArticleCount;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  seo?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  summery?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};

export type ArticleCount = {
  __typename?: 'ArticleCount';
  COMMENTS: Scalars['Int'];
  FAQS: Scalars['Int'];
  LABELS: Scalars['Int'];
  RESERVES: Scalars['Int'];
  TAGS: Scalars['Int'];
  URLS: Scalars['Int'];
};

export type ArticleCreateInput = {
  FAQS?: InputMaybe<FaqCreateNestedManyWithoutArticlesInput>;
  LABELS?: InputMaybe<LabelCreateNestedManyWithoutArticlesInput>;
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutArticleInput>;
  SEO?: InputMaybe<SeoCreateNestedOneWithoutArticlesInput>;
  TAGS?: InputMaybe<TagCreateNestedManyWithoutArticlesInput>;
  URLS?: InputMaybe<UrlCreateNestedManyWithoutArticlesInput>;
  content?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  summery?: InputMaybe<Scalars['String']>;
};

export type ArticleCreateNestedManyWithoutFaqsInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleCreateNestedManyWithoutUrlsInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
};

export type ArticleCreateNestedOneWithoutReservesInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
};

export type ArticleListRelationFilter = {
  every?: InputMaybe<ArticleWhereInput>;
  none?: InputMaybe<ArticleWhereInput>;
  some?: InputMaybe<ArticleWhereInput>;
};

export type ArticleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ArticleOrderByWithRelationInput = {
  FAQS?: InputMaybe<FaqOrderByRelationAggregateInput>;
  LABELS?: InputMaybe<LabelOrderByRelationAggregateInput>;
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  SEO?: InputMaybe<SeoOrderByWithRelationInput>;
  TAGS?: InputMaybe<TagOrderByRelationAggregateInput>;
  URLS?: InputMaybe<UrlOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  enName?: InputMaybe<SortOrder>;
  faName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  summery?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ArticleRelationFilter = {
  is?: InputMaybe<ArticleWhereInput>;
  isNot?: InputMaybe<ArticleWhereInput>;
};

export enum ArticleScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EnName = 'enName',
  FaName = 'faName',
  Id = 'id',
  Media = 'media',
  Seo = 'seo',
  Slug = 'slug',
  Status = 'status',
  Summery = 'summery',
  UpdatedAt = 'updatedAt',
  Views = 'views'
}

export type ArticleUpdateInput = {
  FAQS?: InputMaybe<FaqUpdateManyWithoutArticlesNestedInput>;
  LABELS?: InputMaybe<LabelUpdateManyWithoutArticlesNestedInput>;
  MEDIA?: InputMaybe<MediaUpdateOneWithoutArticleNestedInput>;
  SEO?: InputMaybe<SeoUpdateOneWithoutArticlesNestedInput>;
  TAGS?: InputMaybe<TagUpdateManyWithoutArticlesNestedInput>;
  URLS?: InputMaybe<UrlUpdateManyWithoutArticlesNestedInput>;
  content?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  summery?: InputMaybe<Scalars['String']>;
};

export type ArticleUpdateManyWithoutFaqsNestedInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleUpdateManyWithoutTagsNestedInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleUpdateManyWithoutUrlsNestedInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleUpdateOneWithoutCommentsNestedInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ArticleUpdateOneWithoutReservesNestedInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ArticleWhereInput = {
  AND?: InputMaybe<Array<ArticleWhereInput>>;
  FAQS?: InputMaybe<FaqListRelationFilter>;
  LABELS?: InputMaybe<LabelListRelationFilter>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<ArticleWhereInput>>;
  OR?: InputMaybe<Array<ArticleWhereInput>>;
  SEO?: InputMaybe<SeoRelationFilter>;
  TAGS?: InputMaybe<TagListRelationFilter>;
  URLS?: InputMaybe<UrlListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  enName?: InputMaybe<StringFilter>;
  faName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  media?: InputMaybe<IntFilter>;
  seo?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  summery?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ArticleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Brand = {
  __typename?: 'BRAND';
  result?: Maybe<CustomBrand>;
  status?: Maybe<ResponseStatus>;
};

export type Brands = {
  __typename?: 'BRANDS';
  result?: Maybe<CustomBrandResult>;
  status?: Maybe<ResponseStatus>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BoolFilter>;
};

export type Brand = {
  __typename?: 'Brand';
  MEDIA?: Maybe<Media>;
  PRODUCTS?: Maybe<Array<Product>>;
  _count: BrandCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BrandCount = {
  __typename?: 'BrandCount';
  PRODUCTS: Scalars['Int'];
};

export type BrandCreateInput = {
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutBrandsInput>;
  PRODUCTS?: InputMaybe<ProductCreateNestedManyWithoutBrandInput>;
  description?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type BrandCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<BrandWhereUniqueInput>;
};

export type BrandOrderByWithRelationInput = {
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  PRODUCTS?: InputMaybe<ProductOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  enName?: InputMaybe<SortOrder>;
  faName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BrandRelationFilter = {
  is?: InputMaybe<BrandWhereInput>;
  isNot?: InputMaybe<BrandWhereInput>;
};

export enum BrandScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EnName = 'enName',
  FaName = 'faName',
  Id = 'id',
  Label = 'label',
  Media = 'media',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type BrandUpdateInput = {
  MEDIA?: InputMaybe<MediaUpdateOneWithoutBrandsNestedInput>;
  PRODUCTS?: InputMaybe<ProductUpdateManyWithoutBrandNestedInput>;
  description?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type BrandUpdateOneWithoutProductsNestedInput = {
  connect?: InputMaybe<BrandWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type BrandWhereInput = {
  AND?: InputMaybe<Array<BrandWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<BrandWhereInput>>;
  OR?: InputMaybe<Array<BrandWhereInput>>;
  PRODUCTS?: InputMaybe<ProductListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  enName?: InputMaybe<StringFilter>;
  faName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  label?: InputMaybe<StringFilter>;
  media?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BrandWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'CATEGORY';
  result?: Maybe<CustomCategory>;
  status?: Maybe<ResponseStatus>;
};

export type Categorys = {
  __typename?: 'CATEGORYS';
  result?: Maybe<CustomCategoryResult>;
  status?: Maybe<ResponseStatus>;
};

export type Cities = {
  __typename?: 'CITIES';
  result?: Maybe<CustomCityResult>;
  status?: Maybe<ResponseStatus>;
};

export type City = {
  __typename?: 'CITY';
  result?: Maybe<CustomCity>;
  status?: Maybe<ResponseStatus>;
};

export type Comment = {
  __typename?: 'COMMENT';
  result?: Maybe<CustomComment>;
  status?: Maybe<ResponseStatus>;
};

export type Comments = {
  __typename?: 'COMMENTS';
  result?: Maybe<CustomCommentResult>;
  status?: Maybe<ResponseStatus>;
};

export type Category = {
  __typename?: 'Category';
  FAQS?: Maybe<Array<Faq>>;
  LABELS?: Maybe<Array<Label>>;
  MEDIA?: Maybe<Media>;
  PARENT?: Maybe<Category>;
  PRODUCTS?: Maybe<Array<Product>>;
  SEO?: Maybe<Seo>;
  SUBCATEGORIES?: Maybe<Array<Category>>;
  TAGS?: Maybe<Array<Tag>>;
  URLS?: Maybe<Array<Url>>;
  _count: CategoryCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  enTitle?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  faTitle?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  seo?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  FAQS: Scalars['Int'];
  LABELS: Scalars['Int'];
  PRODUCTS: Scalars['Int'];
  SUBCATEGORIES: Scalars['Int'];
  TAGS: Scalars['Int'];
  URLS: Scalars['Int'];
};

export type CategoryCreateInput = {
  FAQS?: InputMaybe<FaqCreateNestedManyWithoutCategoriesInput>;
  LABELS?: InputMaybe<LabelCreateNestedManyWithoutCategoriesInput>;
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutCategoriesInput>;
  PARENT?: InputMaybe<CategoryCreateNestedOneWithoutSubcategoriesInput>;
  SEO?: InputMaybe<SeoCreateNestedOneWithoutCategoriesInput>;
  TAGS?: InputMaybe<TagCreateNestedManyWithoutCategoriesInput>;
  URLS?: InputMaybe<UrlCreateNestedManyWithoutCategoriesInput>;
  description?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  enTitle?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  faTitle?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type CategoryCreateNestedManyWithoutFaqsInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateNestedManyWithoutUrlsInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
};

export type CategoryCreateNestedOneWithoutSubcategoriesInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  FAQS?: InputMaybe<FaqOrderByRelationAggregateInput>;
  LABELS?: InputMaybe<LabelOrderByRelationAggregateInput>;
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  PARENT?: InputMaybe<CategoryOrderByWithRelationInput>;
  SEO?: InputMaybe<SeoOrderByWithRelationInput>;
  TAGS?: InputMaybe<TagOrderByRelationAggregateInput>;
  URLS?: InputMaybe<UrlOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  enName?: InputMaybe<SortOrder>;
  enTitle?: InputMaybe<SortOrder>;
  faName?: InputMaybe<SortOrder>;
  faTitle?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  parent?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EnName = 'enName',
  EnTitle = 'enTitle',
  FaName = 'faName',
  FaTitle = 'faTitle',
  Id = 'id',
  Media = 'media',
  Order = 'order',
  Parent = 'parent',
  Seo = 'seo',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type CategoryUpdateInput = {
  FAQS?: InputMaybe<FaqUpdateManyWithoutCategoriesNestedInput>;
  LABELS?: InputMaybe<LabelUpdateManyWithoutCategoriesNestedInput>;
  MEDIA?: InputMaybe<MediaUpdateOneWithoutCategoriesNestedInput>;
  PARENT?: InputMaybe<CategoryUpdateOneWithoutSubcategoriesNestedInput>;
  SEO?: InputMaybe<SeoUpdateOneWithoutCategoriesNestedInput>;
  TAGS?: InputMaybe<TagUpdateManyWithoutCategoriesNestedInput>;
  URLS?: InputMaybe<UrlUpdateManyWithoutCategoriesNestedInput>;
  description?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  enTitle?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  faTitle?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type CategoryUpdateManyWithoutFaqsNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryUpdateManyWithoutTagsNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryUpdateManyWithoutUrlsNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryUpdateOneWithoutProductsNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryUpdateOneWithoutSubcategoriesNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  FAQS?: InputMaybe<FaqListRelationFilter>;
  LABELS?: InputMaybe<LabelListRelationFilter>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  PARENT?: InputMaybe<CategoryRelationFilter>;
  SEO?: InputMaybe<SeoRelationFilter>;
  TAGS?: InputMaybe<TagListRelationFilter>;
  URLS?: InputMaybe<UrlListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  enName?: InputMaybe<StringFilter>;
  enTitle?: InputMaybe<StringFilter>;
  faName?: InputMaybe<StringFilter>;
  faTitle?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  media?: InputMaybe<IntFilter>;
  order?: InputMaybe<IntFilter>;
  parent?: InputMaybe<IntFilter>;
  seo?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type City = {
  __typename?: 'City';
  PROVINCE?: Maybe<Province>;
  _count: CityCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  province?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityCount = {
  __typename?: 'CityCount';
  ADDRESSES: Scalars['Int'];
};

export type CityCreateInput = {
  PROVINCE?: InputMaybe<ProvinceCreateNestedOneWithoutCitiesInput>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type CityCreateNestedManyWithoutProvinceInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
};

export type CityCreateNestedOneWithoutAddressesInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
};

export type CityListRelationFilter = {
  every?: InputMaybe<CityWhereInput>;
  none?: InputMaybe<CityWhereInput>;
  some?: InputMaybe<CityWhereInput>;
};

export type CityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CityOrderByWithRelationInput = {
  PROVINCE?: InputMaybe<ProvinceOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  enName?: InputMaybe<SortOrder>;
  faName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  province?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CityRelationFilter = {
  is?: InputMaybe<CityWhereInput>;
  isNot?: InputMaybe<CityWhereInput>;
};

export enum CityScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EnName = 'enName',
  FaName = 'faName',
  Id = 'id',
  Province = 'province',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type CityUpdateInput = {
  PROVINCE?: InputMaybe<ProvinceUpdateOneWithoutCitiesNestedInput>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type CityUpdateManyWithoutProvinceNestedInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CityWhereUniqueInput>>;
};

export type CityUpdateOneWithoutAddressesNestedInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
  PROVINCE?: InputMaybe<ProvinceRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  enName?: InputMaybe<StringFilter>;
  faName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  province?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Comment = {
  __typename?: 'Comment';
  IARTICLE?: Maybe<Article>;
  IPRODUCT?: Maybe<Product>;
  PARENT?: Maybe<Comment>;
  SUBCOMMENTS?: Maybe<Array<Comment>>;
  USER?: Maybe<User>;
  _count: CommentCount;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  iarticle?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  iproduct?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type CommentCount = {
  __typename?: 'CommentCount';
  SUBCOMMENTS: Scalars['Int'];
};

export type CommentCreateInput = {
  IARTICLE?: InputMaybe<ArticleCreateNestedOneWithoutCommentsInput>;
  IPRODUCT?: InputMaybe<ProductCreateNestedOneWithoutCommentsInput>;
  PARENT?: InputMaybe<CommentCreateNestedOneWithoutSubcommentsInput>;
  USER?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
  comment?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<StatusEnum>;
};

export type CommentCreateNestedOneWithoutSubcommentsInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
};

export type CommentOrderByWithRelationInput = {
  IARTICLE?: InputMaybe<ArticleOrderByWithRelationInput>;
  IPRODUCT?: InputMaybe<ProductOrderByWithRelationInput>;
  PARENT?: InputMaybe<CommentOrderByWithRelationInput>;
  USER?: InputMaybe<UserOrderByWithRelationInput>;
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  iarticle?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  iproduct?: InputMaybe<SortOrder>;
  parent?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<SortOrder>;
};

export type CommentRelationFilter = {
  is?: InputMaybe<CommentWhereInput>;
  isNot?: InputMaybe<CommentWhereInput>;
};

export enum CommentScalarFieldEnum {
  Comment = 'comment',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Iarticle = 'iarticle',
  Id = 'id',
  Iproduct = 'iproduct',
  Parent = 'parent',
  Rating = 'rating',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  User = 'user'
}

export type CommentUpdateInput = {
  IARTICLE?: InputMaybe<ArticleUpdateOneWithoutCommentsNestedInput>;
  IPRODUCT?: InputMaybe<ProductUpdateOneWithoutCommentsNestedInput>;
  PARENT?: InputMaybe<CommentUpdateOneWithoutSubcommentsNestedInput>;
  USER?: InputMaybe<UserUpdateOneWithoutCommentsNestedInput>;
  comment?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<StatusEnum>;
};

export type CommentUpdateOneWithoutSubcommentsNestedInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  IARTICLE?: InputMaybe<ArticleRelationFilter>;
  IPRODUCT?: InputMaybe<ProductRelationFilter>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  PARENT?: InputMaybe<CommentRelationFilter>;
  USER?: InputMaybe<UserRelationFilter>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  iarticle?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  iproduct?: InputMaybe<IntFilter>;
  parent?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<IntFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CustomAdditional = {
  __typename?: 'CustomAdditional';
  MEDIA?: Maybe<Media>;
  PRODUCTS?: Maybe<Array<Product>>;
  _count: AdditionalCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomAdditionalInvoice = {
  __typename?: 'CustomAdditionalInvoice';
  available?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  optional?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomAdditionalInvoiceResult = {
  __typename?: 'CustomAdditionalInvoiceResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomAdditionalInvoice>>;
};

export type CustomAdditionalResult = {
  __typename?: 'CustomAdditionalResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomAdditional>>;
};

export type CustomAddress = {
  __typename?: 'CustomAddress';
  CITY?: Maybe<City>;
  DELIVERIES?: Maybe<Array<Delivery>>;
  PROVINCE?: Maybe<Province>;
  USER?: Maybe<User>;
  _count: AddressCount;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
  zip?: Maybe<Scalars['String']>;
};

export type CustomAddressResult = {
  __typename?: 'CustomAddressResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomAddress>>;
};

export type CustomArticle = {
  __typename?: 'CustomArticle';
  COMMENTS?: Maybe<Array<Comment>>;
  FAQS?: Maybe<Array<Faq>>;
  LABELS?: Maybe<Array<Label>>;
  MEDIA?: Maybe<Media>;
  RESERVES?: Maybe<Array<Reserve>>;
  SEO?: Maybe<Seo>;
  TAGS?: Maybe<Array<Tag>>;
  URLS?: Maybe<Array<Url>>;
  _count: ArticleCount;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  seo?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  summery?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};

export type CustomArticleResult = {
  __typename?: 'CustomArticleResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomArticle>>;
};

export type CustomAuth = {
  __typename?: 'CustomAuth';
  USER?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  inAt?: Maybe<Scalars['DateTime']>;
  outAt?: Maybe<Scalars['DateTime']>;
  secret?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type CustomAuthResult = {
  __typename?: 'CustomAuthResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomAuth>>;
};

export type CustomBrand = {
  __typename?: 'CustomBrand';
  MEDIA?: Maybe<Media>;
  PRODUCTS?: Maybe<Array<Product>>;
  _count: BrandCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomBrandResult = {
  __typename?: 'CustomBrandResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomBrand>>;
};

export type CustomCategory = {
  __typename?: 'CustomCategory';
  FAQS?: Maybe<Array<Faq>>;
  LABELS?: Maybe<Array<Label>>;
  MEDIA?: Maybe<Media>;
  PARENT?: Maybe<Category>;
  PRODUCTS?: Maybe<Array<Product>>;
  SEO?: Maybe<Seo>;
  SUBCATEGORIES?: Maybe<Array<Category>>;
  TAGS?: Maybe<Array<Tag>>;
  URLS?: Maybe<Array<Url>>;
  _count: CategoryCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  enTitle?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  faTitle?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  seo?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomCategoryResult = {
  __typename?: 'CustomCategoryResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomCategory>>;
};

export type CustomCity = {
  __typename?: 'CustomCity';
  PROVINCE?: Maybe<Province>;
  _count: CityCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  province?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomCityResult = {
  __typename?: 'CustomCityResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomCity>>;
};

export type CustomComment = {
  __typename?: 'CustomComment';
  IARTICLE?: Maybe<Article>;
  IPRODUCT?: Maybe<Product>;
  PARENT?: Maybe<Comment>;
  SUBCOMMENTS?: Maybe<Array<Comment>>;
  USER?: Maybe<User>;
  _count: CommentCount;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  iarticle?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  iproduct?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type CustomCommentResult = {
  __typename?: 'CustomCommentResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomComment>>;
};

export type CustomDelivery = {
  __typename?: 'CustomDelivery';
  ADDRESS?: Maybe<Address>;
  METHOD?: Maybe<DeliveryMethod>;
  ORDER?: Maybe<Array<Order>>;
  _count: DeliveryCount;
  address?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  method?: Maybe<Scalars['Int']>;
  status?: Maybe<DeliveryStatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomDeliveryMethod = {
  __typename?: 'CustomDeliveryMethod';
  Delivery?: Maybe<Array<Delivery>>;
  MEDIA?: Maybe<Media>;
  _count: DeliveryMethodCount;
  available?: Maybe<Array<Scalars['String']>>;
  cities?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deliveryDate?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  requestDate?: Maybe<Scalars['String']>;
  requestTime?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomDeliveryMethodResult = {
  __typename?: 'CustomDeliveryMethodResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomDeliveryMethod>>;
};

export type CustomDeliveryResult = {
  __typename?: 'CustomDeliveryResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomDelivery>>;
};

export type CustomDiscount = {
  __typename?: 'CustomDiscount';
  MEDIA?: Maybe<Media>;
  _count: DiscountCount;
  amount?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<DiscountTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  usable?: Maybe<Scalars['Int']>;
};

export type CustomDiscountResult = {
  __typename?: 'CustomDiscountResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomDiscount>>;
};

export type CustomDoorway = {
  __typename?: 'CustomDoorway';
  MEDIA?: Maybe<Media>;
  _count: DoorwayCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  external?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  internal?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  type?: Maybe<DoorwayTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomDoorwayResult = {
  __typename?: 'CustomDoorwayResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomDoorway>>;
};

export type CustomFaq = {
  __typename?: 'CustomFAQ';
  ARTICLES?: Maybe<Array<Article>>;
  CATEGORIES?: Maybe<Array<Category>>;
  PRODUTCS?: Maybe<Array<Product>>;
  _count: FaqCount;
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  question?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomFaqResult = {
  __typename?: 'CustomFAQResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomFaq>>;
};

export type CustomFinancial = {
  __typename?: 'CustomFinancial';
  DOORWAY?: Maybe<Doorway>;
  ORDER?: Maybe<Order>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  doorway?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  resnum?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomFinancialResult = {
  __typename?: 'CustomFinancialResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomFinancial>>;
};

export type CustomFooter = {
  __typename?: 'CustomFooter';
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomFooterResult = {
  __typename?: 'CustomFooterResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomFooter>>;
};

export type CustomHeader = {
  __typename?: 'CustomHeader';
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomHeaderResult = {
  __typename?: 'CustomHeaderResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomHeader>>;
};

export type CustomInline = {
  __typename?: 'CustomInline';
  MEDIA?: Maybe<Media>;
  PRODUCTS?: Maybe<Array<Product>>;
  _count: InlineCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type CustomInlineResult = {
  __typename?: 'CustomInlineResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomInline>>;
};

export type CustomLabel = {
  __typename?: 'CustomLabel';
  MEDIA?: Maybe<Media>;
  _count: LabelCount;
  bgColor?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  txColor?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomLabelResult = {
  __typename?: 'CustomLabelResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomLabel>>;
};

export type CustomMedia = {
  __typename?: 'CustomMedia';
  _count: MediaCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomMediaResult = {
  __typename?: 'CustomMediaResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomMedia>>;
};

export type CustomNotification = {
  __typename?: 'CustomNotification';
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  finish?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomNotificationResult = {
  __typename?: 'CustomNotificationResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomNotification>>;
};

export type CustomOption = {
  __typename?: 'CustomOption';
  MEDIA?: Maybe<Media>;
  PRODUCTS?: Maybe<Array<Product>>;
  _count: OptionCount;
  amount?: Maybe<Scalars['Int']>;
  amountType?: Maybe<OptionAmountTypeEnum>;
  card?: Maybe<Scalars['Boolean']>;
  colorName?: Maybe<Scalars['String']>;
  colorValue?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['String']>;
  optionDescription?: Maybe<Scalars['String']>;
  optionTitle?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  titleDescription?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type CustomOptionResult = {
  __typename?: 'CustomOptionResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomOption>>;
};

export type CustomOrder = {
  __typename?: 'CustomOrder';
  DELIVERY?: Maybe<Delivery>;
  DISCOUNT?: Maybe<Discount>;
  FINANCIALS?: Maybe<Array<Financial>>;
  LINES?: Maybe<Array<Line>>;
  USER?: Maybe<User>;
  _count: OrderCount;
  additionalPrice?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  delivery?: Maybe<Scalars['Int']>;
  deliveryPrice?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  discountPrice?: Maybe<Scalars['Int']>;
  finalPrice?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  paidPrice?: Maybe<Scalars['Int']>;
  status?: Maybe<OrderStatusEnum>;
  totalPrice?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type CustomOrderResult = {
  __typename?: 'CustomOrderResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomOrder>>;
};

export type CustomPage = {
  __typename?: 'CustomPage';
  SEO?: Maybe<Seo>;
  content?: Maybe<Array<Scalars['JSON']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  publishAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['DateTime']>;
  status?: Maybe<StatusEnum>;
  theme?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomPageResult = {
  __typename?: 'CustomPageResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomPage>>;
};

export type CustomPrice = {
  __typename?: 'CustomPrice';
  PRODUCT?: Maybe<Product>;
  USER?: Maybe<User>;
  _count: PriceCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  price?: Maybe<Scalars['Int']>;
  product?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  tax?: Maybe<Scalars['Int']>;
  uiPrice?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type CustomPriceResult = {
  __typename?: 'CustomPriceResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomPrice>>;
};

export type CustomProduct = {
  __typename?: 'CustomProduct';
  ADDITIONALS?: Maybe<Array<Additional>>;
  BRAND?: Maybe<Brand>;
  CATEGORY?: Maybe<Category>;
  COMMENTS?: Maybe<Array<Comment>>;
  FAQS?: Maybe<Array<Faq>>;
  INLINES?: Maybe<Array<Inline>>;
  LABELS?: Maybe<Array<Label>>;
  MEDIAS?: Maybe<Array<Media>>;
  OPTIONS?: Maybe<Array<Option>>;
  PRICES?: Maybe<Array<Price>>;
  Reserve?: Maybe<Array<Reserve>>;
  SEO?: Maybe<Seo>;
  SKU?: Maybe<Scalars['String']>;
  TAGS?: Maybe<Array<Tag>>;
  URLS?: Maybe<Array<Url>>;
  _count: ProductCount;
  brand?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['Int']>;
  colorName?: Maybe<Scalars['String']>;
  colorValue?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  enTitle?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  faTitle?: Maybe<Scalars['String']>;
  generationYear?: Maybe<Scalars['String']>;
  gradient?: Maybe<Array<Scalars['String']>>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  inlineSpecification?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  originalLink?: Maybe<Scalars['String']>;
  originalPrice?: Maybe<Scalars['Int']>;
  partNumber?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  seo?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  specification?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type CustomProductResult = {
  __typename?: 'CustomProductResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomProduct>>;
};

export type CustomProvince = {
  __typename?: 'CustomProvince';
  CITIES?: Maybe<Array<City>>;
  _count: ProvinceCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomProvinceResult = {
  __typename?: 'CustomProvinceResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomProvince>>;
};

export type CustomReserve = {
  __typename?: 'CustomReserve';
  ARTICLE?: Maybe<Article>;
  PRODUCT?: Maybe<Product>;
  USER?: Maybe<User>;
  article?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  product?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type CustomReserveResult = {
  __typename?: 'CustomReserveResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomReserve>>;
};

export type CustomRole = {
  __typename?: 'CustomRole';
  USERS?: Maybe<Array<User>>;
  _count: RoleCount;
  accesses?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomRoleResult = {
  __typename?: 'CustomRoleResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomRole>>;
};

export type CustomSeo = {
  __typename?: 'CustomSEO';
  _count: SeoCount;
  alias?: Maybe<Scalars['String']>;
  canonicalURL?: Maybe<Scalars['String']>;
  changefreq?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  follow?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  index?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Scalars['String']>>;
  metaDescription?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Float']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomSeoResult = {
  __typename?: 'CustomSEOResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomSeo>>;
};

export type CustomSetting = {
  __typename?: 'CustomSetting';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type CustomSettingResult = {
  __typename?: 'CustomSettingResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomSetting>>;
};

export type CustomTag = {
  __typename?: 'CustomTag';
  ARTICLES?: Maybe<Array<Article>>;
  CATEGORIES?: Maybe<Array<Category>>;
  PRODUTCS?: Maybe<Array<Product>>;
  _count: TagCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  follow?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  index?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomTagResult = {
  __typename?: 'CustomTagResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomTag>>;
};

export type CustomUrl = {
  __typename?: 'CustomURL';
  ARTICLES?: Maybe<Array<Article>>;
  CATEGORIES?: Maybe<Array<Category>>;
  PRODUTCS?: Maybe<Array<Product>>;
  _count: UrlCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  input?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};

export type CustomUrlResult = {
  __typename?: 'CustomURLResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomUrl>>;
};

export type CustomUser = {
  __typename?: 'CustomUser';
  ADDRESSES?: Maybe<Array<Address>>;
  MEDIA?: Maybe<Media>;
  ORDERS?: Maybe<Array<Order>>;
  RESERVES?: Maybe<Array<Reserve>>;
  ROLES?: Maybe<Array<Role>>;
  _count: UserCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  nationalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomUserResult = {
  __typename?: 'CustomUserResult';
  _count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<CustomUser>>;
};

export type Delivery = {
  __typename?: 'DELIVERY';
  result?: Maybe<CustomDelivery>;
  status?: Maybe<ResponseStatus>;
};

export type Deliverymethod = {
  __typename?: 'DELIVERYMETHOD';
  result?: Maybe<CustomDeliveryMethod>;
  status?: Maybe<ResponseStatus>;
};

export type Deliverymethods = {
  __typename?: 'DELIVERYMETHODS';
  result?: Maybe<CustomDeliveryMethodResult>;
  status?: Maybe<ResponseStatus>;
};

export type Deliverys = {
  __typename?: 'DELIVERYS';
  result?: Maybe<CustomDeliveryResult>;
  status?: Maybe<ResponseStatus>;
};

export type Discount = {
  __typename?: 'DISCOUNT';
  result?: Maybe<CustomDiscount>;
  status?: Maybe<ResponseStatus>;
};

export type Discounts = {
  __typename?: 'DISCOUNTS';
  result?: Maybe<CustomDiscountResult>;
  status?: Maybe<ResponseStatus>;
};

export type Doorway = {
  __typename?: 'DOORWAY';
  result?: Maybe<CustomDoorway>;
  status?: Maybe<ResponseStatus>;
};

export type Doorways = {
  __typename?: 'DOORWAYS';
  result?: Maybe<CustomDoorwayResult>;
  status?: Maybe<ResponseStatus>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Delivery = {
  __typename?: 'Delivery';
  ADDRESS?: Maybe<Address>;
  METHOD?: Maybe<DeliveryMethod>;
  ORDER?: Maybe<Array<Order>>;
  _count: DeliveryCount;
  address?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  method?: Maybe<Scalars['Int']>;
  status?: Maybe<DeliveryStatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryCount = {
  __typename?: 'DeliveryCount';
  ORDER: Scalars['Int'];
};

export type DeliveryCreateInput = {
  ADDRESS?: InputMaybe<AddressCreateNestedOneWithoutDeliveriesInput>;
  METHOD?: InputMaybe<DeliveryMethodCreateNestedOneWithoutDeliveryInput>;
  status?: InputMaybe<DeliveryStatusEnum>;
};

export type DeliveryCreateNestedOneWithoutOrderInput = {
  connect?: InputMaybe<DeliveryWhereUniqueInput>;
};

export type DeliveryMethod = {
  __typename?: 'DeliveryMethod';
  Delivery?: Maybe<Array<Delivery>>;
  MEDIA?: Maybe<Media>;
  _count: DeliveryMethodCount;
  available?: Maybe<Array<Scalars['String']>>;
  cities?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deliveryDate?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  requestDate?: Maybe<Scalars['String']>;
  requestTime?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryMethodCount = {
  __typename?: 'DeliveryMethodCount';
  Delivery: Scalars['Int'];
};

export type DeliveryMethodCreateInput = {
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutDeliveriesInput>;
  available?: InputMaybe<Array<Scalars['String']>>;
  cities?: InputMaybe<Array<Scalars['String']>>;
  deliveryDate?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  requestDate?: InputMaybe<Scalars['String']>;
  requestTime?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type DeliveryMethodCreateNestedOneWithoutDeliveryInput = {
  connect?: InputMaybe<DeliveryMethodWhereUniqueInput>;
};

export type DeliveryMethodOrderByWithRelationInput = {
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  available?: InputMaybe<SortOrder>;
  cities?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  deliveryDate?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  requestDate?: InputMaybe<SortOrder>;
  requestTime?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type DeliveryMethodRelationFilter = {
  is?: InputMaybe<DeliveryMethodWhereInput>;
  isNot?: InputMaybe<DeliveryMethodWhereInput>;
};

export enum DeliveryMethodScalarFieldEnum {
  Available = 'available',
  Cities = 'cities',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryDate = 'deliveryDate',
  DeliveryTime = 'deliveryTime',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  Media = 'media',
  Price = 'price',
  RequestDate = 'requestDate',
  RequestTime = 'requestTime',
  Status = 'status',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type DeliveryMethodUpdateInput = {
  MEDIA?: InputMaybe<MediaUpdateOneWithoutDeliveriesNestedInput>;
  available?: InputMaybe<Array<Scalars['String']>>;
  cities?: InputMaybe<Array<Scalars['String']>>;
  deliveryDate?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  requestDate?: InputMaybe<Scalars['String']>;
  requestTime?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type DeliveryMethodUpdateOneWithoutDeliveryNestedInput = {
  connect?: InputMaybe<DeliveryMethodWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type DeliveryMethodWhereInput = {
  AND?: InputMaybe<Array<DeliveryMethodWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<DeliveryMethodWhereInput>>;
  OR?: InputMaybe<Array<DeliveryMethodWhereInput>>;
  available?: InputMaybe<StringListFilter>;
  cities?: InputMaybe<StringListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  deliveryDate?: InputMaybe<StringFilter>;
  deliveryTime?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  label?: InputMaybe<StringFilter>;
  media?: InputMaybe<IntFilter>;
  price?: InputMaybe<IntFilter>;
  requestDate?: InputMaybe<StringFilter>;
  requestTime?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DeliveryMethodWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DeliveryOrderByWithRelationInput = {
  ADDRESS?: InputMaybe<AddressOrderByWithRelationInput>;
  METHOD?: InputMaybe<DeliveryMethodOrderByWithRelationInput>;
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  method?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type DeliveryRelationFilter = {
  is?: InputMaybe<DeliveryWhereInput>;
  isNot?: InputMaybe<DeliveryWhereInput>;
};

export enum DeliveryScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Method = 'method',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum DeliveryStatusEnum {
  Archive = 'ARCHIVE',
  Canccel = 'CANCCEL',
  Delivered = 'DELIVERED',
  Inactive = 'INACTIVE',
  Indelivering = 'INDELIVERING'
}

export type DeliveryUpdateInput = {
  ADDRESS?: InputMaybe<AddressUpdateOneWithoutDeliveriesNestedInput>;
  METHOD?: InputMaybe<DeliveryMethodUpdateOneWithoutDeliveryNestedInput>;
  status?: InputMaybe<DeliveryStatusEnum>;
};

export type DeliveryUpdateOneWithoutOrderNestedInput = {
  connect?: InputMaybe<DeliveryWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type DeliveryWhereInput = {
  ADDRESS?: InputMaybe<AddressRelationFilter>;
  AND?: InputMaybe<Array<DeliveryWhereInput>>;
  METHOD?: InputMaybe<DeliveryMethodRelationFilter>;
  NOT?: InputMaybe<Array<DeliveryWhereInput>>;
  OR?: InputMaybe<Array<DeliveryWhereInput>>;
  address?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  method?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumDeliveryStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DeliveryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Discount = {
  __typename?: 'Discount';
  MEDIA?: Maybe<Media>;
  _count: DiscountCount;
  amount?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<DiscountTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  usable?: Maybe<Scalars['Int']>;
};

export type DiscountCount = {
  __typename?: 'DiscountCount';
  LINES: Scalars['Int'];
  ORDERS: Scalars['Int'];
};

export type DiscountCreateInput = {
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutDiscountsInput>;
  amount?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<DiscountTypeEnum>;
  usable?: InputMaybe<Scalars['Int']>;
};

export type DiscountCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<DiscountWhereUniqueInput>;
};

export type DiscountOrderByWithRelationInput = {
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  amount?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  usable?: InputMaybe<SortOrder>;
};

export type DiscountRelationFilter = {
  is?: InputMaybe<DiscountWhereInput>;
  isNot?: InputMaybe<DiscountWhereInput>;
};

export enum DiscountScalarFieldEnum {
  Amount = 'amount',
  Code = 'code',
  Count = 'count',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  End = 'end',
  Id = 'id',
  Media = 'media',
  Start = 'start',
  Status = 'status',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Usable = 'usable'
}

export enum DiscountTypeEnum {
  Percent = 'PERCENT',
  Reduce = 'REDUCE'
}

export type DiscountUpdateInput = {
  MEDIA?: InputMaybe<MediaUpdateOneWithoutDiscountsNestedInput>;
  amount?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<DiscountTypeEnum>;
  usable?: InputMaybe<Scalars['Int']>;
};

export type DiscountUpdateOneWithoutOrdersNestedInput = {
  connect?: InputMaybe<DiscountWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type DiscountWhereInput = {
  AND?: InputMaybe<Array<DiscountWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<DiscountWhereInput>>;
  OR?: InputMaybe<Array<DiscountWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  code?: InputMaybe<StringFilter>;
  count?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  end?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  media?: InputMaybe<IntFilter>;
  start?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumDiscountTypeEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  usable?: InputMaybe<IntFilter>;
};

export type DiscountWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Doorway = {
  __typename?: 'Doorway';
  MEDIA?: Maybe<Media>;
  _count: DoorwayCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  external?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  internal?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  type?: Maybe<DoorwayTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DoorwayCount = {
  __typename?: 'DoorwayCount';
  FINANCIALS: Scalars['Int'];
};

export type DoorwayCreateInput = {
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutDoorwaysInput>;
  external?: InputMaybe<Scalars['Boolean']>;
  internal?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  type?: InputMaybe<DoorwayTypeEnum>;
};

export type DoorwayCreateNestedOneWithoutFinancialsInput = {
  connect?: InputMaybe<DoorwayWhereUniqueInput>;
};

export type DoorwayOrderByWithRelationInput = {
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  external?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  internal?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type DoorwayRelationFilter = {
  is?: InputMaybe<DoorwayWhereInput>;
  isNot?: InputMaybe<DoorwayWhereInput>;
};

export enum DoorwayScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  External = 'external',
  Id = 'id',
  Internal = 'internal',
  Media = 'media',
  Name = 'name',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export enum DoorwayTypeEnum {
  Behpardakht = 'BEHPARDAKHT',
  Sadad = 'SADAD',
  Zarinpal = 'ZARINPAL'
}

export type DoorwayUpdateInput = {
  MEDIA?: InputMaybe<MediaUpdateOneWithoutDoorwaysNestedInput>;
  external?: InputMaybe<Scalars['Boolean']>;
  internal?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  type?: InputMaybe<DoorwayTypeEnum>;
};

export type DoorwayUpdateOneWithoutFinancialsNestedInput = {
  connect?: InputMaybe<DoorwayWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type DoorwayWhereInput = {
  AND?: InputMaybe<Array<DoorwayWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<DoorwayWhereInput>>;
  OR?: InputMaybe<Array<DoorwayWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  external?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  internal?: InputMaybe<BoolFilter>;
  media?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  type?: InputMaybe<EnumDoorwayTypeEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DoorwayWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type EnumDeliveryStatusEnumFilter = {
  equals?: InputMaybe<DeliveryStatusEnum>;
  in?: InputMaybe<Array<DeliveryStatusEnum>>;
  not?: InputMaybe<EnumDeliveryStatusEnumFilter>;
  notIn?: InputMaybe<Array<DeliveryStatusEnum>>;
};

export type EnumDiscountTypeEnumFilter = {
  equals?: InputMaybe<DiscountTypeEnum>;
  in?: InputMaybe<Array<DiscountTypeEnum>>;
  not?: InputMaybe<EnumDiscountTypeEnumFilter>;
  notIn?: InputMaybe<Array<DiscountTypeEnum>>;
};

export type EnumDoorwayTypeEnumFilter = {
  equals?: InputMaybe<DoorwayTypeEnum>;
  in?: InputMaybe<Array<DoorwayTypeEnum>>;
  not?: InputMaybe<EnumDoorwayTypeEnumFilter>;
  notIn?: InputMaybe<Array<DoorwayTypeEnum>>;
};

export type EnumOptionAmountTypeEnumFilter = {
  equals?: InputMaybe<OptionAmountTypeEnum>;
  in?: InputMaybe<Array<OptionAmountTypeEnum>>;
  not?: InputMaybe<EnumOptionAmountTypeEnumFilter>;
  notIn?: InputMaybe<Array<OptionAmountTypeEnum>>;
};

export type EnumOrderStatusEnumFilter = {
  equals?: InputMaybe<OrderStatusEnum>;
  in?: InputMaybe<Array<OrderStatusEnum>>;
  not?: InputMaybe<EnumOrderStatusEnumFilter>;
  notIn?: InputMaybe<Array<OrderStatusEnum>>;
};

export type EnumStatusEnumFilter = {
  equals?: InputMaybe<StatusEnum>;
  in?: InputMaybe<Array<StatusEnum>>;
  not?: InputMaybe<EnumStatusEnumFilter>;
  notIn?: InputMaybe<Array<StatusEnum>>;
};

export type Faq = {
  __typename?: 'FAQ';
  ARTICLES?: Maybe<Array<Article>>;
  CATEGORIES?: Maybe<Array<Category>>;
  PRODUTCS?: Maybe<Array<Product>>;
  _count: FaqCount;
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  question?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqCount = {
  __typename?: 'FAQCount';
  ARTICLES: Scalars['Int'];
  CATEGORIES: Scalars['Int'];
  PRODUTCS: Scalars['Int'];
};

export type FaqCreateInput = {
  ARTICLES?: InputMaybe<ArticleCreateNestedManyWithoutFaqsInput>;
  CATEGORIES?: InputMaybe<CategoryCreateNestedManyWithoutFaqsInput>;
  PRODUTCS?: InputMaybe<ProductCreateNestedManyWithoutFaqsInput>;
  answer?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type FaqCreateNestedManyWithoutArticlesInput = {
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
};

export type FaqCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
};

export type FaqCreateNestedManyWithoutProdutcsInput = {
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
};

export type FaqListRelationFilter = {
  every?: InputMaybe<FaqWhereInput>;
  none?: InputMaybe<FaqWhereInput>;
  some?: InputMaybe<FaqWhereInput>;
};

export type FaqOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FaqOrderByWithRelationInput = {
  ARTICLES?: InputMaybe<ArticleOrderByRelationAggregateInput>;
  CATEGORIES?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  PRODUTCS?: InputMaybe<ProductOrderByRelationAggregateInput>;
  answer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Faqs = {
  __typename?: 'FAQS';
  result?: Maybe<CustomFaqResult>;
  status?: Maybe<ResponseStatus>;
};

export enum FaqScalarFieldEnum {
  Answer = 'answer',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Question = 'question',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type FaqUpdateInput = {
  ARTICLES?: InputMaybe<ArticleUpdateManyWithoutFaqsNestedInput>;
  CATEGORIES?: InputMaybe<CategoryUpdateManyWithoutFaqsNestedInput>;
  PRODUTCS?: InputMaybe<ProductUpdateManyWithoutFaqsNestedInput>;
  answer?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type FaqUpdateManyWithoutArticlesNestedInput = {
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<FaqWhereUniqueInput>>;
};

export type FaqUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<FaqWhereUniqueInput>>;
};

export type FaqUpdateManyWithoutProdutcsNestedInput = {
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<FaqWhereUniqueInput>>;
};

export type FaqWhereInput = {
  AND?: InputMaybe<Array<FaqWhereInput>>;
  ARTICLES?: InputMaybe<ArticleListRelationFilter>;
  CATEGORIES?: InputMaybe<CategoryListRelationFilter>;
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  OR?: InputMaybe<Array<FaqWhereInput>>;
  PRODUTCS?: InputMaybe<ProductListRelationFilter>;
  answer?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  question?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Ffaq = {
  __typename?: 'FFAQ';
  result?: Maybe<CustomFaq>;
  status?: Maybe<ResponseStatus>;
};

export type Financial = {
  __typename?: 'FINANCIAL';
  result?: Maybe<CustomFinancial>;
  status?: Maybe<ResponseStatus>;
};

export type Financials = {
  __typename?: 'FINANCIALS';
  result?: Maybe<CustomFinancialResult>;
  status?: Maybe<ResponseStatus>;
};

export type Footer = {
  __typename?: 'FOOTER';
  result?: Maybe<CustomFooter>;
  status?: Maybe<ResponseStatus>;
};

export type Footers = {
  __typename?: 'FOOTERS';
  result?: Maybe<CustomFooterResult>;
  status?: Maybe<ResponseStatus>;
};

export type Financial = {
  __typename?: 'Financial';
  DOORWAY?: Maybe<Doorway>;
  ORDER?: Maybe<Order>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  doorway?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  resnum?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinancialCreateInput = {
  DOORWAY?: InputMaybe<DoorwayCreateNestedOneWithoutFinancialsInput>;
  ORDER?: InputMaybe<OrderCreateNestedOneWithoutFinancialsInput>;
  amount?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  resnum?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
};

export type FinancialCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<FinancialWhereUniqueInput>>;
};

export type FinancialListRelationFilter = {
  every?: InputMaybe<FinancialWhereInput>;
  none?: InputMaybe<FinancialWhereInput>;
  some?: InputMaybe<FinancialWhereInput>;
};

export type FinancialOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FinancialOrderByWithRelationInput = {
  DOORWAY?: InputMaybe<DoorwayOrderByWithRelationInput>;
  ORDER?: InputMaybe<OrderOrderByWithRelationInput>;
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  doorway?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mobile?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  resnum?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum FinancialScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Date = 'date',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Doorway = 'doorway',
  Id = 'id',
  Mobile = 'mobile',
  Name = 'name',
  Order = 'order',
  Resnum = 'resnum',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type FinancialUpdateInput = {
  DOORWAY?: InputMaybe<DoorwayUpdateOneWithoutFinancialsNestedInput>;
  ORDER?: InputMaybe<OrderUpdateOneWithoutFinancialsNestedInput>;
  amount?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  resnum?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
};

export type FinancialUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<FinancialWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<FinancialWhereUniqueInput>>;
};

export type FinancialWhereInput = {
  AND?: InputMaybe<Array<FinancialWhereInput>>;
  DOORWAY?: InputMaybe<DoorwayRelationFilter>;
  NOT?: InputMaybe<Array<FinancialWhereInput>>;
  OR?: InputMaybe<Array<FinancialWhereInput>>;
  ORDER?: InputMaybe<OrderRelationFilter>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  doorway?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  mobile?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  resnum?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FinancialWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FooterCreateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type FooterOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum FooterScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type FooterUpdateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type FooterWhereInput = {
  AND?: InputMaybe<Array<FooterWhereInput>>;
  NOT?: InputMaybe<Array<FooterWhereInput>>;
  OR?: InputMaybe<Array<FooterWhereInput>>;
  content?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FooterWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Header = {
  __typename?: 'HEADER';
  result?: Maybe<CustomHeader>;
  status?: Maybe<ResponseStatus>;
};

export type Headers = {
  __typename?: 'HEADERS';
  result?: Maybe<CustomHeaderResult>;
  status?: Maybe<ResponseStatus>;
};

export type HeaderCreateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type HeaderOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HeaderScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type HeaderUpdateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type HeaderWhereInput = {
  AND?: InputMaybe<Array<HeaderWhereInput>>;
  NOT?: InputMaybe<Array<HeaderWhereInput>>;
  OR?: InputMaybe<Array<HeaderWhereInput>>;
  content?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HeaderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Inline = {
  __typename?: 'INLINE';
  result?: Maybe<CustomInline>;
  status?: Maybe<ResponseStatus>;
};

export type Inlines = {
  __typename?: 'INLINES';
  result?: Maybe<CustomInlineResult>;
  status?: Maybe<ResponseStatus>;
};

export type Inline = {
  __typename?: 'Inline';
  MEDIA?: Maybe<Media>;
  PRODUCTS?: Maybe<Array<Product>>;
  _count: InlineCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type InlineCount = {
  __typename?: 'InlineCount';
  PRODUCTS: Scalars['Int'];
};

export type InlineCreateInput = {
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutInlinesInput>;
  PRODUCTS?: InputMaybe<ProductCreateNestedManyWithoutInlinesInput>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type InlineCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<InlineWhereUniqueInput>>;
};

export type InlineListRelationFilter = {
  every?: InputMaybe<InlineWhereInput>;
  none?: InputMaybe<InlineWhereInput>;
  some?: InputMaybe<InlineWhereInput>;
};

export type InlineOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InlineOrderByWithRelationInput = {
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  PRODUCTS?: InputMaybe<ProductOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum InlineScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Media = 'media',
  Name = 'name',
  Order = 'order',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type InlineUpdateInput = {
  MEDIA?: InputMaybe<MediaUpdateOneWithoutInlinesNestedInput>;
  PRODUCTS?: InputMaybe<ProductUpdateManyWithoutInlinesNestedInput>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type InlineUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<InlineWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<InlineWhereUniqueInput>>;
};

export type InlineWhereInput = {
  AND?: InputMaybe<Array<InlineWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<InlineWhereInput>>;
  OR?: InputMaybe<Array<InlineWhereInput>>;
  PRODUCTS?: InputMaybe<ProductListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  media?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type InlineWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type JsonListFilter = {
  equals?: InputMaybe<Array<Scalars['JSON']>>;
  has?: InputMaybe<Scalars['JSON']>;
  hasEvery?: InputMaybe<Array<Scalars['JSON']>>;
  hasSome?: InputMaybe<Array<Scalars['JSON']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Label = {
  __typename?: 'LABEL';
  result?: Maybe<CustomLabel>;
  status?: Maybe<ResponseStatus>;
};

export type Labels = {
  __typename?: 'LABELS';
  result?: Maybe<CustomLabelResult>;
  status?: Maybe<ResponseStatus>;
};

export type Label = {
  __typename?: 'Label';
  MEDIA?: Maybe<Media>;
  _count: LabelCount;
  bgColor?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  txColor?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LabelCount = {
  __typename?: 'LabelCount';
  ARTICLES: Scalars['Int'];
  CATEGORIES: Scalars['Int'];
  PRODUCTS: Scalars['Int'];
};

export type LabelCreateInput = {
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutLabelsInput>;
  bgColor?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  txColor?: InputMaybe<Scalars['String']>;
};

export type LabelCreateNestedManyWithoutArticlesInput = {
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
};

export type LabelCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
};

export type LabelCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
};

export type LabelListRelationFilter = {
  every?: InputMaybe<LabelWhereInput>;
  none?: InputMaybe<LabelWhereInput>;
  some?: InputMaybe<LabelWhereInput>;
};

export type LabelOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LabelOrderByWithRelationInput = {
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  bgColor?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  txColor?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum LabelScalarFieldEnum {
  BgColor = 'bgColor',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Label = 'label',
  Media = 'media',
  Status = 'status',
  TxColor = 'txColor',
  UpdatedAt = 'updatedAt'
}

export type LabelUpdateInput = {
  MEDIA?: InputMaybe<MediaUpdateOneWithoutLabelsNestedInput>;
  bgColor?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  txColor?: InputMaybe<Scalars['String']>;
};

export type LabelUpdateManyWithoutArticlesNestedInput = {
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<LabelWhereUniqueInput>>;
};

export type LabelUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<LabelWhereUniqueInput>>;
};

export type LabelUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<LabelWhereUniqueInput>>;
};

export type LabelWhereInput = {
  AND?: InputMaybe<Array<LabelWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<LabelWhereInput>>;
  OR?: InputMaybe<Array<LabelWhereInput>>;
  bgColor?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  label?: InputMaybe<StringFilter>;
  media?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  txColor?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LabelWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Line = {
  __typename?: 'Line';
  DISCOUNT?: Maybe<Discount>;
  ORDER?: Maybe<Order>;
  PRICE?: Maybe<Price>;
  PRODUCT?: Maybe<Product>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  order?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  product?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LineCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<LineWhereUniqueInput>>;
};

export type LineListRelationFilter = {
  every?: InputMaybe<LineWhereInput>;
  none?: InputMaybe<LineWhereInput>;
  some?: InputMaybe<LineWhereInput>;
};

export type LineOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LineUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<LineWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<LineWhereUniqueInput>>;
};

export type LineWhereInput = {
  AND?: InputMaybe<Array<LineWhereInput>>;
  DISCOUNT?: InputMaybe<DiscountRelationFilter>;
  NOT?: InputMaybe<Array<LineWhereInput>>;
  OR?: InputMaybe<Array<LineWhereInput>>;
  ORDER?: InputMaybe<OrderRelationFilter>;
  PRICE?: InputMaybe<PriceRelationFilter>;
  PRODUCT?: InputMaybe<ProductRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  discount?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  order?: InputMaybe<IntFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LineWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Media = {
  __typename?: 'MEDIA';
  result?: Maybe<CustomMedia>;
  status?: Maybe<ResponseStatus>;
};

export type Medias = {
  __typename?: 'MEDIAS';
  result?: Maybe<CustomMediaResult>;
  status?: Maybe<ResponseStatus>;
};

export type Media = {
  __typename?: 'Media';
  _count: MediaCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MediaCount = {
  __typename?: 'MediaCount';
  ADDITIONALS: Scalars['Int'];
  ARTICLE: Scalars['Int'];
  BRANDS: Scalars['Int'];
  CATEGORIES: Scalars['Int'];
  DELIVERIES: Scalars['Int'];
  DISCOUNTS: Scalars['Int'];
  DOORWAYS: Scalars['Int'];
  INLINES: Scalars['Int'];
  LABELS: Scalars['Int'];
  OPTIONS: Scalars['Int'];
  PRODUCTS: Scalars['Int'];
  USERS: Scalars['Int'];
};

export type MediaCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  type?: InputMaybe<Scalars['String']>;
};

export type MediaCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<MediaWhereUniqueInput>>;
};

export type MediaCreateNestedOneWithoutAdditionalsInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutArticleInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutBrandsInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutDeliveriesInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutDiscountsInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutDoorwaysInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutInlinesInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutLabelsInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutOptionsInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
};

export type MediaListRelationFilter = {
  every?: InputMaybe<MediaWhereInput>;
  none?: InputMaybe<MediaWhereInput>;
  some?: InputMaybe<MediaWhereInput>;
};

export type MediaOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MediaOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MediaRelationFilter = {
  is?: InputMaybe<MediaWhereInput>;
  isNot?: InputMaybe<MediaWhereInput>;
};

export enum MediaScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Key = 'key',
  Name = 'name',
  Order = 'order',
  Slug = 'slug',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type MediaUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  type?: InputMaybe<Scalars['String']>;
};

export type MediaUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<MediaWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<MediaWhereUniqueInput>>;
};

export type MediaUpdateOneWithoutAdditionalsNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutArticleNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutBrandsNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutCategoriesNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutDeliveriesNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutDiscountsNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutDoorwaysNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutInlinesNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutLabelsNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutOptionsNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaUpdateOneWithoutUsersNestedInput = {
  connect?: InputMaybe<MediaWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MediaWhereInput = {
  AND?: InputMaybe<Array<MediaWhereInput>>;
  NOT?: InputMaybe<Array<MediaWhereInput>>;
  OR?: InputMaybe<Array<MediaWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MediaWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateAdditional?: Maybe<Additional>;
  CreateAdditionalInvoice?: Maybe<Ainvoice>;
  CreateAddress?: Maybe<Address>;
  CreateArticle?: Maybe<Article>;
  CreateBrand?: Maybe<Brand>;
  CreateCategory?: Maybe<Category>;
  CreateCity?: Maybe<City>;
  CreateComment?: Maybe<Comment>;
  CreateDelivery?: Maybe<Delivery>;
  CreateDeliveryMethod?: Maybe<Deliverymethod>;
  CreateDiscount?: Maybe<Discount>;
  CreateDoorway?: Maybe<Doorway>;
  CreateFAQ?: Maybe<Ffaq>;
  CreateFinancial?: Maybe<Financial>;
  CreateFooter?: Maybe<Footer>;
  CreateHeader?: Maybe<Header>;
  CreateInline?: Maybe<Inline>;
  CreateLabel?: Maybe<Label>;
  CreateMedia?: Maybe<Media>;
  CreateNotification?: Maybe<Notification>;
  CreateOption?: Maybe<Option>;
  CreateOrder?: Maybe<Order>;
  CreatePage?: Maybe<Page>;
  CreatePrice?: Maybe<Price>;
  CreateProduct?: Maybe<Product>;
  CreateProvince?: Maybe<Province>;
  CreateReserve?: Maybe<Reserve>;
  CreateRole?: Maybe<Role>;
  CreateSEO?: Maybe<Sseo>;
  CreateSetting?: Maybe<Setting>;
  CreateTag?: Maybe<Tag>;
  CreateURL?: Maybe<Uurl>;
  CreateUser?: Maybe<User>;
  DeleteAdditional?: Maybe<Additional>;
  DeleteAdditionalInvoice?: Maybe<Ainvoice>;
  DeleteAddress?: Maybe<Address>;
  DeleteArticle?: Maybe<Article>;
  DeleteBrand?: Maybe<Brand>;
  DeleteCategory?: Maybe<Category>;
  DeleteCity?: Maybe<City>;
  DeleteComment?: Maybe<Comment>;
  DeleteDelivery?: Maybe<Delivery>;
  DeleteDeliveryMethod?: Maybe<Deliverymethod>;
  DeleteDiscount?: Maybe<Discount>;
  DeleteDoorway?: Maybe<Doorway>;
  DeleteFAQ?: Maybe<Ffaq>;
  DeleteFinancial?: Maybe<Financial>;
  DeleteFooter?: Maybe<Footer>;
  DeleteHeader?: Maybe<Header>;
  DeleteInline?: Maybe<Inline>;
  DeleteLabel?: Maybe<Label>;
  DeleteMedia?: Maybe<Media>;
  DeleteNotification?: Maybe<Notification>;
  DeleteOption?: Maybe<Option>;
  DeleteOrder?: Maybe<Order>;
  DeletePage?: Maybe<Page>;
  DeletePrice?: Maybe<Price>;
  DeleteProduct?: Maybe<Product>;
  DeleteProvince?: Maybe<Province>;
  DeleteReserve?: Maybe<Reserve>;
  DeleteRole?: Maybe<Role>;
  DeleteSEO?: Maybe<Sseo>;
  DeleteSetting?: Maybe<Setting>;
  DeleteTag?: Maybe<Tag>;
  DeleteURL?: Maybe<Uurl>;
  DeleteUser?: Maybe<User>;
  ReorderAdditional?: Maybe<Reorderadditional>;
  ReorderCategory?: Maybe<Reordercategory>;
  ReorderInline?: Maybe<Reorderinline>;
  ReorderMedia?: Maybe<Reordermedia>;
  ReorderOption?: Maybe<Reorderoption>;
  ReorderProduct?: Maybe<Reorderproduct>;
  RequestAuth?: Maybe<Requestauth>;
  UpdateAdditional?: Maybe<Additional>;
  UpdateAdditionalInvoice?: Maybe<Ainvoice>;
  UpdateAddress?: Maybe<Address>;
  UpdateArticle?: Maybe<Article>;
  UpdateBrand?: Maybe<Brand>;
  UpdateCategory?: Maybe<Category>;
  UpdateCity?: Maybe<City>;
  UpdateComment?: Maybe<Comment>;
  UpdateDelivery?: Maybe<Delivery>;
  UpdateDeliveryMethod?: Maybe<Deliverymethod>;
  UpdateDiscount?: Maybe<Discount>;
  UpdateDoorway?: Maybe<Doorway>;
  UpdateFAQ?: Maybe<Ffaq>;
  UpdateFinancial?: Maybe<Financial>;
  UpdateFooter?: Maybe<Footer>;
  UpdateHeader?: Maybe<Header>;
  UpdateInline?: Maybe<Inline>;
  UpdateLabel?: Maybe<Label>;
  UpdateMedia?: Maybe<Media>;
  UpdateNotification?: Maybe<Notification>;
  UpdateOption?: Maybe<Option>;
  UpdateOrder?: Maybe<Order>;
  UpdatePage?: Maybe<Page>;
  UpdatePrice?: Maybe<Price>;
  UpdateProduct?: Maybe<Product>;
  UpdateProvince?: Maybe<Province>;
  UpdateReserve?: Maybe<Reserve>;
  UpdateRole?: Maybe<Role>;
  UpdateSEO?: Maybe<Sseo>;
  UpdateSetting?: Maybe<Setting>;
  UpdateTag?: Maybe<Tag>;
  UpdateURL?: Maybe<Uurl>;
  UpdateUser?: Maybe<User>;
  UploadMedia?: Maybe<Upload>;
  VerifyAuth?: Maybe<Verifyauth>;
};


export type MutationCreateAdditionalArgs = {
  data: AdditionalCreateInput;
};


export type MutationCreateAdditionalInvoiceArgs = {
  data: AdditionalInvoiceCreateInput;
};


export type MutationCreateAddressArgs = {
  data: AddressCreateInput;
};


export type MutationCreateArticleArgs = {
  data: ArticleCreateInput;
};


export type MutationCreateBrandArgs = {
  data: BrandCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCityArgs = {
  data: CityCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateDeliveryArgs = {
  data: DeliveryCreateInput;
};


export type MutationCreateDeliveryMethodArgs = {
  data: DeliveryMethodCreateInput;
};


export type MutationCreateDiscountArgs = {
  data: DiscountCreateInput;
};


export type MutationCreateDoorwayArgs = {
  data: DoorwayCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateFinancialArgs = {
  data: FinancialCreateInput;
};


export type MutationCreateFooterArgs = {
  data: FooterCreateInput;
};


export type MutationCreateHeaderArgs = {
  data: HeaderCreateInput;
};


export type MutationCreateInlineArgs = {
  data: InlineCreateInput;
};


export type MutationCreateLabelArgs = {
  data: LabelCreateInput;
};


export type MutationCreateMediaArgs = {
  data: MediaCreateInput;
};


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateOptionArgs = {
  data: OptionCreateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePriceArgs = {
  data: PriceCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProvinceArgs = {
  data: ProvinceCreateInput;
};


export type MutationCreateReserveArgs = {
  data: ReserveCreateInput;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateSeoArgs = {
  data: SeoCreateInput;
};


export type MutationCreateSettingArgs = {
  data: SettingCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateUrlArgs = {
  data: UrlCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAdditionalArgs = {
  where: AdditionalWhereUniqueInput;
};


export type MutationDeleteAdditionalInvoiceArgs = {
  where: AdditionalInvoiceWhereUniqueInput;
};


export type MutationDeleteAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type MutationDeleteBrandArgs = {
  where: BrandWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCityArgs = {
  where: CityWhereUniqueInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteDeliveryArgs = {
  where: DeliveryWhereUniqueInput;
};


export type MutationDeleteDeliveryMethodArgs = {
  where: DeliveryMethodWhereUniqueInput;
};


export type MutationDeleteDiscountArgs = {
  where: DiscountWhereUniqueInput;
};


export type MutationDeleteDoorwayArgs = {
  where: DoorwayWhereUniqueInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteFinancialArgs = {
  where: FinancialWhereUniqueInput;
};


export type MutationDeleteFooterArgs = {
  where: FooterWhereUniqueInput;
};


export type MutationDeleteHeaderArgs = {
  where: HeaderWhereUniqueInput;
};


export type MutationDeleteInlineArgs = {
  where: InlineWhereUniqueInput;
};


export type MutationDeleteLabelArgs = {
  where: LabelWhereUniqueInput;
};


export type MutationDeleteMediaArgs = {
  where: MediaWhereUniqueInput;
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteOptionArgs = {
  where: OptionWhereUniqueInput;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePriceArgs = {
  where: PriceWhereUniqueInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProvinceArgs = {
  where: ProvinceWhereUniqueInput;
};


export type MutationDeleteReserveArgs = {
  where: ReserveWhereUniqueInput;
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationDeleteSeoArgs = {
  where: SeoWhereUniqueInput;
};


export type MutationDeleteSettingArgs = {
  where: SettingWhereUniqueInput;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteUrlArgs = {
  where: UrlWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationReorderAdditionalArgs = {
  data?: InputMaybe<Array<ReorderAdditionalInput>>;
};


export type MutationReorderCategoryArgs = {
  data?: InputMaybe<Array<ReorderCategoryInput>>;
};


export type MutationReorderInlineArgs = {
  data?: InputMaybe<Array<ReorderInlineInput>>;
};


export type MutationReorderMediaArgs = {
  data?: InputMaybe<Array<ReorderMediaInput>>;
};


export type MutationReorderOptionArgs = {
  data?: InputMaybe<Array<ReorderOptionInput>>;
};


export type MutationReorderProductArgs = {
  data?: InputMaybe<Array<ReorderProductInput>>;
};


export type MutationRequestAuthArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationUpdateAdditionalArgs = {
  data: AdditionalUpdateInput;
  where: AdditionalWhereUniqueInput;
};


export type MutationUpdateAdditionalInvoiceArgs = {
  data: AdditionalInvoiceUpdateInput;
  where: AdditionalInvoiceWhereUniqueInput;
};


export type MutationUpdateAddressArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};


export type MutationUpdateArticleArgs = {
  data: ArticleUpdateInput;
  where: ArticleWhereUniqueInput;
};


export type MutationUpdateBrandArgs = {
  data: BrandUpdateInput;
  where: BrandWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateDeliveryArgs = {
  data: DeliveryUpdateInput;
  where: DeliveryWhereUniqueInput;
};


export type MutationUpdateDeliveryMethodArgs = {
  data: DeliveryMethodUpdateInput;
  where: DeliveryMethodWhereUniqueInput;
};


export type MutationUpdateDiscountArgs = {
  data: DiscountUpdateInput;
  where: DiscountWhereUniqueInput;
};


export type MutationUpdateDoorwayArgs = {
  data: DoorwayUpdateInput;
  where: DoorwayWhereUniqueInput;
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateFinancialArgs = {
  data: FinancialUpdateInput;
  where: FinancialWhereUniqueInput;
};


export type MutationUpdateFooterArgs = {
  data: FooterUpdateInput;
  where: FooterWhereUniqueInput;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderUpdateInput;
  where: HeaderWhereUniqueInput;
};


export type MutationUpdateInlineArgs = {
  data: InlineUpdateInput;
  where: InlineWhereUniqueInput;
};


export type MutationUpdateLabelArgs = {
  data: LabelUpdateInput;
  where: LabelWhereUniqueInput;
};


export type MutationUpdateMediaArgs = {
  data: MediaUpdateInput;
  where: MediaWhereUniqueInput;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateOptionArgs = {
  data: OptionUpdateInput;
  where: OptionWhereUniqueInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePriceArgs = {
  data: PriceUpdateInput;
  where: PriceWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProvinceArgs = {
  data: ProvinceUpdateInput;
  where: ProvinceWhereUniqueInput;
};


export type MutationUpdateReserveArgs = {
  data: ReserveUpdateInput;
  where: ReserveWhereUniqueInput;
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateSeoArgs = {
  data: SeoUpdateInput;
  where: SeoWhereUniqueInput;
};


export type MutationUpdateSettingArgs = {
  data: SettingUpdateInput;
  where: SettingWhereUniqueInput;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateUrlArgs = {
  data: UrlUpdateInput;
  where: UrlWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUploadMediaArgs = {
  data: UploadMediaInput;
};


export type MutationVerifyAuthArgs = {
  phoneNumber: Scalars['String'];
  verificationCode: Scalars['String'];
};

export type Notification = {
  __typename?: 'NOTIFICATION';
  result?: Maybe<CustomNotification>;
  status?: Maybe<ResponseStatus>;
};

export type Notifications = {
  __typename?: 'NOTIFICATIONS';
  result?: Maybe<CustomNotificationResult>;
  status?: Maybe<ResponseStatus>;
};

export type NotificationCreateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  finish?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusEnum>;
};

export type NotificationOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  finish?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Finish = 'finish',
  Id = 'id',
  Name = 'name',
  Start = 'start',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type NotificationUpdateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  finish?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusEnum>;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  content?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  finish?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  start?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Option = {
  __typename?: 'OPTION';
  result?: Maybe<CustomOption>;
  status?: Maybe<ResponseStatus>;
};

export type Options = {
  __typename?: 'OPTIONS';
  result?: Maybe<CustomOptionResult>;
  status?: Maybe<ResponseStatus>;
};

export type Order = {
  __typename?: 'ORDER';
  result?: Maybe<CustomOrder>;
  status?: Maybe<ResponseStatus>;
};

export type Orders = {
  __typename?: 'ORDERS';
  result?: Maybe<CustomOrderResult>;
  status?: Maybe<ResponseStatus>;
};

export type Option = {
  __typename?: 'Option';
  MEDIA?: Maybe<Media>;
  PRODUCTS?: Maybe<Array<Product>>;
  _count: OptionCount;
  amount?: Maybe<Scalars['Int']>;
  amountType?: Maybe<OptionAmountTypeEnum>;
  card?: Maybe<Scalars['Boolean']>;
  colorName?: Maybe<Scalars['String']>;
  colorValue?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['String']>;
  optionDescription?: Maybe<Scalars['String']>;
  optionTitle?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  titleDescription?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export enum OptionAmountTypeEnum {
  Increase = 'INCREASE',
  Percent = 'PERCENT'
}

export type OptionCount = {
  __typename?: 'OptionCount';
  PRODUCTS: Scalars['Int'];
};

export type OptionCreateInput = {
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutOptionsInput>;
  PRODUCTS?: InputMaybe<ProductCreateNestedManyWithoutOptionsInput>;
  amount?: InputMaybe<Scalars['Int']>;
  amountType?: InputMaybe<OptionAmountTypeEnum>;
  card?: InputMaybe<Scalars['Boolean']>;
  colorName?: InputMaybe<Scalars['String']>;
  colorValue?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['Boolean']>;
  mode?: InputMaybe<Scalars['String']>;
  optionDescription?: InputMaybe<Scalars['String']>;
  optionTitle?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  titleDescription?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type OptionCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<OptionWhereUniqueInput>>;
};

export type OptionListRelationFilter = {
  every?: InputMaybe<OptionWhereInput>;
  none?: InputMaybe<OptionWhereInput>;
  some?: InputMaybe<OptionWhereInput>;
};

export type OptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OptionOrderByWithRelationInput = {
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  PRODUCTS?: InputMaybe<ProductOrderByRelationAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  amountType?: InputMaybe<SortOrder>;
  card?: InputMaybe<SortOrder>;
  colorName?: InputMaybe<SortOrder>;
  colorValue?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  field?: InputMaybe<SortOrder>;
  filter?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  mode?: InputMaybe<SortOrder>;
  optionDescription?: InputMaybe<SortOrder>;
  optionTitle?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  titleDescription?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum OptionScalarFieldEnum {
  Amount = 'amount',
  AmountType = 'amountType',
  Card = 'card',
  ColorName = 'colorName',
  ColorValue = 'colorValue',
  CreatedAt = 'createdAt',
  Default = 'default',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Field = 'field',
  Filter = 'filter',
  Id = 'id',
  Media = 'media',
  Mode = 'mode',
  OptionDescription = 'optionDescription',
  OptionTitle = 'optionTitle',
  Order = 'order',
  Status = 'status',
  Title = 'title',
  TitleDescription = 'titleDescription',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type OptionUpdateInput = {
  MEDIA?: InputMaybe<MediaUpdateOneWithoutOptionsNestedInput>;
  PRODUCTS?: InputMaybe<ProductUpdateManyWithoutOptionsNestedInput>;
  amount?: InputMaybe<Scalars['Int']>;
  amountType?: InputMaybe<OptionAmountTypeEnum>;
  card?: InputMaybe<Scalars['Boolean']>;
  colorName?: InputMaybe<Scalars['String']>;
  colorValue?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['Boolean']>;
  mode?: InputMaybe<Scalars['String']>;
  optionDescription?: InputMaybe<Scalars['String']>;
  optionTitle?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  titleDescription?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type OptionUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<OptionWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<OptionWhereUniqueInput>>;
};

export type OptionWhereInput = {
  AND?: InputMaybe<Array<OptionWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<OptionWhereInput>>;
  OR?: InputMaybe<Array<OptionWhereInput>>;
  PRODUCTS?: InputMaybe<ProductListRelationFilter>;
  amount?: InputMaybe<IntFilter>;
  amountType?: InputMaybe<EnumOptionAmountTypeEnumFilter>;
  card?: InputMaybe<BoolFilter>;
  colorName?: InputMaybe<StringFilter>;
  colorValue?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  default?: InputMaybe<BoolFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  field?: InputMaybe<StringFilter>;
  filter?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  media?: InputMaybe<IntFilter>;
  mode?: InputMaybe<StringFilter>;
  optionDescription?: InputMaybe<StringFilter>;
  optionTitle?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  title?: InputMaybe<StringFilter>;
  titleDescription?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type OptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Order = {
  __typename?: 'Order';
  DELIVERY?: Maybe<Delivery>;
  DISCOUNT?: Maybe<Discount>;
  FINANCIALS?: Maybe<Array<Financial>>;
  LINES?: Maybe<Array<Line>>;
  USER?: Maybe<User>;
  _count: OrderCount;
  additionalPrice?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  delivery?: Maybe<Scalars['Int']>;
  deliveryPrice?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  discountPrice?: Maybe<Scalars['Int']>;
  finalPrice?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  paidPrice?: Maybe<Scalars['Int']>;
  status?: Maybe<OrderStatusEnum>;
  totalPrice?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type OrderCount = {
  __typename?: 'OrderCount';
  FINANCIALS: Scalars['Int'];
  LINES: Scalars['Int'];
};

export type OrderCreateInput = {
  DELIVERY?: InputMaybe<DeliveryCreateNestedOneWithoutOrderInput>;
  DISCOUNT?: InputMaybe<DiscountCreateNestedOneWithoutOrdersInput>;
  FINANCIALS?: InputMaybe<FinancialCreateNestedManyWithoutOrderInput>;
  LINES?: InputMaybe<LineCreateNestedManyWithoutOrderInput>;
  USER?: InputMaybe<UserCreateNestedOneWithoutOrdersInput>;
  additionalPrice?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  deliveryPrice?: InputMaybe<Scalars['Int']>;
  discountPrice?: InputMaybe<Scalars['Int']>;
  finalPrice?: InputMaybe<Scalars['Int']>;
  paidPrice?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<OrderStatusEnum>;
  totalPrice?: InputMaybe<Scalars['Int']>;
};

export type OrderCreateNestedOneWithoutFinancialsInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
};

export type OrderOrderByWithRelationInput = {
  DELIVERY?: InputMaybe<DeliveryOrderByWithRelationInput>;
  DISCOUNT?: InputMaybe<DiscountOrderByWithRelationInput>;
  FINANCIALS?: InputMaybe<FinancialOrderByRelationAggregateInput>;
  LINES?: InputMaybe<LineOrderByRelationAggregateInput>;
  USER?: InputMaybe<UserOrderByWithRelationInput>;
  additionalPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  delivery?: InputMaybe<SortOrder>;
  deliveryPrice?: InputMaybe<SortOrder>;
  discount?: InputMaybe<SortOrder>;
  discountPrice?: InputMaybe<SortOrder>;
  finalPrice?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  paidPrice?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<SortOrder>;
};

export type OrderRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export enum OrderScalarFieldEnum {
  AdditionalPrice = 'additionalPrice',
  CreatedAt = 'createdAt',
  Date = 'date',
  DeletedAt = 'deletedAt',
  Delivery = 'delivery',
  DeliveryPrice = 'deliveryPrice',
  Discount = 'discount',
  DiscountPrice = 'discountPrice',
  FinalPrice = 'finalPrice',
  Id = 'id',
  PaidPrice = 'paidPrice',
  Status = 'status',
  TotalPrice = 'totalPrice',
  UpdatedAt = 'updatedAt',
  User = 'user'
}

export enum OrderStatusEnum {
  Archive = 'ARCHIVE',
  Cart = 'CART',
  Checkout = 'CHECKOUT',
  Close = 'CLOSE',
  Completed = 'COMPLETED',
  Inactive = 'INACTIVE',
  Open = 'OPEN',
  Paied = 'PAIED',
  Shiped = 'SHIPED'
}

export type OrderUpdateInput = {
  DELIVERY?: InputMaybe<DeliveryUpdateOneWithoutOrderNestedInput>;
  DISCOUNT?: InputMaybe<DiscountUpdateOneWithoutOrdersNestedInput>;
  FINANCIALS?: InputMaybe<FinancialUpdateManyWithoutOrderNestedInput>;
  LINES?: InputMaybe<LineUpdateManyWithoutOrderNestedInput>;
  USER?: InputMaybe<UserUpdateOneWithoutOrdersNestedInput>;
  additionalPrice?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  deliveryPrice?: InputMaybe<Scalars['Int']>;
  discountPrice?: InputMaybe<Scalars['Int']>;
  finalPrice?: InputMaybe<Scalars['Int']>;
  paidPrice?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<OrderStatusEnum>;
  totalPrice?: InputMaybe<Scalars['Int']>;
};

export type OrderUpdateOneWithoutFinancialsNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  DELIVERY?: InputMaybe<DeliveryRelationFilter>;
  DISCOUNT?: InputMaybe<DiscountRelationFilter>;
  FINANCIALS?: InputMaybe<FinancialListRelationFilter>;
  LINES?: InputMaybe<LineListRelationFilter>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  USER?: InputMaybe<UserRelationFilter>;
  additionalPrice?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  delivery?: InputMaybe<IntFilter>;
  deliveryPrice?: InputMaybe<IntFilter>;
  discount?: InputMaybe<IntFilter>;
  discountPrice?: InputMaybe<IntFilter>;
  finalPrice?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  paidPrice?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumOrderStatusEnumFilter>;
  totalPrice?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<IntFilter>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Page = {
  __typename?: 'PAGE';
  result?: Maybe<CustomPage>;
  status?: Maybe<ResponseStatus>;
};

export type Pages = {
  __typename?: 'PAGES';
  result?: Maybe<CustomPageResult>;
  status?: Maybe<ResponseStatus>;
};

export type Price = {
  __typename?: 'PRICE';
  result?: Maybe<CustomPrice>;
  status?: Maybe<ResponseStatus>;
};

export type Prices = {
  __typename?: 'PRICES';
  result?: Maybe<CustomPriceResult>;
  status?: Maybe<ResponseStatus>;
};

export type Product = {
  __typename?: 'PRODUCT';
  result?: Maybe<CustomProduct>;
  status?: Maybe<ResponseStatus>;
};

export type Products = {
  __typename?: 'PRODUCTS';
  result?: Maybe<CustomProductResult>;
  status?: Maybe<ResponseStatus>;
};

export type Province = {
  __typename?: 'PROVINCE';
  result?: Maybe<CustomProvince>;
  status?: Maybe<ResponseStatus>;
};

export type Provinces = {
  __typename?: 'PROVINCES';
  result?: Maybe<CustomProvinceResult>;
  status?: Maybe<ResponseStatus>;
};

export type PageCreateInput = {
  SEO?: InputMaybe<SeoCreateNestedOneWithoutPagesInput>;
  content?: InputMaybe<Array<Scalars['JSON']>>;
  publishAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusEnum>;
  theme?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageOrderByWithRelationInput = {
  SEO?: InputMaybe<SeoOrderByWithRelationInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishAt?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PageScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PublishAt = 'publishAt',
  Seo = 'seo',
  Slug = 'slug',
  Status = 'status',
  Theme = 'theme',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PageUpdateInput = {
  SEO?: InputMaybe<SeoUpdateOneWithoutPagesNestedInput>;
  content?: InputMaybe<Array<Scalars['JSON']>>;
  publishAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusEnum>;
  theme?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageWhereInput = {
  AND?: InputMaybe<Array<PageWhereInput>>;
  NOT?: InputMaybe<Array<PageWhereInput>>;
  OR?: InputMaybe<Array<PageWhereInput>>;
  SEO?: InputMaybe<SeoRelationFilter>;
  content?: InputMaybe<JsonListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  publishAt?: InputMaybe<DateTimeFilter>;
  seo?: InputMaybe<IntFilter>;
  slug?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  theme?: InputMaybe<JsonFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Price = {
  __typename?: 'Price';
  PRODUCT?: Maybe<Product>;
  USER?: Maybe<User>;
  _count: PriceCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  price?: Maybe<Scalars['Int']>;
  product?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  tax?: Maybe<Scalars['Int']>;
  uiPrice?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type PriceCount = {
  __typename?: 'PriceCount';
  LINES: Scalars['Int'];
};

export type PriceCreateInput = {
  PRODUCT?: InputMaybe<ProductCreateNestedOneWithoutPricesInput>;
  USER?: InputMaybe<UserCreateNestedOneWithoutPricesInput>;
  date?: InputMaybe<Scalars['DateTime']>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  tax?: InputMaybe<Scalars['Int']>;
  uiPrice?: InputMaybe<Scalars['Int']>;
};

export type PriceCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<PriceWhereUniqueInput>>;
};

export type PriceListRelationFilter = {
  every?: InputMaybe<PriceWhereInput>;
  none?: InputMaybe<PriceWhereInput>;
  some?: InputMaybe<PriceWhereInput>;
};

export type PriceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PriceOrderByWithRelationInput = {
  PRODUCT?: InputMaybe<ProductOrderByWithRelationInput>;
  USER?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tax?: InputMaybe<SortOrder>;
  uiPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<SortOrder>;
};

export type PriceRelationFilter = {
  is?: InputMaybe<PriceWhereInput>;
  isNot?: InputMaybe<PriceWhereInput>;
};

export enum PriceScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Price = 'price',
  Product = 'product',
  Status = 'status',
  Tax = 'tax',
  UiPrice = 'uiPrice',
  UpdatedAt = 'updatedAt',
  User = 'user'
}

export type PriceUpdateInput = {
  PRODUCT?: InputMaybe<ProductUpdateOneWithoutPricesNestedInput>;
  USER?: InputMaybe<UserUpdateOneWithoutPricesNestedInput>;
  date?: InputMaybe<Scalars['DateTime']>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<StatusEnum>;
  tax?: InputMaybe<Scalars['Int']>;
  uiPrice?: InputMaybe<Scalars['Int']>;
};

export type PriceUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<PriceWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PriceWhereUniqueInput>>;
};

export type PriceWhereInput = {
  AND?: InputMaybe<Array<PriceWhereInput>>;
  NOT?: InputMaybe<Array<PriceWhereInput>>;
  OR?: InputMaybe<Array<PriceWhereInput>>;
  PRODUCT?: InputMaybe<ProductRelationFilter>;
  USER?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  tax?: InputMaybe<IntFilter>;
  uiPrice?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<IntFilter>;
};

export type PriceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  ADDITIONALS?: Maybe<Array<Additional>>;
  BRAND?: Maybe<Brand>;
  CATEGORY?: Maybe<Category>;
  COMMENTS?: Maybe<Array<Comment>>;
  FAQS?: Maybe<Array<Faq>>;
  INLINES?: Maybe<Array<Inline>>;
  LABELS?: Maybe<Array<Label>>;
  MEDIAS?: Maybe<Array<Media>>;
  OPTIONS?: Maybe<Array<Option>>;
  PRICES?: Maybe<Array<Price>>;
  Reserve?: Maybe<Array<Reserve>>;
  SEO?: Maybe<Seo>;
  SKU?: Maybe<Scalars['String']>;
  TAGS?: Maybe<Array<Tag>>;
  URLS?: Maybe<Array<Url>>;
  _count: ProductCount;
  brand?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['Int']>;
  colorName?: Maybe<Scalars['String']>;
  colorValue?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  enTitle?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  faTitle?: Maybe<Scalars['String']>;
  generationYear?: Maybe<Scalars['String']>;
  gradient?: Maybe<Array<Scalars['String']>>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  inlineSpecification?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  originalLink?: Maybe<Scalars['String']>;
  originalPrice?: Maybe<Scalars['Int']>;
  partNumber?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  seo?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  specification?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  ADDITIONALS: Scalars['Int'];
  COMMENTS: Scalars['Int'];
  FAQS: Scalars['Int'];
  INLINES: Scalars['Int'];
  LABELS: Scalars['Int'];
  LINES: Scalars['Int'];
  MEDIAS: Scalars['Int'];
  OPTIONS: Scalars['Int'];
  PRICES: Scalars['Int'];
  Reserve: Scalars['Int'];
  TAGS: Scalars['Int'];
  URLS: Scalars['Int'];
};

export type ProductCreateInput = {
  ADDITIONALS?: InputMaybe<AdditionalCreateNestedManyWithoutProductsInput>;
  BRAND?: InputMaybe<BrandCreateNestedOneWithoutProductsInput>;
  CATEGORY?: InputMaybe<CategoryCreateNestedOneWithoutProductsInput>;
  FAQS?: InputMaybe<FaqCreateNestedManyWithoutProdutcsInput>;
  INLINES?: InputMaybe<InlineCreateNestedManyWithoutProductsInput>;
  LABELS?: InputMaybe<LabelCreateNestedManyWithoutProductsInput>;
  MEDIAS?: InputMaybe<MediaCreateNestedManyWithoutProductsInput>;
  OPTIONS?: InputMaybe<OptionCreateNestedManyWithoutProductsInput>;
  PRICES?: InputMaybe<PriceCreateNestedManyWithoutProductInput>;
  SEO?: InputMaybe<SeoCreateNestedOneWithoutProductsInput>;
  SKU?: InputMaybe<Scalars['String']>;
  TAGS?: InputMaybe<TagCreateNestedManyWithoutProdutcsInput>;
  URLS?: InputMaybe<UrlCreateNestedManyWithoutProdutcsInput>;
  colorName?: InputMaybe<Scalars['String']>;
  colorValue?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  enTitle?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  faTitle?: InputMaybe<Scalars['String']>;
  generationYear?: InputMaybe<Scalars['String']>;
  gradient?: InputMaybe<Array<Scalars['String']>>;
  height?: InputMaybe<Scalars['Int']>;
  inlineSpecification?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  originalLink?: InputMaybe<Scalars['String']>;
  originalPrice?: InputMaybe<Scalars['Int']>;
  partNumber?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  specification?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  weight?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ProductCreateNestedManyWithoutAdditionalsInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedManyWithoutBrandInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedManyWithoutFaqsInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedManyWithoutInlinesInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedManyWithoutOptionsInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedManyWithoutUrlsInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutPricesInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutReserveInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  ADDITIONALS?: InputMaybe<AdditionalOrderByRelationAggregateInput>;
  BRAND?: InputMaybe<BrandOrderByWithRelationInput>;
  CATEGORY?: InputMaybe<CategoryOrderByWithRelationInput>;
  FAQS?: InputMaybe<FaqOrderByRelationAggregateInput>;
  INLINES?: InputMaybe<InlineOrderByRelationAggregateInput>;
  LABELS?: InputMaybe<LabelOrderByRelationAggregateInput>;
  MEDIAS?: InputMaybe<MediaOrderByRelationAggregateInput>;
  OPTIONS?: InputMaybe<OptionOrderByRelationAggregateInput>;
  PRICES?: InputMaybe<PriceOrderByRelationAggregateInput>;
  SEO?: InputMaybe<SeoOrderByWithRelationInput>;
  SKU?: InputMaybe<SortOrder>;
  TAGS?: InputMaybe<TagOrderByRelationAggregateInput>;
  URLS?: InputMaybe<UrlOrderByRelationAggregateInput>;
  brand?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  colorName?: InputMaybe<SortOrder>;
  colorValue?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  enName?: InputMaybe<SortOrder>;
  enTitle?: InputMaybe<SortOrder>;
  faName?: InputMaybe<SortOrder>;
  faTitle?: InputMaybe<SortOrder>;
  generationYear?: InputMaybe<SortOrder>;
  gradient?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inlineSpecification?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  originalLink?: InputMaybe<SortOrder>;
  originalPrice?: InputMaybe<SortOrder>;
  partNumber?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  specification?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  Sku = 'SKU',
  Brand = 'brand',
  Category = 'category',
  ColorName = 'colorName',
  ColorValue = 'colorValue',
  CreatedAt = 'createdAt',
  Default = 'default',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EnName = 'enName',
  EnTitle = 'enTitle',
  FaName = 'faName',
  FaTitle = 'faTitle',
  GenerationYear = 'generationYear',
  Gradient = 'gradient',
  Height = 'height',
  Id = 'id',
  InlineSpecification = 'inlineSpecification',
  Length = 'length',
  Order = 'order',
  OriginalLink = 'originalLink',
  OriginalPrice = 'originalPrice',
  PartNumber = 'partNumber',
  Quantity = 'quantity',
  Seo = 'seo',
  Slug = 'slug',
  Specification = 'specification',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  Views = 'views',
  Weight = 'weight',
  Width = 'width'
}

export type ProductUpdateInput = {
  ADDITIONALS?: InputMaybe<AdditionalUpdateManyWithoutProductsNestedInput>;
  BRAND?: InputMaybe<BrandUpdateOneWithoutProductsNestedInput>;
  CATEGORY?: InputMaybe<CategoryUpdateOneWithoutProductsNestedInput>;
  FAQS?: InputMaybe<FaqUpdateManyWithoutProdutcsNestedInput>;
  INLINES?: InputMaybe<InlineUpdateManyWithoutProductsNestedInput>;
  LABELS?: InputMaybe<LabelUpdateManyWithoutProductsNestedInput>;
  MEDIAS?: InputMaybe<MediaUpdateManyWithoutProductsNestedInput>;
  OPTIONS?: InputMaybe<OptionUpdateManyWithoutProductsNestedInput>;
  PRICES?: InputMaybe<PriceUpdateManyWithoutProductNestedInput>;
  SEO?: InputMaybe<SeoUpdateOneWithoutProductsNestedInput>;
  SKU?: InputMaybe<Scalars['String']>;
  TAGS?: InputMaybe<TagUpdateManyWithoutProdutcsNestedInput>;
  URLS?: InputMaybe<UrlUpdateManyWithoutProdutcsNestedInput>;
  colorName?: InputMaybe<Scalars['String']>;
  colorValue?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  enTitle?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  faTitle?: InputMaybe<Scalars['String']>;
  generationYear?: InputMaybe<Scalars['String']>;
  gradient?: InputMaybe<Array<Scalars['String']>>;
  height?: InputMaybe<Scalars['Int']>;
  inlineSpecification?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  originalLink?: InputMaybe<Scalars['String']>;
  originalPrice?: InputMaybe<Scalars['Int']>;
  partNumber?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  specification?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  weight?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ProductUpdateManyWithoutAdditionalsNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyWithoutBrandNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyWithoutFaqsNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyWithoutInlinesNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyWithoutOptionsNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyWithoutTagsNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyWithoutUrlsNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateOneWithoutCommentsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProductUpdateOneWithoutPricesNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProductUpdateOneWithoutReserveNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProductWhereInput = {
  ADDITIONALS?: InputMaybe<AdditionalListRelationFilter>;
  AND?: InputMaybe<Array<ProductWhereInput>>;
  BRAND?: InputMaybe<BrandRelationFilter>;
  CATEGORY?: InputMaybe<CategoryRelationFilter>;
  FAQS?: InputMaybe<FaqListRelationFilter>;
  INLINES?: InputMaybe<InlineListRelationFilter>;
  LABELS?: InputMaybe<LabelListRelationFilter>;
  MEDIAS?: InputMaybe<MediaListRelationFilter>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OPTIONS?: InputMaybe<OptionListRelationFilter>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  PRICES?: InputMaybe<PriceListRelationFilter>;
  SEO?: InputMaybe<SeoRelationFilter>;
  SKU?: InputMaybe<StringFilter>;
  TAGS?: InputMaybe<TagListRelationFilter>;
  URLS?: InputMaybe<UrlListRelationFilter>;
  brand?: InputMaybe<IntFilter>;
  category?: InputMaybe<IntFilter>;
  colorName?: InputMaybe<StringFilter>;
  colorValue?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  default?: InputMaybe<BoolFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  enName?: InputMaybe<StringFilter>;
  enTitle?: InputMaybe<StringFilter>;
  faName?: InputMaybe<StringFilter>;
  faTitle?: InputMaybe<StringFilter>;
  generationYear?: InputMaybe<StringFilter>;
  gradient?: InputMaybe<StringListFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  inlineSpecification?: InputMaybe<StringFilter>;
  length?: InputMaybe<IntFilter>;
  order?: InputMaybe<IntFilter>;
  originalLink?: InputMaybe<StringFilter>;
  originalPrice?: InputMaybe<IntFilter>;
  partNumber?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  seo?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  specification?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weight?: InputMaybe<IntFilter>;
  width?: InputMaybe<IntFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Province = {
  __typename?: 'Province';
  CITIES?: Maybe<Array<City>>;
  _count: ProvinceCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProvinceCount = {
  __typename?: 'ProvinceCount';
  ADDRESSES: Scalars['Int'];
  CITIES: Scalars['Int'];
};

export type ProvinceCreateInput = {
  CITIES?: InputMaybe<CityCreateNestedManyWithoutProvinceInput>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type ProvinceCreateNestedOneWithoutAddressesInput = {
  connect?: InputMaybe<ProvinceWhereUniqueInput>;
};

export type ProvinceCreateNestedOneWithoutCitiesInput = {
  connect?: InputMaybe<ProvinceWhereUniqueInput>;
};

export type ProvinceOrderByWithRelationInput = {
  CITIES?: InputMaybe<CityOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  enName?: InputMaybe<SortOrder>;
  faName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProvinceRelationFilter = {
  is?: InputMaybe<ProvinceWhereInput>;
  isNot?: InputMaybe<ProvinceWhereInput>;
};

export enum ProvinceScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EnName = 'enName',
  FaName = 'faName',
  Id = 'id',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type ProvinceUpdateInput = {
  CITIES?: InputMaybe<CityUpdateManyWithoutProvinceNestedInput>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type ProvinceUpdateOneWithoutAddressesNestedInput = {
  connect?: InputMaybe<ProvinceWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProvinceUpdateOneWithoutCitiesNestedInput = {
  connect?: InputMaybe<ProvinceWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProvinceWhereInput = {
  AND?: InputMaybe<Array<ProvinceWhereInput>>;
  CITIES?: InputMaybe<CityListRelationFilter>;
  NOT?: InputMaybe<Array<ProvinceWhereInput>>;
  OR?: InputMaybe<Array<ProvinceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  enName?: InputMaybe<StringFilter>;
  faName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProvinceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  GetJWTUser?: Maybe<User>;
  GetManyAdditional?: Maybe<Additionals>;
  GetManyAdditionalInvoice?: Maybe<Ainvoices>;
  GetManyAddress?: Maybe<Addresses>;
  GetManyArticle?: Maybe<Articles>;
  GetManyBrand?: Maybe<Brands>;
  GetManyCategory?: Maybe<Categorys>;
  GetManyCity?: Maybe<Cities>;
  GetManyComment?: Maybe<Comments>;
  GetManyDelivery?: Maybe<Deliverys>;
  GetManyDeliveryMethod?: Maybe<Deliverymethods>;
  GetManyDiscount?: Maybe<Discounts>;
  GetManyDoorway?: Maybe<Doorways>;
  GetManyFAQ?: Maybe<Faqs>;
  GetManyFinancial?: Maybe<Financials>;
  GetManyFooter?: Maybe<Footers>;
  GetManyHeader?: Maybe<Headers>;
  GetManyInline?: Maybe<Inlines>;
  GetManyLabel?: Maybe<Labels>;
  GetManyMedia?: Maybe<Medias>;
  GetManyNotification?: Maybe<Notifications>;
  GetManyOption?: Maybe<Options>;
  GetManyOrder?: Maybe<Orders>;
  GetManyPage?: Maybe<Pages>;
  GetManyPrice?: Maybe<Prices>;
  GetManyProduct?: Maybe<Products>;
  GetManyProvince?: Maybe<Provinces>;
  GetManyReserve?: Maybe<Reserves>;
  GetManyRole?: Maybe<Roles>;
  GetManySEO?: Maybe<Seos>;
  GetManySetting?: Maybe<Settings>;
  GetManyTag?: Maybe<Tags>;
  GetManyURL?: Maybe<Urls>;
  GetManyUser?: Maybe<Users>;
  GetUniqueAdditional?: Maybe<Additional>;
  GetUniqueAdditionalInvoice?: Maybe<Ainvoice>;
  GetUniqueAddress?: Maybe<Address>;
  GetUniqueArticle?: Maybe<Article>;
  GetUniqueBrand?: Maybe<Brand>;
  GetUniqueCategory?: Maybe<Category>;
  GetUniqueCity?: Maybe<City>;
  GetUniqueComment?: Maybe<Comment>;
  GetUniqueDelivery?: Maybe<Delivery>;
  GetUniqueDeliveryMethod?: Maybe<Deliverymethod>;
  GetUniqueDiscount?: Maybe<Discount>;
  GetUniqueDoorway?: Maybe<Doorway>;
  GetUniqueFAQ?: Maybe<Ffaq>;
  GetUniqueFinancial?: Maybe<Financial>;
  GetUniqueFooter?: Maybe<Footer>;
  GetUniqueHeader?: Maybe<Header>;
  GetUniqueInline?: Maybe<Inline>;
  GetUniqueLabel?: Maybe<Label>;
  GetUniqueMedia?: Maybe<Media>;
  GetUniqueNotification?: Maybe<Notification>;
  GetUniqueOption?: Maybe<Option>;
  GetUniqueOrder?: Maybe<Order>;
  GetUniquePage?: Maybe<Page>;
  GetUniquePrice?: Maybe<Price>;
  GetUniqueProduct?: Maybe<Product>;
  GetUniqueProvince?: Maybe<Province>;
  GetUniqueReserve?: Maybe<Reserve>;
  GetUniqueRole?: Maybe<Role>;
  GetUniqueSEO?: Maybe<Sseo>;
  GetUniqueSetting?: Maybe<Setting>;
  GetUniqueTag?: Maybe<Tag>;
  GetUniqueURL?: Maybe<Uurl>;
  GetUniqueUser?: Maybe<User>;
};


export type QueryGetManyAdditionalArgs = {
  cursor?: InputMaybe<AdditionalWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdditionalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdditionalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdditionalWhereInput>;
};


export type QueryGetManyAdditionalInvoiceArgs = {
  cursor?: InputMaybe<AdditionalInvoiceWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdditionalInvoiceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdditionalInvoiceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdditionalInvoiceWhereInput>;
};


export type QueryGetManyAddressArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryGetManyArticleArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryGetManyBrandArgs = {
  cursor?: InputMaybe<BrandWhereUniqueInput>;
  distinct?: InputMaybe<Array<BrandScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BrandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BrandWhereInput>;
};


export type QueryGetManyCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGetManyCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryGetManyCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryGetManyDeliveryArgs = {
  cursor?: InputMaybe<DeliveryWhereUniqueInput>;
  distinct?: InputMaybe<Array<DeliveryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DeliveryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DeliveryWhereInput>;
};


export type QueryGetManyDeliveryMethodArgs = {
  cursor?: InputMaybe<DeliveryMethodWhereUniqueInput>;
  distinct?: InputMaybe<Array<DeliveryMethodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DeliveryMethodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DeliveryMethodWhereInput>;
};


export type QueryGetManyDiscountArgs = {
  cursor?: InputMaybe<DiscountWhereUniqueInput>;
  distinct?: InputMaybe<Array<DiscountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DiscountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscountWhereInput>;
};


export type QueryGetManyDoorwayArgs = {
  cursor?: InputMaybe<DoorwayWhereUniqueInput>;
  distinct?: InputMaybe<Array<DoorwayScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DoorwayOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DoorwayWhereInput>;
};


export type QueryGetManyFaqArgs = {
  cursor?: InputMaybe<FaqWhereUniqueInput>;
  distinct?: InputMaybe<Array<FaqScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FaqOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryGetManyFinancialArgs = {
  cursor?: InputMaybe<FinancialWhereUniqueInput>;
  distinct?: InputMaybe<Array<FinancialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FinancialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FinancialWhereInput>;
};


export type QueryGetManyFooterArgs = {
  cursor?: InputMaybe<FooterWhereUniqueInput>;
  distinct?: InputMaybe<Array<FooterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FooterOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterWhereInput>;
};


export type QueryGetManyHeaderArgs = {
  cursor?: InputMaybe<HeaderWhereUniqueInput>;
  distinct?: InputMaybe<Array<HeaderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<HeaderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeaderWhereInput>;
};


export type QueryGetManyInlineArgs = {
  cursor?: InputMaybe<InlineWhereUniqueInput>;
  distinct?: InputMaybe<Array<InlineScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InlineOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InlineWhereInput>;
};


export type QueryGetManyLabelArgs = {
  cursor?: InputMaybe<LabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<LabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LabelWhereInput>;
};


export type QueryGetManyMediaArgs = {
  cursor?: InputMaybe<MediaWhereUniqueInput>;
  distinct?: InputMaybe<Array<MediaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MediaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaWhereInput>;
};


export type QueryGetManyNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryGetManyOptionArgs = {
  cursor?: InputMaybe<OptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<OptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OptionWhereInput>;
};


export type QueryGetManyOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryGetManyPageArgs = {
  cursor?: InputMaybe<PageWhereUniqueInput>;
  distinct?: InputMaybe<Array<PageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryGetManyPriceArgs = {
  cursor?: InputMaybe<PriceWhereUniqueInput>;
  distinct?: InputMaybe<Array<PriceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PriceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PriceWhereInput>;
};


export type QueryGetManyProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGetManyProvinceArgs = {
  cursor?: InputMaybe<ProvinceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProvinceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProvinceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProvinceWhereInput>;
};


export type QueryGetManyReserveArgs = {
  cursor?: InputMaybe<ReserveWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReserveScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReserveOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReserveWhereInput>;
};


export type QueryGetManyRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryGetManySeoArgs = {
  cursor?: InputMaybe<SeoWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoWhereInput>;
};


export type QueryGetManySettingArgs = {
  cursor?: InputMaybe<SettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QueryGetManyTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryGetManyUrlArgs = {
  cursor?: InputMaybe<UrlWhereUniqueInput>;
  distinct?: InputMaybe<Array<UrlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UrlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UrlWhereInput>;
};


export type QueryGetManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetUniqueAdditionalArgs = {
  where: AdditionalWhereUniqueInput;
};


export type QueryGetUniqueAdditionalInvoiceArgs = {
  where: AdditionalInvoiceWhereUniqueInput;
};


export type QueryGetUniqueAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryGetUniqueArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type QueryGetUniqueBrandArgs = {
  where: BrandWhereUniqueInput;
};


export type QueryGetUniqueCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryGetUniqueCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryGetUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryGetUniqueDeliveryArgs = {
  where: DeliveryWhereUniqueInput;
};


export type QueryGetUniqueDeliveryMethodArgs = {
  where: DeliveryMethodWhereUniqueInput;
};


export type QueryGetUniqueDiscountArgs = {
  where: DiscountWhereUniqueInput;
};


export type QueryGetUniqueDoorwayArgs = {
  where: DoorwayWhereUniqueInput;
};


export type QueryGetUniqueFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type QueryGetUniqueFinancialArgs = {
  where: FinancialWhereUniqueInput;
};


export type QueryGetUniqueFooterArgs = {
  where: FooterWhereUniqueInput;
};


export type QueryGetUniqueHeaderArgs = {
  where: HeaderWhereUniqueInput;
};


export type QueryGetUniqueInlineArgs = {
  where: InlineWhereUniqueInput;
};


export type QueryGetUniqueLabelArgs = {
  where: LabelWhereUniqueInput;
};


export type QueryGetUniqueMediaArgs = {
  where: MediaWhereUniqueInput;
};


export type QueryGetUniqueNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryGetUniqueOptionArgs = {
  where: OptionWhereUniqueInput;
};


export type QueryGetUniqueOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryGetUniquePageArgs = {
  where: PageWhereUniqueInput;
};


export type QueryGetUniquePriceArgs = {
  where: PriceWhereUniqueInput;
};


export type QueryGetUniqueProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryGetUniqueProvinceArgs = {
  where: ProvinceWhereUniqueInput;
};


export type QueryGetUniqueReserveArgs = {
  where: ReserveWhereUniqueInput;
};


export type QueryGetUniqueRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QueryGetUniqueSeoArgs = {
  where: SeoWhereUniqueInput;
};


export type QueryGetUniqueSettingArgs = {
  where: SettingWhereUniqueInput;
};


export type QueryGetUniqueTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryGetUniqueUrlArgs = {
  where: UrlWhereUniqueInput;
};


export type QueryGetUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Reorderadditional = {
  __typename?: 'REORDERADDITIONAL';
  result?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ResponseStatus>;
};

export type Reordercategory = {
  __typename?: 'REORDERCATEGORY';
  result?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ResponseStatus>;
};

export type Reorderinline = {
  __typename?: 'REORDERINLINE';
  result?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ResponseStatus>;
};

export type Reordermedia = {
  __typename?: 'REORDERMEDIA';
  result?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ResponseStatus>;
};

export type Reorderoption = {
  __typename?: 'REORDEROPTION';
  result?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ResponseStatus>;
};

export type Reorderproduct = {
  __typename?: 'REORDERPRODUCT';
  result?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ResponseStatus>;
};

export type Requestauth = {
  __typename?: 'REQUESTAUTH';
  result?: Maybe<Scalars['String']>;
  status?: Maybe<ResponseStatus>;
};

export type Reserve = {
  __typename?: 'RESERVE';
  result?: Maybe<CustomReserve>;
  status?: Maybe<ResponseStatus>;
};

export type Reserves = {
  __typename?: 'RESERVES';
  result?: Maybe<CustomReserveResult>;
  status?: Maybe<ResponseStatus>;
};

export type Role = {
  __typename?: 'ROLE';
  result?: Maybe<CustomRole>;
  status?: Maybe<ResponseStatus>;
};

export type Roles = {
  __typename?: 'ROLES';
  result?: Maybe<CustomRoleResult>;
  status?: Maybe<ResponseStatus>;
};

export type ReorderAdditionalInput = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type ReorderCategoryInput = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type ReorderInlineInput = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type ReorderMediaInput = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type ReorderOptionInput = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type ReorderProductInput = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type Reserve = {
  __typename?: 'Reserve';
  ARTICLE?: Maybe<Article>;
  PRODUCT?: Maybe<Product>;
  USER?: Maybe<User>;
  article?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  product?: Maybe<Scalars['Int']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Int']>;
};

export type ReserveCreateInput = {
  ARTICLE?: InputMaybe<ArticleCreateNestedOneWithoutReservesInput>;
  PRODUCT?: InputMaybe<ProductCreateNestedOneWithoutReserveInput>;
  USER?: InputMaybe<UserCreateNestedOneWithoutReservesInput>;
  status?: InputMaybe<StatusEnum>;
};

export type ReserveOrderByWithRelationInput = {
  ARTICLE?: InputMaybe<ArticleOrderByWithRelationInput>;
  PRODUCT?: InputMaybe<ProductOrderByWithRelationInput>;
  USER?: InputMaybe<UserOrderByWithRelationInput>;
  article?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<SortOrder>;
};

export enum ReserveScalarFieldEnum {
  Article = 'article',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Product = 'product',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  User = 'user'
}

export type ReserveUpdateInput = {
  ARTICLE?: InputMaybe<ArticleUpdateOneWithoutReservesNestedInput>;
  PRODUCT?: InputMaybe<ProductUpdateOneWithoutReserveNestedInput>;
  USER?: InputMaybe<UserUpdateOneWithoutReservesNestedInput>;
  status?: InputMaybe<StatusEnum>;
};

export type ReserveWhereInput = {
  AND?: InputMaybe<Array<ReserveWhereInput>>;
  ARTICLE?: InputMaybe<ArticleRelationFilter>;
  NOT?: InputMaybe<Array<ReserveWhereInput>>;
  OR?: InputMaybe<Array<ReserveWhereInput>>;
  PRODUCT?: InputMaybe<ProductRelationFilter>;
  USER?: InputMaybe<UserRelationFilter>;
  article?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  product?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<IntFilter>;
};

export type ReserveWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum ResponseStatus {
  AccessDenied = 'ACCESS_DENIED',
  AlreadyExist = 'ALREADY_EXIST',
  AlreadyRemoved = 'ALREADY_REMOVED',
  AuthenticationFailed = 'AUTHENTICATION_FAILED',
  Failed = 'FAILED',
  NotAllowed = 'NOT_ALLOWED',
  NotEnoughData = 'NOT_ENOUGH_DATA',
  NotFound = 'NOT_FOUND',
  Success = 'SUCCESS',
  UnknownError = 'UNKNOWN_ERROR',
  UserNotFound = 'USER_NOT_FOUND'
}

export type Role = {
  __typename?: 'Role';
  USERS?: Maybe<Array<User>>;
  _count: RoleCount;
  accesses?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  USERS: Scalars['Int'];
};

export type RoleCreateInput = {
  USERS?: InputMaybe<UserCreateNestedManyWithoutRolesInput>;
  accesses?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type RoleCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
};

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RoleOrderByWithRelationInput = {
  USERS?: InputMaybe<UserOrderByRelationAggregateInput>;
  accesses?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  enName?: InputMaybe<SortOrder>;
  faName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum RoleScalarFieldEnum {
  Accesses = 'accesses',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EnName = 'enName',
  FaName = 'faName',
  Id = 'id',
  Label = 'label',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type RoleUpdateInput = {
  USERS?: InputMaybe<UserUpdateManyWithoutRolesNestedInput>;
  accesses?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  enName?: InputMaybe<Scalars['String']>;
  faName?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type RoleUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  USERS?: InputMaybe<UserListRelationFilter>;
  accesses?: InputMaybe<StringListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  enName?: InputMaybe<StringFilter>;
  faName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  label?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Seo = {
  __typename?: 'SEO';
  _count: SeoCount;
  alias?: Maybe<Scalars['String']>;
  canonicalURL?: Maybe<Scalars['String']>;
  changefreq?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  follow?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  index?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Scalars['String']>>;
  metaDescription?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Float']>;
  status?: Maybe<StatusEnum>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeoCount = {
  __typename?: 'SEOCount';
  ARTICLES: Scalars['Int'];
  CATEGORIES: Scalars['Int'];
  PAGES: Scalars['Int'];
  PRODUCTS: Scalars['Int'];
};

export type SeoCreateInput = {
  alias?: InputMaybe<Scalars['String']>;
  canonicalURL?: InputMaybe<Scalars['String']>;
  changefreq?: InputMaybe<Scalars['String']>;
  follow?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['Boolean']>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
};

export type SeoCreateNestedOneWithoutArticlesInput = {
  connect?: InputMaybe<SeoWhereUniqueInput>;
};

export type SeoCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<SeoWhereUniqueInput>;
};

export type SeoCreateNestedOneWithoutPagesInput = {
  connect?: InputMaybe<SeoWhereUniqueInput>;
};

export type SeoCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<SeoWhereUniqueInput>;
};

export type SeoOrderByWithRelationInput = {
  alias?: InputMaybe<SortOrder>;
  canonicalURL?: InputMaybe<SortOrder>;
  changefreq?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  follow?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SeoRelationFilter = {
  is?: InputMaybe<SeoWhereInput>;
  isNot?: InputMaybe<SeoWhereInput>;
};

export type Seos = {
  __typename?: 'SEOS';
  result?: Maybe<CustomSeoResult>;
  status?: Maybe<ResponseStatus>;
};

export enum SeoScalarFieldEnum {
  Alias = 'alias',
  CanonicalUrl = 'canonicalURL',
  Changefreq = 'changefreq',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Follow = 'follow',
  Id = 'id',
  Index = 'index',
  Keywords = 'keywords',
  MetaDescription = 'metaDescription',
  Priority = 'priority',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type SeoUpdateInput = {
  alias?: InputMaybe<Scalars['String']>;
  canonicalURL?: InputMaybe<Scalars['String']>;
  changefreq?: InputMaybe<Scalars['String']>;
  follow?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['Boolean']>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<StatusEnum>;
  title?: InputMaybe<Scalars['String']>;
};

export type SeoUpdateOneWithoutArticlesNestedInput = {
  connect?: InputMaybe<SeoWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SeoUpdateOneWithoutCategoriesNestedInput = {
  connect?: InputMaybe<SeoWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SeoUpdateOneWithoutPagesNestedInput = {
  connect?: InputMaybe<SeoWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SeoUpdateOneWithoutProductsNestedInput = {
  connect?: InputMaybe<SeoWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SeoWhereInput = {
  AND?: InputMaybe<Array<SeoWhereInput>>;
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  OR?: InputMaybe<Array<SeoWhereInput>>;
  alias?: InputMaybe<StringFilter>;
  canonicalURL?: InputMaybe<StringFilter>;
  changefreq?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  follow?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  index?: InputMaybe<BoolFilter>;
  keywords?: InputMaybe<StringListFilter>;
  metaDescription?: InputMaybe<StringFilter>;
  priority?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SeoWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Setting = {
  __typename?: 'SETTING';
  result?: Maybe<CustomSetting>;
  status?: Maybe<ResponseStatus>;
};

export type Settings = {
  __typename?: 'SETTINGS';
  result?: Maybe<CustomSettingResult>;
  status?: Maybe<ResponseStatus>;
};

export type Sseo = {
  __typename?: 'SSEO';
  result?: Maybe<CustomSeo>;
  status?: Maybe<ResponseStatus>;
};

export type SettingCreateInput = {
  key?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type SettingOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum SettingScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Key = 'key',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type SettingUpdateInput = {
  key?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type SettingWhereInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  NOT?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type SettingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum StatusEnum {
  Active = 'ACTIVE',
  Archive = 'ARCHIVE',
  Inactive = 'INACTIVE'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Tag = {
  __typename?: 'TAG';
  result?: Maybe<CustomTag>;
  status?: Maybe<ResponseStatus>;
};

export type Tags = {
  __typename?: 'TAGS';
  result?: Maybe<CustomTagResult>;
  status?: Maybe<ResponseStatus>;
};

export type Tag = {
  __typename?: 'Tag';
  ARTICLES?: Maybe<Array<Article>>;
  CATEGORIES?: Maybe<Array<Category>>;
  PRODUTCS?: Maybe<Array<Product>>;
  _count: TagCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  follow?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  index?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagCount = {
  __typename?: 'TagCount';
  ARTICLES: Scalars['Int'];
  CATEGORIES: Scalars['Int'];
  PRODUTCS: Scalars['Int'];
};

export type TagCreateInput = {
  ARTICLES?: InputMaybe<ArticleCreateNestedManyWithoutTagsInput>;
  CATEGORIES?: InputMaybe<CategoryCreateNestedManyWithoutTagsInput>;
  PRODUTCS?: InputMaybe<ProductCreateNestedManyWithoutTagsInput>;
  description?: InputMaybe<Scalars['String']>;
  follow?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type TagCreateNestedManyWithoutArticlesInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateNestedManyWithoutProdutcsInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  ARTICLES?: InputMaybe<ArticleOrderByRelationAggregateInput>;
  CATEGORIES?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  PRODUTCS?: InputMaybe<ProductOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  follow?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Follow = 'follow',
  Id = 'id',
  Index = 'index',
  Name = 'name',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type TagUpdateInput = {
  ARTICLES?: InputMaybe<ArticleUpdateManyWithoutTagsNestedInput>;
  CATEGORIES?: InputMaybe<CategoryUpdateManyWithoutTagsNestedInput>;
  PRODUTCS?: InputMaybe<ProductUpdateManyWithoutTagsNestedInput>;
  description?: InputMaybe<Scalars['String']>;
  follow?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type TagUpdateManyWithoutArticlesNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateManyWithoutProdutcsNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  ARTICLES?: InputMaybe<ArticleListRelationFilter>;
  CATEGORIES?: InputMaybe<CategoryListRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  PRODUTCS?: InputMaybe<ProductListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  follow?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  index?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Upload = {
  __typename?: 'UPLOAD';
  result?: Maybe<Scalars['String']>;
  status?: Maybe<ResponseStatus>;
};

export type Url = {
  __typename?: 'URL';
  ARTICLES?: Maybe<Array<Article>>;
  CATEGORIES?: Maybe<Array<Category>>;
  PRODUTCS?: Maybe<Array<Product>>;
  _count: UrlCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  input?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};

export type UrlCount = {
  __typename?: 'URLCount';
  ARTICLES: Scalars['Int'];
  CATEGORIES: Scalars['Int'];
  PRODUTCS: Scalars['Int'];
};

export type UrlCreateInput = {
  ARTICLES?: InputMaybe<ArticleCreateNestedManyWithoutUrlsInput>;
  CATEGORIES?: InputMaybe<CategoryCreateNestedManyWithoutUrlsInput>;
  PRODUTCS?: InputMaybe<ProductCreateNestedManyWithoutUrlsInput>;
  input?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  output?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type UrlCreateNestedManyWithoutArticlesInput = {
  connect?: InputMaybe<Array<UrlWhereUniqueInput>>;
};

export type UrlCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<UrlWhereUniqueInput>>;
};

export type UrlCreateNestedManyWithoutProdutcsInput = {
  connect?: InputMaybe<Array<UrlWhereUniqueInput>>;
};

export type UrlListRelationFilter = {
  every?: InputMaybe<UrlWhereInput>;
  none?: InputMaybe<UrlWhereInput>;
  some?: InputMaybe<UrlWhereInput>;
};

export type UrlOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UrlOrderByWithRelationInput = {
  ARTICLES?: InputMaybe<ArticleOrderByRelationAggregateInput>;
  CATEGORIES?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  PRODUTCS?: InputMaybe<ProductOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  output?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Urls = {
  __typename?: 'URLS';
  result?: Maybe<CustomUrlResult>;
  status?: Maybe<ResponseStatus>;
};

export enum UrlScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Input = 'input',
  Name = 'name',
  Output = 'output',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  Views = 'views'
}

export type UrlUpdateInput = {
  ARTICLES?: InputMaybe<ArticleUpdateManyWithoutUrlsNestedInput>;
  CATEGORIES?: InputMaybe<CategoryUpdateManyWithoutUrlsNestedInput>;
  PRODUTCS?: InputMaybe<ProductUpdateManyWithoutUrlsNestedInput>;
  input?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  output?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type UrlUpdateManyWithoutArticlesNestedInput = {
  connect?: InputMaybe<Array<UrlWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<UrlWhereUniqueInput>>;
};

export type UrlUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<UrlWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<UrlWhereUniqueInput>>;
};

export type UrlUpdateManyWithoutProdutcsNestedInput = {
  connect?: InputMaybe<Array<UrlWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<UrlWhereUniqueInput>>;
};

export type UrlWhereInput = {
  AND?: InputMaybe<Array<UrlWhereInput>>;
  ARTICLES?: InputMaybe<ArticleListRelationFilter>;
  CATEGORIES?: InputMaybe<CategoryListRelationFilter>;
  NOT?: InputMaybe<Array<UrlWhereInput>>;
  OR?: InputMaybe<Array<UrlWhereInput>>;
  PRODUTCS?: InputMaybe<ProductListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  input?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  output?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UrlWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'USER';
  result?: Maybe<CustomUser>;
  status?: Maybe<ResponseStatus>;
};

export type Users = {
  __typename?: 'USERS';
  result?: Maybe<CustomUserResult>;
  status?: Maybe<ResponseStatus>;
};

export type Uurl = {
  __typename?: 'UURL';
  result?: Maybe<CustomUrl>;
  status?: Maybe<ResponseStatus>;
};

export type UploadMediaInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  ADDRESSES?: Maybe<Array<Address>>;
  MEDIA?: Maybe<Media>;
  ORDERS?: Maybe<Array<Order>>;
  RESERVES?: Maybe<Array<Reserve>>;
  ROLES?: Maybe<Array<Role>>;
  _count: UserCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['Int']>;
  nationalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  ADDRESSES: Scalars['Int'];
  AUTHS: Scalars['Int'];
  COMMENTS: Scalars['Int'];
  ORDERS: Scalars['Int'];
  PRICES: Scalars['Int'];
  RESERVES: Scalars['Int'];
  ROLES: Scalars['Int'];
};

export type UserCreateInput = {
  ADDRESSES?: InputMaybe<AddressCreateNestedManyWithoutUserInput>;
  MEDIA?: InputMaybe<MediaCreateNestedOneWithoutUsersInput>;
  ROLES?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  nationalCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type UserCreateNestedManyWithoutRolesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedOneWithoutAddressesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutPricesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutReservesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  ADDRESSES?: InputMaybe<AddressOrderByRelationAggregateInput>;
  MEDIA?: InputMaybe<MediaOrderByWithRelationInput>;
  ROLES?: InputMaybe<RoleOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  nationalCode?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  FullName = 'fullName',
  Id = 'id',
  Media = 'media',
  NationalCode = 'nationalCode',
  PhoneNumber = 'phoneNumber',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type UserUpdateInput = {
  ADDRESSES?: InputMaybe<AddressUpdateManyWithoutUserNestedInput>;
  MEDIA?: InputMaybe<MediaUpdateOneWithoutUsersNestedInput>;
  ROLES?: InputMaybe<RoleUpdateManyWithoutUsersNestedInput>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  nationalCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};

export type UserUpdateManyWithoutRolesNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneWithoutAddressesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateOneWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateOneWithoutOrdersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateOneWithoutPricesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateOneWithoutReservesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserWhereInput = {
  ADDRESSES?: InputMaybe<AddressListRelationFilter>;
  AND?: InputMaybe<Array<UserWhereInput>>;
  MEDIA?: InputMaybe<MediaRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  ROLES?: InputMaybe<RoleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  media?: InputMaybe<IntFilter>;
  nationalCode?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Verifyauth = {
  __typename?: 'VERIFYAUTH';
  result?: Maybe<Scalars['String']>;
  status?: Maybe<ResponseStatus>;
};

export type GatMacQueryVariables = Exact<{
  where?: InputMaybe<CategoryWhereInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput> | CategoryOrderByWithRelationInput>;
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
}>;


export type GatMacQuery = { __typename?: 'Query', GetManyCategory?: { __typename?: 'CATEGORYS', result?: { __typename?: 'CustomCategoryResult', items?: Array<{ __typename?: 'CustomCategory', id: number, status?: StatusEnum | null, faName?: string | null, parent?: number | null, slug?: string | null, order?: number | null, media?: number | null, MEDIA?: { __typename?: 'Media', id: number, name?: string | null, key?: string | null } | null }> | null } | null } | null };


export const GatMacDocument = gql`
    query GatMac($where: CategoryWhereInput, $orderBy: [CategoryOrderByWithRelationInput!], $cursor: CategoryWhereUniqueInput) {
  GetManyCategory(where: $where, orderBy: $orderBy, cursor: $cursor) {
    result {
      items {
        id
        status
        faName
        parent
        slug
        order
        media
        MEDIA {
          id
          name
          key
        }
      }
    }
  }
}
    `;

/**
 * __useGatMacQuery__
 *
 * To run a query within a React component, call `useGatMacQuery` and pass it any options that fit your needs.
 * When your component renders, `useGatMacQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGatMacQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGatMacQuery(baseOptions?: Apollo.QueryHookOptions<GatMacQuery, GatMacQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GatMacQuery, GatMacQueryVariables>(GatMacDocument, options);
      }
export function useGatMacLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GatMacQuery, GatMacQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GatMacQuery, GatMacQueryVariables>(GatMacDocument, options);
        }
export type GatMacQueryHookResult = ReturnType<typeof useGatMacQuery>;
export type GatMacLazyQueryHookResult = ReturnType<typeof useGatMacLazyQuery>;
export type GatMacQueryResult = Apollo.QueryResult<GatMacQuery, GatMacQueryVariables>;