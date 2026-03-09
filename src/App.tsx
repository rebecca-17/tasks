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
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

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
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>

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

            <hr />

            <div className="react-components">
                <Counter />
                <RevealAnswer />
                <ChangeType />
                <StartAttempt />
                <TwoDice />
                <CycleHoliday />
                <DoubleHalf />
                <ChooseTeam />
                <ColoredBox />
                <ShoveBox />
            </div>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
