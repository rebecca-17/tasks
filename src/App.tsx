import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
// import { StartAttempt } from "./components/StartAttempt";
// import { TwoDice } from "./components/TwoDice";
// import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
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
            <hr></hr>
            <Counter></Counter>
            <hr />
            <hr></hr>
            <RevealAnswer></RevealAnswer>
            <hr />
            <hr></hr>
            <ChangeType></ChangeType>
            <hr />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
