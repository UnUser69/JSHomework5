/*Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив productes используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

```
const products = [
{
id: 3,
price: 127,
photos: [
"1.jpg",
"2.jpg",
],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: [
"3.jpg",
],
},
{
id: 8,
price: 78,
},
];

[]()
[]()*/

const productes = [
    {
    id: 3,
    price: 127,
    photos: [
    "1.jpg",
    "2.jpg",
    ],
    },
    {
    id: 5,
    price: 499,
    photos: [],
    },
    {
    id: 10,
    price: 26,
    photos: [
    "3.jpg",
    ],
    },
    {
    id: 8,
    price: 78,
    },
    ];

    const newArray = productes.filter(item =>
        item.photos && item.photos.length > 0);
    console.log(newArray);

    productes.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      console.log(productes)