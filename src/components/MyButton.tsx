import { Button } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

type Props = {
  num: number;
};

const Parts: FunctionComponent<Props> = (props) => {
  return <Button colorScheme="blue">Button: {props.num}</Button>;
};

export default Parts;
