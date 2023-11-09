import React, { Component } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Voting() {
  return (
    <Container>
      <Row>
        <h3>Radiobutton</h3>
        <p>
          Et assumenda fugit sint. Porro soluta unde illum ipsam totam sit
          eveniet. Rerum qui ut qui quos et voluptates aut. Enim et id quae eos
          vitae ratione excepturi ducimus.
        </p>
        <Col>
          <label tabindex="4" for="radio-1" class="radio-label">
            Proyecto 1
          </label>
          <br />
          <label tabindex="5" for="radio-2" class="radio-label">
            Proyecto 2
          </label>
          <br />

          <label
            tabindex="6"
            for="radio-3"
            class="radio-label iconicfill-check"
          >
            Proyecto 3
          </label>
        </Col>

        <Col>
          <input
            class="radio"
            id="radio-1"
            name="rd"
            type="radio"
            checked
          ></input>
          <label tabindex="4" for="radio-1" class="radio-label">
            25
          </label>
          <br />
          <input class="radio" id="radio-2" name="rd" type="radio"></input>
          <label tabindex="5" for="radio-2" class="radio-label">
            25
          </label>
          <br />
          <input class="radio" id="radio-3" name="rd" type="radio"></input>
          <label
            tabindex="6"
            for="radio-3"
            class="radio-label iconicfill-check"
          >
            25
          </label>
        </Col>

        <Col>
          <input
            class="radio"
            id="radio-1"
            name="rd"
            type="radio"
            checked
          ></input>
          <label tabindex="4" for="radio-1" class="radio-label">
            20
          </label>
          <br />
          <input class="radio" id="radio-2" name="rd" type="radio"></input>
          <label tabindex="5" for="radio-2" class="radio-label">
            20
          </label>
          <br />
          <input class="radio" id="radio-3" name="rd" type="radio"></input>
          <label
            tabindex="6"
            for="radio-3"
            class="radio-label iconicfill-check"
          >
            20
          </label>
        </Col>

        <Col>
          <input
            class="radio"
            id="radio-1"
            name="rd"
            type="radio"
            checked
          ></input>
          <label tabindex="4" for="radio-1" class="radio-label">
            18
          </label>
          <br />
          <input class="radio" id="radio-2" name="rd" type="radio"></input>
          <label tabindex="5" for="radio-2" class="radio-label">
            18
          </label>
          <br />
          <input class="radio" id="radio-3" name="rd" type="radio"></input>
          <label
            tabindex="6"
            for="radio-3"
            class="radio-label iconicfill-check"
          >
            18
          </label>
        </Col>

        <button className="mt-3">Submmit</button>
      </Row>
    </Container>
  );
}

export default Voting;
