import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiWithAxios = () => {
  const [fetchData, setFetchData] = useState([]);
  const [isError, setIsError] = useState('');

  //note: promise using for fetch data from API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setFetchData(res.data.slice(0, 12));
    }).catch((error) => {
        setIsError(error.message);
    })
  }, []);

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center my-4">Api Integrations wtih Axios</h2>
        {isError !== '' && <h2>{isError}</h2>}
        <div className="row gy-4">
          {fetchData.map((post) => {
            const { id, title, body } = post;
            return (
              <div className="col-md-4" key={id}>
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title text-center fs-4">
                      {title.slice(0, 15).toUpperCase()}
                    </h2>
                    <p className="card-text">{body.slice(0, 120)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ApiWithAxios;
