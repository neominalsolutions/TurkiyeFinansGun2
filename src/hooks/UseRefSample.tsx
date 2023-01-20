import React, { useEffect, useRef, useState } from "react";

export default function UseRefSample() {
  const inputRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<number>(0);
  let [number, setnumber] = useState(0);

  useEffect(() => {
    // console.log("useEffect");
    // console.log("inputRef", inputRef);
    // kaç kez use effect girildi
    valueRef.current = number;
    console.log("valueRef", valueRef.current);
  }, [number]);

  // state değikliği yapmadan yani yeniden render almadan domdaki bir elemente referansı üzerinden erişim sağlamak

  // arkaplanda state değişikliklerini takip edebileceğimiz bir veri tutma loglama işlemi için kullanır. stateler arasındaki geçişleri kayıt altına alabilmemize imkan sağlar.

  // virtual doma dost bir hook

  // Js Document.getElementByıd seçimine çok benzer.

  const changeState = () => {
    setnumber(number++);
  };

  const focus = () => {
    // ref ile focus

    console.log("inputRef", inputRef);
    (inputRef?.current as HTMLInputElement).style.color = "red";
    (inputRef?.current as HTMLInputElement).focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <br></br>
      <button onClick={focus}>Focus</button>
      <button onClick={changeState}>Chnage State</button>
      prev: {valueRef.current}
      current: {number}
    </div>
  );
}
