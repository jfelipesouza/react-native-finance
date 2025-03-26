import {entrypage, EntryPageText} from './pt/entry';
import {loginpage, LoginPageText} from './pt/login';

type RoutersText = {
  entry: EntryPageText;
  login: LoginPageText;
};

const pt: RoutersText = {
  entry: entrypage,
  login: loginpage,
};

export const translationText = {pt};
