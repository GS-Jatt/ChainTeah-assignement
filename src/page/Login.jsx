import styled from "styled-components";
import LoginForm from "../ui/LoginForm";

const LoginLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
    color: white;
`;

function Login() {
    return (
        <LoginLayout>
            <LoginForm />
        </LoginLayout>
    );
}

export default Login;
