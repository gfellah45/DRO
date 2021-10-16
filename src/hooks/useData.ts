import { useInfiniteQuery } from "react-query";
import { fetchAPI } from "../lib/api";
import { useInView } from "react-intersection-observer";

const useData = (url: string) => {
  // useQuery hook for fecthing paginated data
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    url,
    async ({ pageParam = 0 }) => {
      const response = await fetchAPI(`${url}?page=${pageParam}&pageSize=10`);
      return response;
    },
    {
      retry: false,
      cacheTime: 1000,
      refetchOnWindowFocus: false,
      getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
      getNextPageParam: (lastPage) => lastPage.nextId ?? false,
    }
  );

  //intersection obsevrer hook
  const { ref, inView } = useInView();

  // return values
  return {
    data,
    status,
    error,
    ref,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    inView,
  };
};

export default useData;
