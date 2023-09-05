import { api } from '../services/api';
import { useState, useEffect } from 'react';
import { SolutionSpace } from '../components/SolutionSpace';

export function GenerateSolutionsSpace() {
  const [solutions, setSolution] = useState([]);

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const response = await api.get(`/cases`);
        setSolution(response.data.cases);
      } catch (error) {
        alert('Erro ao buscar as soluções');
      }
    }

    fetchSolutions();
  }, []);

  return(
    <>
      {
        solutions.map(solution => (
          <SolutionSpace 
            key={solution.title}
            data = {solution}
          />
        ))
      }
    </>
  )
}