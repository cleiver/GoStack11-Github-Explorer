import React, { useState, FormEvent, useEffect } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import logo from '../../assets/logo.svg'

import { Title, Form, Repositories, Error } from './styles'

interface RepositoryDTO {
  full_name: string
  owner: {
    login: string
    avatar_url: string
  }
  description: string
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<RepositoryDTO[]>(() => {
    const storedRepositories = localStorage.getItem('@GithubExplorer:repositories')

    if (storedRepositories) {
      return JSON.parse(storedRepositories)
    } else {
      return []
    }
  })
  const [repositoryQuery, setRepositoryQuery] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    if (!repositoryQuery) {
      setInputError('Informe dono/nome do repositório')
      return
    }

    try {
      const response = await api.get<RepositoryDTO>(`repos/${repositoryQuery}`)

      setRepositories([...repositories, response.data])
      setRepositoryQuery('')
      setInputError('')
    } catch (error) {
      setInputError('Erro ao buscar repositório')
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          placeholder="Digite o nome do repositório"
          value={repositoryQuery}
          onChange={e => setRepositoryQuery(e.target.value)}
          autoFocus
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

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
