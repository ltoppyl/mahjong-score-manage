import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

import { Button, Icon, Text } from "@chakra-ui/react";

type Props = {
  type: "text" | "rank" | "google-icon";
  text: string;
  isShadow: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  clickFn?: () => void;
};

export const TileButton = ({
  type,
  text,
  isShadow,
  isDisabled,
  isLoading,
  clickFn,
}: Props) => {
  // クライアントサイドでのみフォントを変換
  // XXX: ChatGPT を元に生成したコードであるため完全に理解できていない
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Button
        bg="white"
        color="black"
        variant="outline"
        borderBottom="6px solid #FFE400"
        isDisabled={isDisabled}
        isLoading={isLoading}
        w={14}
        h={24}
        sx={{
          boxShadow: isShadow ? "inset 0px 0px 10px rgba(0, 0, 0, 0.7)" : "",
          ".tile-button": {
            fontFamily: "Zhi Mang Xing, cursive",
            fontSize: 32,
            writingMode: "vertical-rl",
          },
          ".tile-rank": {
            color: "red",
          },
        }}
        onClick={clickFn}
      >
        {type === "text" && <Text className="tile-button">{text}</Text>}
        {type === "rank" && (
          <Text className="tile-button">
            {text.slice(0, 1)}
            <Text as="span" className="tile-rank">
              {text.slice(1)}
            </Text>
          </Text>
        )}
        {type === "google-icon" && <Icon as={FcGoogle} w={8} h={8} />}
      </Button>
    </>
  );
};
