import { useState } from "react";
import { Button, Form, Input } from "../ui/LoginForm";
import FormRowVertical from "../ui/FormRowVertica";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
    color: white;
`;

const LogOut = styled(Button)`
    width: 8rem ;
    margin-left: auto;

   
`;

function Home() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState(user.password);
    const navgate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const user1 = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user1));
        console.log(' update successfully')
    }
    function handleLogout() {
        navgate('/login')
    }
    return (
        <HomeLayout>
            <LogOut size='small' onClick={handleLogout}>Logout</LogOut>
            <Form onSubmit={handleSubmit}>
                <FormRowVertical label="Full Name">
                    <Input
                        type="text"
                        id="Name"
                        // This makes this form better for password managers
                        autoComplete="username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FormRowVertical>
                <FormRowVertical label="Email address">
                    <Input
                        type="email"
                        id="email"
                        // This makes this form better for password managers
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormRowVertical>
                <FormRowVertical label="Password">
                    <Input
                        type="text"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </FormRowVertical>
                <FormRowVertical>
                    <Button size="large">Change details</Button>
                </FormRowVertical>
            </Form>
        </HomeLayout>
    );
}

export default Home;
