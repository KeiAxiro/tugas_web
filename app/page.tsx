"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [datapost, setDatapost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/posts");
        setDatapost(response.data); // Simpan data yang diperoleh ke state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      {/* Render data yang didapat */}
      {datapost.length > 0 ? (
        datapost.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}
