import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import logo from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

interface RepositoryDTO {
  full_name: string
  owner: {
    login: string
    avatar_url: string
  }
  description: string
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<RepositoryDTO[]>([])

  const [repositoryQuery, setRepositoryQuery] = useState('')

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const response = await api.get<RepositoryDTO>(`repos/${repositoryQuery}`)

    setRepositories([...repositories, response.data])
    setRepositoryQuery('')
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={repositoryQuery}
          onChange={e => setRepositoryQuery(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="/">
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
