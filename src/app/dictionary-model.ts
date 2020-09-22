export interface DictionaryModel {
  Name: string;
  Key: string;
  Label: string;
  Content: string;
  ParentKey: string;
  Tenant?: string;
  Type: string;
}
