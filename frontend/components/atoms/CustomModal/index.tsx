import React from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: string;
  buttonText: string;
  bgColor?: string;
  variant?: string;
  borderColor?: string;
  clickFn: () => void;
};
export const CustomModal = ({
  isOpen,
  onClose,
  title,
  body,
  buttonText,
  bgColor,
  variant,
  borderColor,
  clickFn,
}: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={bgColor}
              variant={variant}
              borderColor={borderColor}
              onClick={clickFn}
            >
              {buttonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
