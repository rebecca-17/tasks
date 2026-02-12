import React from "react";
import "./App.css";
import capybara from "./capybara.webp";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Welcome to my Web Application!</h1>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                    margin: "0 auto",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                    margin: "0 auto",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <header className="App-header">
                Rebecca Forman UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <br />
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <br />
            <img src={capybara} alt="Capybara!" />
            <div>
                {"Rebecca's Favorite Animals:"}
                <ol>
                    <li>Dogs</li>
                    <li>Capybaras</li>
                    <li>Cardinals</li>
                </ol>
            </div>
            ;
        </div>
    );
}

export default App;
