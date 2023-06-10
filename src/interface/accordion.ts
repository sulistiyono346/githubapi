type onClickAccordionSummary = (name: string) => void;
type setIsFirstInitialization = (arg0: boolean) => void;

export interface UserDetail {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
  repos: [];
}
export interface AccordionSchema {
  data: UserDetail;
  onClickAccordionSummary: onClickAccordionSummary;
}

export interface FirstInitializationSchema {
  setIsFirstInitialization: setIsFirstInitialization;
}

export interface DetailAccordionSchema {
  description: string;
  forks: number;
  name: string;
  open_issues: number;
  stargazers_count: number;
  watchers: number;
  branches_url: string;
}
