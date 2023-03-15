import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Header from "./Header";

beforeEach(() => {
    const user = {
        "_id": "640ed509bec0cf3cb79464e8",
        "firstName": "Customer",
        "lastName": "User",
        "username": "customeruser",
        "email": "customeruser@gmail.com",
        "isAdmin": false,
        "createdAt": "2023-03-13T07:47:21.677Z",
        "updatedAt": "2023-03-13T08:23:59.106Z",
        "__v": 0,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGVkNTA5YmVjMGNmM2NiNzk0NjRlOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzg4NjM3NDgsImV4cCI6MTY3OTEyMjk0OH0.y6knjXT_VdiPL_-7GA_0zi0aLF4PtBfsnkS0CvQ2XZ0"
    }
    render(
        <Router>
            <Provider store={store}><Header user={user} /></Provider>
        </Router>
    )
})

describe("renders Header", () => {
    test('renders company name',()=>{
        expect(screen.getByText(/JEAN'S LC./)).toBeInTheDocument();
    });

    test('renders logged in user first name',()=>{
        expect(screen.getByText(/Customer/)).toBeInTheDocument();
    });

    test('renders profile button after user signed in',()=>{
        expect(screen.getByText(/PROFILE/)).toBeInTheDocument();
    });

    test('renders logout button after user signed in',()=>{
        expect(screen.getByText(/LOGOUT/)).toBeInTheDocument();
    });
});