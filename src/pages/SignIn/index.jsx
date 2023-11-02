import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth.jsx"

export function SignIn() {
  const data = useAuth()
  console.log("Meu CONTEXTO = >", data)

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu Login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}
