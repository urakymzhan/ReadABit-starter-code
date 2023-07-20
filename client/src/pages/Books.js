import React, { Component, useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

const Books = () => {
  const [books, setBooks] = useState([]);
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [summary, setSummary] = useState("");

  useEffect(() => {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Card>
            <h1>What Books Should I Read?</h1>
          </Card>
          <form>
            <Input name="title" placeholder="Title (required)" />
            <Input name="author" placeholder="Author (required)" />
            <TextArea name="summary" placeholder="Summary (Optional)" />
            <FormBtn>Submit Book</FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Card>
            <h1>Books On My List</h1>
          </Card>
          {books.length ? (
            <List>
              {books.map((book) => (
                <ListItem key={book._id}>
                  <a href={"/books/" + book._id}>
                    {book.title} by <span>{book.author}</span>
                  </a>
                  <DeleteBtn />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Books;
