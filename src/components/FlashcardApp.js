import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeUp,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import flashcards from "../data/flashcards";
import "./FlashcardApp.css";

const FlashcardApp = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setFlipped(false);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
    setFlipped(false);
  };

  const handlePronounceUS = () => {
    const utterance = new SpeechSynthesisUtterance(flashcards[index].word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  const handlePronounceUK = () => {
    const utterance = new SpeechSynthesisUtterance(flashcards[index].word);
    utterance.lang = "en-GB";
    speechSynthesis.speak(utterance);
  };

  const handlePronounceAU = () => {
    const utterance = new SpeechSynthesisUtterance(flashcards[index].word);
    utterance.lang = "en-AU";
    speechSynthesis.speak(utterance);
  };

  return (
    <Container className="my-5 text-center">
      <h1>Flashcards</h1>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="flashcard-container">
            <div
              className={`flashcard ${flipped ? "flipped" : ""}`}
              onClick={() => setFlipped(!flipped)}
            >
              <Card className="front p-4 shadow-lg">
                <Card.Body>
                  <Card.Title className="fw-bold display-6">
                    {flashcards[index].word}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="back p-4 shadow-lg h-100">
                <Card.Body>
                  <Card.Title className="fw-bold">
                    {flashcards[index].definition}
                  </Card.Title>
                  <Card.Text className="h5">
                    <strong>Example:</strong> {flashcards[index].example}
                  </Card.Text>
                  <Card.Text className="h5">
                    <strong>Pronunciation:</strong>{" "}
                    {flashcards[index].pronunciation}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="button-container">
              <Button variant="primary" onClick={handlePrev}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
              <Button variant="success" onClick={handleNext}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              <Button variant="info" onClick={handlePronounceUS}>
                <FontAwesomeIcon icon={faVolumeUp} /> US
              </Button>
              <Button variant="info" onClick={handlePronounceUK}>
                <FontAwesomeIcon icon={faVolumeUp} /> UK
              </Button>
              <Button variant="info" onClick={handlePronounceAU}>
                <FontAwesomeIcon icon={faVolumeUp} /> AU
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FlashcardApp;
