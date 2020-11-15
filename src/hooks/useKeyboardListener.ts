import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";

function useKeyboardListener() {
  const [didKeyboardShow, setKeyboardShow] = useState(false);

  const _keyboardDidShow = useCallback(() => {
    setKeyboardShow(true);
  }, []);

  const _keyboardDidHide = useCallback(() => {
    setKeyboardShow(false);
  }, []);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, [_keyboardDidHide, _keyboardDidShow]);

  return { didKeyboardShow };
}

export default useKeyboardListener;
