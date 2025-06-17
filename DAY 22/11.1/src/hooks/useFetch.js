import { useState, useEffect } from "react";

export const usePost = () => {
  const [post, setPost] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { post };
};

export const useFetch = (url, time) => {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(url)

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json()
        setPost(json)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [url])

    useEffect(()=> {
        setInterval(()=>{
            fetchData(url)
        }, time * 10)
    })
    return {post, loading}
}