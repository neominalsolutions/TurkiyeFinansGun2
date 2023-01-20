export let a: string = "deneme";

// helper
// pretty date format
// bir çok kişinin ortak kullanacağı methodları export ederek kendimize uygulama içinde kolaylık sağlar. (reusable)
export function getPrettyDate(date: Date) {
  return date.toDateString();
}
