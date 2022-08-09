export interface NameAndUrl {
  name: string;
  url: string;
}

export const createEmptyNameAndUrl = (): NameAndUrl => ({
  name: '',
  url: '',
});
