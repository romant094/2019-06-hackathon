//
/*

Фунции, которые помогают в том, чтбы все выглядело отлично
- дата
- многоязычность
- другое

 */


export const dateToLocal = (d) => {
  var dateOpts = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(d).toLocaleDateString('ru-RU',dateOpts)
}