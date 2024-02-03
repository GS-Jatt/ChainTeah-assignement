import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";
import FormRowVertical from "./FormRowVertica";
import { Link, useNavigate } from "react-router-dom";

export const Form = styled.form`
    padding: 2.4rem 4rem;

    /* Box */
    background-color: #18212f;
    border: 1px solid #1f2937;
    border-radius: 7px;

    overflow: hidden;
    font-size: 1.4rem;
    & a{
        text-decoration: none;
    }
`;
export const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
    color: white;
`;


export const sizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    `,
    medium: css`
        font-size: 1.4rem;
        padding: 1.2rem 1.6rem;
        font-weight: 500;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
    `,
};

export const variations = {
    primary: css`
        color: var(--color-brand-50);
        background-color: var(--color-brand-600);

        &:hover {
            background-color: var(--color-brand-700);
        }
    `,
    secondary: css`
        color: var(--color-grey-600);
        background: var(--color-grey-0);
        border: 1px solid var(--color-grey-200);

        &:hover {
            background-color: var(--color-grey-50);
        }
    `,
    danger: css`
        color: var(--color-red-100);
        background-color: var(--color-red-700);

        &:hover {
            background-color: var(--color-red-800);
        }
    `,
};

export const Button = styled.button`
    border: none;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);

    ${(props) => sizes[props.size]}
    ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
    variation: "primary",
    size: "medium",
};







function Loginform() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [er, setEr] = useState(false);
    const navgate = useNavigate();

   

    function handleSubmit(e) {
        e.preventDefault();
        const user = JSON.parse( localStorage.getItem('user'));
        if(password !== user?.password && email !== user?.email){
            setEr(true);
            return
        }
        else setEr(false);
        navgate('/')
        
    }

    return (
        <Form onSubmit={handleSubmit}>
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
            {er &&  <FormRowVertical label="wrong email or password"></FormRowVertical>
            }
            <FormRowVertical>
                <Button size="large">Login</Button>
            </FormRowVertical>
            <Link to={"/signup"}>Signup</Link>
        </Form>
    );
}

export default Loginform;
