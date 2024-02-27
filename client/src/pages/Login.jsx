
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Login = () => {
    const {loginUser,loginError,loginInfo,updateLoginInfo,isLoginLoading} = useContext(AuthContext)
    

    return ( 
    <>
        <Form onSubmit={loginUser}>
            <Row style={{
                height: "",
                justifyContent: "center",
                paddingTop: "10%"
            }}>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2>Login</h2>

                        <Form.Control type="text" placeholder="Email" onChange={(e)=>{updateLoginInfo({...loginInfo, email: e.target.value})}}></Form.Control>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>{updateLoginInfo({...loginInfo, password: e.target.value})}}></Form.Control>
                        <Button variant="primary" type="submit">
                            {isLoginLoading? "Getting you in ..." : "Login" }
                        </Button>
                        {loginError?.error &&(
                            <Alert variant="danger" style={{textAlign: "center"}}>
                                <p>{loginError?.message}</p>
                            </Alert>
                        )}
                    </Stack>
                </Col>
            </Row>
        </Form>
    </> 
    );
}

export default Login;