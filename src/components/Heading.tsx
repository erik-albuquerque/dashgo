import {
  Heading as H2,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

interface HeadingProps extends ChakraHeadingProps {
  children: string;
}

export function Heading({ children, ...rest }: HeadingProps) {
  return (
    <H2 size="lg" fontWeight="normal" {...rest}>
      {children}
    </H2>
  );
}
