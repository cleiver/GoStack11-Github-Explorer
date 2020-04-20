import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img src="https://avatars1.githubusercontent.com/u/31499?s=460&u=36024d382a6c412cb48c4514a5e63c95e80446f4&v=4" alt="Cleiver" />

          <div>
            <strong>GoStack Bootcamp 11</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img src="https://avatars1.githubusercontent.com/u/31499?s=460&u=36024d382a6c412cb48c4514a5e63c95e80446f4&v=4" alt="Cleiver" />

          <div>
            <strong>GoStack Bootcamp 11</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img src="https://avatars1.githubusercontent.com/u/31499?s=460&u=36024d382a6c412cb48c4514a5e63c95e80446f4&v=4" alt="Cleiver" />

          <div>
            <strong>GoStack Bootcamp 11</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
