// tsrfc

import React from "react";
import ListConditionsItem from "./ListConditionsItem";

// defaultProps, propTypes (JS)
// propTypes aşağıdaki type değerine denk gelir
type Props = {
  title?: string; // required
};

// sayfaya person listesi gösterecek olan modeli tanımladık
export interface IPerson {
  id: number;
  firstname: string; // required alan
  middlename?: string | undefined; // optional alan
  lastname: string;
}

// ReactJS List Kavramı
// deafultProps (title = 'default') denk gelir
export default function ListConditions({ title = "default" }: Props) {
  // union types
  const persons: Array<IPerson> | IPerson[] = [
    {
      id: 1,
      firstname: "ahmet",
      lastname: "tan",
    },
    {
      id: 2,
      firstname: "can",
      lastname: "tan",
    },
    {
      id: 3,
      firstname: "ali",
      middlename: "mehmet",
      lastname: "can",
    },
    // {
    //   firstname: "can",
    //   lastname: "tan",
    // },
  ];

  const Delete = (id: number): void => {
    console.log("item-deleted", id);
  };

  // typesafe çalışmanın güzelliklerinden bir diğeri intellisense
  // key değeri list içerisindeki itemların unique değerlere sahip olmasını sağlıyor.
  // not map ile çalışırken key koymayı unutmayalım
  // && operatörü kullanarak varsa null değilse template bir değer yansıtma şeklide kullanabiliriz.
  // ternaryif
  return (
    // <div>
    //   <ul>
    //     {persons.map((item: IPerson) => {
    //       let hasMiddleName: boolean = false;

    //       if (item.middlename !== undefined) {
    //         hasMiddleName = true;
    //         console.log("2 isimli", item, hasMiddleName);
    //       } else {
    //         hasMiddleName = false;
    //         console.log("tek isimli", item, hasMiddleName);
    //       }

    //       // eslint-disable-next-line no-lone-blocks
    //       {
    //         /* eğer return değeri ile render kısmında kod yazıyorsak && veya ternaryif kullanabilir */
    //       }
    //       return (
    //         <li key={item.id}>
    //           <span>iki isimli mi ? {String(hasMiddleName)} </span>
    //           {item.firstname}{" "}
    //           {item.middlename && (
    //             <span style={{ color: "red" }}>{item.middlename}</span>
    //           )}{" "}
    //           {item.lastname}
    //           {/* ternaryif kullanımı */}{" "}
    //           {item.middlename ? (
    //             <span>(2 adlı bir kişi)</span>
    //           ) : (
    //             <span>(tek adlı)</span>
    //           )}
    //           <button onClick={() => Delete(item.id)}> x </button>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>

    // component içinde child compnent döndük
    // not itemları map içerisinde tanımlarken key değeri map bulunduğu yerde tanımlanmalıdır
    // ListConditions parent Component

    <div>
      <ul>
        {persons.map((item: IPerson) => {
          return (
            <ListConditionsItem //child component
              key={item.id}
              id={item.id}
              firstname={item.firstname}
              lastname={item.lastname}
            />
          );
        })}
      </ul>
    </div>
  );
}
