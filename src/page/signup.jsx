import styled from "styled-components";
import Signupform from "../ui/Signupform";

const SignupLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
    color: white;
`;

function Signup() {
    return (
        <SignupLayout>
           <Signupform/>
        </SignupLayout>
    );
}

export default Signup;
