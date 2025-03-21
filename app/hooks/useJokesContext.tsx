import { createContext, useContext, useEffect, useState } from 'react';
import fetchData from '../utils/fetch';
import service from '../configs/service';

const JokesContext = createContext<any | any>(null);

const JokesProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [jokes, setJokes] = useState<{ [key: string]: any[] }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const getCategories = async () => {
    try {
      setLoading(true);
      const data: any = await fetchData(service.categories, { timeout: 1000 });
      setCategories(data?.categories);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching categories, try again:', error);
    } finally {
      setLoading(false);
    }
  };

  const getJokesByCategory = async (category: string) => {
    try {
      setLoading(true);
      const data: any = await fetchData(`${service.jokes(category)}`, {
        timeout: 1000,
        params: { type: 'single', amount: 2 },
      });
      setJokes((prev) => ({ ...prev, [category]: data?.jokes }));
    } catch (error) {
      setLoading(false);
      console.error(`Error fetching jokes for ${category}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      categories.forEach(getJokesByCategory);
    }
  }, [categories]);

  const handlePressToTop = (selectedIndex: number) => {
    if (selectedIndex === 0) return;
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      [newCategories[0], newCategories[selectedIndex]] = [
        newCategories[selectedIndex],
        newCategories[0],
      ];
      return newCategories;
    });
  };

  const handleAddMore = async (category: string) => {
    try {
      const data: any = await fetchData(`${service.jokes(category)}`, {
        timeout: 1000,
        params: { type: 'single', amount: 2 },
      });

      if (data?.jokes?.length) {
        setJokes((prevJokes) => ({
          ...prevJokes,
          [category]: [data.jokes[0], ...(prevJokes[category] || [])],
        }));
      }
    } catch (error) {
      console.error(`Error adding more jokes for ${category}:`, error);
    }
  };

  return (
    <JokesContext.Provider
      value={{
        categories,
        jokes,
        loading,
        handlePressToTop,
        handleAddMore,
        getCategories,
      }}>
      {children}
    </JokesContext.Provider>
  );
};

const useJokes = () => {
  const context = useContext(JokesContext);
  if (!context) {
    throw new Error('useJokes must be used within a JokesProvider');
  }
  return context;
};

export { JokesProvider, useJokes };
