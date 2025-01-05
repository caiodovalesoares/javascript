let booksByCategory = [
    {
        category: "Romance",
        books: [
        {
            title: "O Sol Também é Uma Estrela",
            author: "Nicola Yoon",
        },
        {
            title: "O Noivo da Minha Melhor Amiga",
            author: "Emily Gin",
        },
        {
            title: "Orgulho e Preconceito",
            author: "Jane Austen",
        },
        ],
    },
    {
        category: "Fantasia",
        books: [
        {
            title: "Harry Potter e a Pedra Filosofal",
            author: "J.K. Rowling",
        },
        {   
            title: "O Hobbit",
            author: "J.R.R. Tolkien",
        },
        {   
            title: "Eragon",
            author: "Christopher Paolini",
        },
        {   
            title: "O Nome do Vento",
            author: "Patrick Rothfuss",
        },
        ],
    },
    {
        category: "Suspense",
        books: [
        {
            title: "A Garota no Trem",
            author: "Paula Hawkins",
        },
        {
            title: "O Silêncio dos Inocentes",
            author: "Thomas Harris",
        },
        ],
    },
    {
        category: "Ficção Científica",
        books: [
        {
            title: "Duna",
            author: "Frank Herbert",
        },
        {
            title: "Neuromancer",
            author: "William Gibson",
        },
        {
            title: "Fundação",
            author: "Isaac Asimov",
        },
        {
            title: "1984",
            author: "George Orwell",
        },
        {
            title: "O Fim da Infância",
            author: "Arthur C. Clarke",
        },
        ],
    },
];

function countBooksInCategory() {
    let categoryCount = {};

    for (let i = 0; i < booksByCategory.length; i++) {
        let categoryName = booksByCategory[i].category
        let bookCount = booksByCategory[i].books.length
        categoryCount[categoryName] = bookCount
    }

    return categoryCount
}

console.log(countBooksInCategory(booksByCategory))

function authors() {
    let bookAuthors = []
    for (let i = 0; i < booksByCategory.length; i++) {
        for (let j = 0; j < booksByCategory[i].books.length; j++) {
            bookAuthors.push(booksByCategory[i].books[j].author)
        }
    }

    return bookAuthors
}

console.log(authors(booksByCategory))