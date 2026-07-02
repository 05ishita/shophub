import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(url) //API call ki.

      .then((res) => {

        setData(res.data); //API ka data state me save kiya.

        setLoading(false);

      });

  }, [url]);

  return { data, loading }; //Hook data aur loading 
  //return karega.

}

export default useFetch;