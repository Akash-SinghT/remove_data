import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function App() {
  const [form, setform] = useState({});
  const [data, setdata] = useState([]);
  function adddata() {
    setdata([...data, form]);
    setform(form);
  }
  const remove = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setdata([...arr]);
  };
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(event) => setform({ ...form, name: event.target.value })}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) =>
              setform({ ...form, email: event.target.value })
            }
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={adddata} variant="contained" color="error">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((e, i) => {
          return (
            <div className="data_val">
              <h4>{e.name}</h4>
              <h4>{e.email}</h4>
              <Button
                onClick={() => {
                  remove(i);
                }}
                variant="outlined"
                color="error"
              >
                Remove
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
