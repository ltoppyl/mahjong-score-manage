import ja from "date-fns/locale/ja";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  Center,
  Checkbox,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

import { HSpacer, VSpacer } from "@/components/atoms/Spacer";
import { DateRange } from "@/types/DataRange";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  date: DateRange;
  setDate: Dispatch<SetStateAction<DateRange>>;
  gameType: 3 | 4;
  setGameType: Dispatch<SetStateAction<3 | 4>>;
  clickFn: (() => void) | (() => Promise<void>) | undefined;
};

// react-datepicker の言語を日本語にするためのおまじない
registerLocale("ja", ja);

export const FilteringModal = ({
  isOpen,
  onClose,
  date,
  setDate,
  gameType,
  setGameType,
  clickFn,
}: Props) => {
  // enum
  // 0：送信可
  // 1：入力のどちらか一方が null になっている
  // 2：終了日 < 開始日になっている
  const [isValid, setIsValid] = useState<number>(0);

  useEffect(() => {
    // 日付入力のバリデーション
    // 共に null の場合は送信可
    if (date.start === null && date.end === null) {
      setIsValid(0);
      return;
    }

    // 1 のパターン
    if (date.start === null || date.end === null) {
      setIsValid(1);
      return;
    }

    // 2 のパターンの検証
    if (date.end < date.start) {
      setIsValid(2);
      return;
    }

    setIsValid(0);
  }, [date]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ width: "100vw" }}>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <VStack>
                <VSpacer size={8} />
                {/* ゲームタイプの選択 */}
                <HStack>
                  <Checkbox
                    isChecked={gameType === 4}
                    onChange={() => {
                      setGameType(4);
                    }}
                    defaultChecked
                  >
                    4麻
                  </Checkbox>
                  <HSpacer size={2} />
                  <Checkbox
                    isChecked={gameType === 3}
                    onChange={() => {
                      setGameType(3);
                    }}
                  >
                    3麻
                  </Checkbox>
                </HStack>
                <VSpacer size={8} />

                {/* 日付によるフィルタリング */}
                <HStack>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "125px",
                    }}
                  >
                    <DatePicker
                      placeholderText="開始日"
                      dateFormat="yyyy/MM/dd"
                      locale="ja"
                      selected={date.start}
                      onChange={(selectedDate) => {
                        setDate({
                          start: selectedDate,
                          end: date.end,
                        });
                      }}
                    />
                  </div>
                  <Text>～</Text>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "125px",
                    }}
                  >
                    <DatePicker
                      placeholderText="終了日"
                      dateFormat="yyyy/MM/dd"
                      locale="ja"
                      selected={date.end}
                      onChange={(selectedDate) => {
                        setDate({
                          start: date.start,
                          end: selectedDate,
                        });
                      }}
                    />
                  </div>
                </HStack>
                {/* バリデーションエラーの表示 */}
                {isValid === 1 && (
                  <Text color="red">
                    ※開始日と終了日の両方を入力してください
                  </Text>
                )}
                {isValid === 2 && (
                  <Text color="red">※終了日は開始日より後にしてください</Text>
                )}
                <VSpacer size={8} />
              </VStack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button
                onClick={() => {
                  onClose();

                  // 入力の初期化
                  setDate({
                    start: null,
                    end: null,
                  });
                  setGameType(4);
                }}
              >
                キャンセル
              </Button>
              <HSpacer size={2} />
              <Button
                colorScheme="teal"
                isDisabled={isValid !== 0}
                onClick={clickFn}
              >
                絞り込み
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
