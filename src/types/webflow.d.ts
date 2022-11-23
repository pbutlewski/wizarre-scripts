import { Webflow } from '@finsweet/ts-utils';

type Callback = () => unknown;

declare global {
  interface Window {
    Webflow?: Webflow | Callback[];
  }
}
export {};
