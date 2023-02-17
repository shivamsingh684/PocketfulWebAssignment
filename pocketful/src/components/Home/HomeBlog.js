import React from "react";
import  { useEffect, useState } from "react";
// import axios from 'axios'
import '../Home/Home.css'



function HomeBlog() {
    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=69faa0af1b5f4bd0bdbc4c45322ca18c');
            //  setLoading(false);
            let data = await response.json();
            console.log(data.articles)
          
            setUsers(data);
        } catch (error) {
            // setLoading(false);
            console.log("my error is " + error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            {
                users.map((curElem) => {

                    const { avatar_url, id, login, type } = curElem;
                    return (
                        <div className="first" >
                            <div className="second"></div>
                            <div className="second">
                                <div className="third">
                                    <div className="third2"></div>
                                    <div className="third2"></div>
                                </div>
                                <div className="third">
                                <div className="third2"></div>
                                <div className="third2"></div>
                                </div>
                                <div className="third">
                                <div className="third2"></div>
                                <div className="third2"></div> 
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )


    // try {

    //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=69faa0af1b5f4bd0bdbc4c45322ca18c`;
    //   let res = await fetch(url);
    //   let data = await res.json();
    //   for(let i=0;i<data.articles.length;i++){
    //     console.log(data.articles[i].author)

    //   }


    // //   append(data.items)
    // } catch (err) {
    //   console.log(err);
    // }





}

export default HomeBlog