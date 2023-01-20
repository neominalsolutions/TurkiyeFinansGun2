const promise1 = new Promise((resolve, reject) => {
  resolve("data");
});

const promise2 = Promise.reject("hata err");

// Promise Ecmascript 6.0 ile gelen bir standart.
// clousure, callback (callback hell)

// Ecmascript 7.0 await async = Promise aynısı

// kod senkronlaşmış oluyor
// Promiseleri try catch ile yazamıyoruz.

try {
  let response = await promise1;
  let response2 = await promise2;
} catch (error) {
  console.log("err", error);
}

// promise
promise1
  .then((response) => {
    // resolve durumunda çalışan
    // resolve olursa response bize data döner

    promise2
      .then((data2) => {
        // promise3
      })
      .catch((err) => {});

    console.log("data", response);
  })
  .then(promise2)
  .catch((err) => {
    // reject durumunda çalışan kısım
    // bir hata meydana geldi
    console.log("err", err);
  })
  .finally(() => {
    // ister reject ister resolve her durumda çalışır
    // bağlantıları kapat,
    // interval varsa clear et
    // subscription varsa redux dispacth işlemi varsa bunları temizle
  });

// Promise1 bittikten sonra Promise1 den gelen datanın durumuna göre Promise2 çağırlması yani api dan çekilen bir data sonucuna göre başka bir api call işlemi promise chain dediğimiz yapıyı oluşturuyor.
