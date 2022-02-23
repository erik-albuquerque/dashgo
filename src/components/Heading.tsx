import {
  Heading as H2,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeadingProps extends ChakraHeadingProps {
  children: ReactNode;
}

export function Heading({ children, ...rest }: HeadingProps) {
  return (
    <H2 size="lg" fontWeight="normal" {...rest}>
      {children}
    </H2>
  );
}
