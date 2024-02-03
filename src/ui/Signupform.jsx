import { useState } from "react";
import { Button, Form, Input } from "./LoginForm";
import FormRowVertical from "./FormRowVertica";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signupform() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState('');
    const [password, setPassword] = useState("");
    const navgate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        const user = {name,email,password};
        localStorage.setItem('user', JSON.stringify(user))
        navgate('/')
    }

    return (
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
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button size="large">Sigup</Button>
            </FormRowVertical>
            <Link to={'/login'}> Login</Link>
        </Form>
    );
}

export default Signupform
