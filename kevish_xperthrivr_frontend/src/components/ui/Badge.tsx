import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// PUBLIC_INTERFACE
export default function Badge({ children }: Props) {
  /** Small status badge. */
  return <span className="badge">{children}</span>;
}
