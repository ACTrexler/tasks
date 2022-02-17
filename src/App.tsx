import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript (Alex Trexler)
            </header>
            <h1>Welcome to the capybara zone</h1>
            <img
                src="https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg"
                alt="A capybara family"
            />
            <p style={{ fontSize: 32 }}>Reasons capybaras are cool</p>
            <ul>
                <li>Capybaras are the largest rodents on earth</li>
                <li>Capybaras are super chill</li>
                <li>Capybaras are social and like to live in groups</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "300px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "400px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Hello World. Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
        </div>
    );
}

export default App;
