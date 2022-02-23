export interface AppLayoutProps {
  servicesDivRef: React.MutableRefObject<HTMLInputElement> | null;
  children?: React.ReactChild | React.ReactChild[]; // Reference: https://www.carlrippon.com/react-children-with-typescript/
}
