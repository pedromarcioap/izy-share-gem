import type { ReactElement } from 'react';

export interface ShareParams {
  url: string;
  text: string;
  title: string;
}

export interface SocialPlatform {
  name: string;
  // Fix: Use ReactElement instead of JSX.Element to resolve "Cannot find namespace 'JSX'" error.
  icon: ReactElement;
  shareUrl: (params: ShareParams) => string;
}
