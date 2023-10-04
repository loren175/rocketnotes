import { Container, Links, Content } from "./styles.js"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla vel
            dolore delectus dolorem! Eos, nemo, voluptatibus non perspiciatis
            nam quasi dolorum, alias recusandae dolor veritatis rem distinctio
            illum reiciendis qui.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rockeseat.com.br</a>
              </li>
              <li> 
                <a href="#">https://rockeseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="node"></Tag>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
