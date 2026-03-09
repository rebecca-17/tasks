import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import capybara from "./capybara.webp";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";

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

            <hr></hr>
            <Counter></Counter>
            <hr />
            <hr></hr>
            <RevealAnswer></RevealAnswer>
            <hr />
            <hr></hr>
            <ChangeType></ChangeType>
            <hr />

            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr />
            <hr></hr>
            <TwoDice></TwoDice>
            <hr />
            <hr></hr>
            <CycleHoliday></CycleHoliday>
            <hr />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
