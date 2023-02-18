import React, { useEffect, useState } from "react";
import axios from 'axios'
import '../Home/Home.css'



function HomeBlog() {
    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        const response = await axios.get(
            'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=69faa0af1b5f4bd0bdbc4c45322ca18c'
        );

        setUsers(response.data.articles);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const convertDate = str => {
        const isoDate = str;
        const date = new Date(isoDate);
        const day = date.getDay();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().substr(-2);
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    };

    console.log(users);
    return (
        <div className="flex">
            {users.map((user,i) => (
                <div
                    className={`news-box1`}
                    key={i}>
                   
                    <div><img className="news-img" src={user.urlToImage} alt="news-img" /></div>
                    <div>
                        <span>{convertDate(user.publishedAt)}</span>
                        <h3>{user.title}</h3>
                        <p>{user.description}</p>
                    </div>
                </div>
            
                
            ))}
        </div>
    );
}


export default HomeBlog