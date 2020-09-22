export class DictionaryModel {
  public name: string;
  public key: string;
  public label: string;
  public content: string;
  public parentKey: string;
  public tenant?: string;
  public type: string;

  constructor(
    name: string,
    key: string,
    label: string,
    content: string,
    parentKey: string,
    type: string,
    tenant?: string,
  ) {
    this.name = name;
    this.key = key;
    this.label = label;
    this.content = content;
    this.parentKey = parentKey;
    this.tenant = tenant;
    this.type = type;
  }
}
