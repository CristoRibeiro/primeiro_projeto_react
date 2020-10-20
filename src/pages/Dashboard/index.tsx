import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
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
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${repository}`);

    const repo = response.data;

    setRepositories([...repositories, repo]);
  }

  return (
    <>
      <img src={Logo} alt="Github Logo" />
      <Title>Explore repositórios no Github.</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={repository}
          onChange={e => setRepository(e.target.value)}
          placeholder="Digite o nome do repositório."
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(element => (
          <a key={element.full_name} href="/repository">
            <img src={element.owner.avatar_url} alt={element.owner.login} />
            <div>
              <strong>{element.full_name}</strong>
              <p>{element.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
