import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";

export default function Student() {
  const paperStyle = { padding: "50px 30px", width: 600, margin: "30px auto" };
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, adress };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added successfully");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "#235A81" }}>
          <u>Add Student</u>
        </h1>
        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          fullWidth={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p></p>
        <TextField
          id="outlined-basic"
          label="Student Adress"
          variant="outlined"
          fullWidth={true}
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <p></p>
        <Button variant="contained" onClick={handleClick}>
          Add New Student
        </Button>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        <h1>Students</h1>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={student.id}
          >
            Id:{"" + student.id + ""} <br/>
            Name: {"" + student.name + ""}<br/>
            Adress: {"" + student.adress + ""}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
