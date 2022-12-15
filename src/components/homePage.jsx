import Posts from "./posts";
import "../styles/homePage.css";
import { useState, useEffect } from "react";
import HomeTop from "./homeTop";

const HomePage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://insta-backend-2.onrender.com/posts").then((res) => res.json()).then((userData) => setData(userData)).catch((err) => console.log(err));
    }, []);

    return (
        <>
            <HomeTop />
            <div>
                {
                    data.map((ele, idx) => {
                        return <Posts data={ele} />
                    })
                }
            </div>
        </>
    )
}

export default HomePage;