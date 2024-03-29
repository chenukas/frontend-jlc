import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Cart from "./Cart";

beforeEach(() => {
    const products = [{
        "_id": "6411496199ba0d44101534bd",
        "title": "Wooden Frame",
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
        "img": "https://firebasestorage.googleapis.com/v0/b/jean-s-lc.appspot.com/o/images%2F1678854477677628099_1000_1_-wooden-frame-22cm-x-16cm.webp?alt=media&token=0bf995c4-8fe7-42a5-9d8a-d6d45165f582",
        "categories": [
            "wooden",
            "frame"
        ],
        "price": 25,
        "inStock": true,
        "quantity": 3,
        "createdAt": "2023-03-15T04:28:17.771Z",
        "updatedAt": "2023-03-15T04:28:17.771Z",
        "__v": 0
    },
    {
        "_id": "64116136371dbcdbb2412f49",
        "title": "Fillable Egg of Eggs",
        "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
        "img": "https://firebasestorage.googleapis.com/v0/b/jean-s-lc.appspot.com/o/images%2F1678860553305661222_1000_1_-fillable-eggs-thirty-pack-easter.webp?alt=media&token=16f2bde2-7664-4c0e-aff6-f2e968deca37",
        "categories": [
            "easter",
            "eggs"
        ],
        "price": 250,
        "inStock": true,
        "quantity": 5,
        "createdAt": "2023-03-15T06:09:58.503Z",
        "updatedAt": "2023-03-15T06:09:58.503Z",
        "__v": 0
    }
    ]
    render(
        <Router>
            <Provider store={store}><Cart products={products} qty={8} total={1325}/></Provider>
        </Router>
    )
})

describe("renders Cart", () => {
    test('renders passed product title', () => {
        expect(screen.getByText(/Wooden Frame/)).toBeInTheDocument();
    });

    test('renders passed product title', () => {
        expect(screen.getByText(/Fillable Egg of Eggs/)).toBeInTheDocument();
    });

    test('renders single product quantity', () => {
        expect(screen.getByText(/5/)).toBeInTheDocument();
    });

    test('renders total product quantity', () => {
        expect(screen.getByText(/8/)).toBeInTheDocument();
    });

    test('renders total product quantity', () => {
        expect(screen.getByText(/AUD1325/)).toBeInTheDocument();
    });
});