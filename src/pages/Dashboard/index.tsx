import React, { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, ErrorRepo } from './style';
import Logo from '../../assets/Logo.svg';
import api from '../../services/api';

interface Repository {
  // eslint-disable-next-line camelcase
  full_name: string;
  description: string;
  // eslint-disable-next-line camelcase
  owner: { login: string; avatar_url: string };
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState('');
  const [error, setError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const repositoriesArm = localStorage.getItem('@GitExplorer:Repositories');
    if (repositoriesArm) {
      return JSON.parse(repositoriesArm);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitExplorer:Repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      if (!repository) {
        setError('Informe o repositório!');
        return;
      }
      const response = await api.get<Repository>(`repos/${repository}`);

      const repo = response.data;

      setRepositories([...repositories, repo]);
      setRepository('');
      setError('');
    } catch {
      setError('Repository not exists!');
    }
  }

  return (
    <>
      <img src={Logo} alt="Github Logo" />
      <Title>Explore repositórios no Github.</Title>
      <Form hasError={!!error} onSubmit={handleAddRepository}>
        <input
          value={repository}
          onChange={e => setRepository(e.target.value)}
          placeholder="Digite o nome do repositório."
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {error && <ErrorRepo>{error}</ErrorRepo>}
      <Repositories>
        {repositories.map(element => (
          <Link key={element.full_name} to={`/repository/${element.full_name}`}>
            <img src={element.owner.avatar_url} alt={element.owner.login} />
            <div>
              <strong>{element.full_name}</strong>
              <p>{element.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
