import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Titulo" />
          <TextArea placeholder="Observações" />

          <Section title="Links Úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova Tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
