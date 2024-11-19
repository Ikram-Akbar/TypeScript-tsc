"use strict";
{
    const programming_book = {
        name: "Introduction of Python",
        writer: "Tamim Shariar Subeen",
        price: 300,
        page: 350,
        publication: "Dimmik",
        isBeginnerCanRead: true
    };
    const Political_book = {
        name: "Secret of Zionism",
        writer: "Henry Ford",
        price: 280,
        page: 500,
        publication: "Guardian Publication"
    };
    const spreadObjet = Object.assign(Object.assign({}, programming_book), Political_book);
    console.log(spreadObjet);
    
    const myBooks = {
        programming: programming_book,
        political: Political_book
    };
    console.log(myBooks);
}
