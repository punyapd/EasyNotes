import { useQuery } from 'react-query';
import { getApiData } from '../helpers/AxiosInstances';

const useGetHook = ({ queryKey, url, parma, auth = false }) => {
  const { isLoading, isError, data, isSuccess } = useQuery(
    queryKey,
    async () => {
      const response = await getApiData(url, parma, auth);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return { isLoading, isError, data, isSuccess };
};

export default useGetHook;
