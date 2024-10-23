const products = [
    {
        id: "1rr",
        name: "Laptop Acer Aspire",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 599.99,
        stock: 15,
        image: "/img/laptop.jpg",
        category: "laptops"
    },
    {
        id: "2dfg",
        name: "Laptop Acer Aspire",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 1199.99,
        stock: 8,
        image: "/img/laptop.jpg",
        category: "laptops"
    },
    {
        id: "3df",
        name: "Laptop Acer Aspire",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 749.99,
        stock: 18,
        image: "/img/laptop.jpg",
        category: "laptops"
    },
    {
        id: "4bh",
        name: "Laptop Acer Aspire",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?.",
        price: 49.99,
        stock: 25,
        image: "/img/laptop.jpg",
        category: "laptops"
    },
    {
        id: "5fg",
        name: "Monitor Appel",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 199.99,
        stock: 10,
        image: "/img/pc-todoenuno.jpg",
        category: "pcs"
    },
    {
        id: "6ert",
        name: "Monitor Appel",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 349.99,
        stock: 20,
        image: "/img/pc-todoenuno.jpg",
        category: "pcs"
    },
    {
        id: "7zss",
        name: "Monitor Appel",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 399.99,
        stock: 12,
        image: "/img/pc-todoenuno.jpg",
        category: "pcs"
    },

    {
        id: "8fgh",
        name: "Monitor Appel",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 199.99,
        stock: 30,
        image: "/img/pc-todoenuno.jpg",
        category: "pcs"
    },
    {
        id: "9asd",
        name: "Mouse hp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 299.99,
        stock: 10,
        image: "/img/mouse.jpg",
        category: "articulos"
    },
 
    {
        id: "10cvb",
        name: "Mouse hp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 2499.99,
        stock: 5,
        image: "/img/mouse.jpg",
        category: "articulos"
    },
    {
        id: "11asd",
        name: "Mouse hp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 999.99,
        stock: 7,
        image: "/img/mouse.jpg",
        category: "articulos"
    },
   
    {
        id: "12asd",
        name: "Mouse hp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam, dicta esse dolore, error minus quidem distinctio quae nisi veritatis labore cupiditate neque unde ab nostrum reprehenderit itaque in obcaecati?",
        price: 699.99,
        stock: 12,
        image: "/img/mouse.jpg",
        category: "articulos"
    }
];

//        image: "/img/AE-Smartwatch-Apple-Watch-Series-6.jpg",
//Obtener productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
      //Simulamos un retraso de red
      setTimeout( ()=>{
        resolve(products)
      }, 2000 )
    })
  }
  
  export { getProducts } //export nombrado porque estamos expontando un objeto
