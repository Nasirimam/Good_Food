import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Box,
  Heading,
} from "@chakra-ui/react";
import PopingComp from "./PopingComp";
import { FaCubes } from "react-icons/fa";

const CatagoryPop = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button leftIcon={<FaCubes />}>Categories</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <PopingComp />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default CatagoryPop;
