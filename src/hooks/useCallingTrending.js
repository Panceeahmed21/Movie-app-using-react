import { useEffect, useState } from "react";

const useCallingTrending = (api) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    return fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setDataList(json.results);
        setLoading(false);
       
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return [dataList,loading,error];
};

export default useCallingTrending;
