import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import CartItem from "./CartItem";

beforeEach(() => {
    const product = {
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
    }
    render(
        <Router>
            <Provider store={store}><CartItem product={product}/></Provider>
        </Router>
    )
})

describe("renders Cart Item", () => {
    test('renders passed product title', () => {
        expect(screen.getByText(/Wooden Frame/)).toBeInTheDocument();
    });

    test('renders product quantity', () => {
        expect(screen.getByText(/3/)).toBeInTheDocument();
    });

    test('renders product quantity', () => {
        expect(screen.getByText(/25/)).toBeInTheDocument();
    });
});