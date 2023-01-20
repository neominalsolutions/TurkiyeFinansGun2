import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { TodoState } from "../models/ITodo";

export default function Todos() {
  // compnent ilk açıldığında tetiklenir. api işlemleri yapılır
  // her bir state güncellemesinde de tetiklenir

  // Burası senkron çalışır
  // DOM paint edilmeden önce araya girilir.
  // html sayfanın yada componentin measurement (ölçüm değerleri) clientWidth hesaplanabilir.ve doma müdehale edebilir.
  useLayoutEffect(() => {
    document.title = "Deneme1";
    document.body.style.color = "red";
    console.log("LayoutEffect", document.body.clientHeight);
  }, []);

  const [count, setcount] = useState<number>(0);
  const [number, setnumber] = useState<number>(0);
  const [todos, setTodos] = useState<TodoState[]>([]);

  const loadStats = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log("user1", response.data, response);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const loadReports = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log("user1", response.data, response);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // state değişiminde tetiklenir.
  // count state değişimini izler
  // dependency boş bırakılınca tek bir kere component render edilirken çalışır.
  // DOM manupulation işlemleri yapılmamalıdır.
  useEffect(() => {
    console.log("first initialize");

    // birbirlerinden bağımsızlar bu durumda böyle çağrılabilir.
    //loadReports();
    //loadStats();

    // ES6
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log("todos1", response.data, response);

        // api call işlemleri ve state güncellenmesi useEffect hook da olur
        // useEffect hook asenkron çalışır.
        setTodos(response.data);

        // iç içe kullanacaksak bunun yerine await tecih edelim
        // axios
        //   .get("https://jsonplaceholder.typicode.com/users/1")
        //   .then((response) => {
        //     console.log("user1", response.data, response);
        //   })
        //   .catch((err) => {
        //     console.log("err", err);
        //   });
      })
      .catch((err) => {
        console.log("err", err);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log("user1", response.data, response);
      })
      .catch((err) => {
        console.log("err", err);
      });

    //ES7

    // self invoked functions
    (async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );

        // setState(); burada state yansır aşağıda hata alır biri state yansır diğeri yansımaz ui da sorun oluşur.
        console.log("response", response.data);

        let response2 = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        // sırası ile veri çekebilirim
        console.log("response2", response2.data);

        // 2 farklı response sonucunda tek bir state yansıtacaksak bu durumda await mantıklı

        // setState en altta yapalım.
      } catch (err) {
        console.log("err", err);
      }
    })();

    //setcount(1); // 0 dan 1 çıktı bir daha burya girdi 1 di değişmedi
  }, []);

  // dependecy ile kullanımı
  // // count state değişiklik olunca tetiklenir
  useEffect(() => {
    console.log("count state change");

    //setcount(1); // 0 dan 1 çıktı bir daha burya girdi 1 di değişmedi
  }, [count]);

  // count veya number değişiminde tetiklensin
  useEffect(() => {
    console.log("count ve number değişimi");

    //setcount(1); // 0 dan 1 çıktı bir daha burya girdi 1 di değişmedi
  }, [count, number]);

  return (
    <div>
      <ul>
        {todos.map((item: TodoState) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>

      <button onClick={() => setcount(2)}>Set Count</button>
      <button onClick={() => setnumber(3)}>Set Number</button>
    </div>
  );
}

// import React from 'react';

// type Props = {}

// export const  A= ({}: Props) => (
//   <>
//     <h1>React TS FC Component</h1>
//     <div>List</div>
//   </>
// );
