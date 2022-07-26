import React, { useState } from 'react';
import './MovieRow.css';



export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth /2);
        let lisW = items.results.length * 150;
        if((window.innerHeight - lisW) > x) {
            x = (window.innerWidth - lisW) - 60;
        }
        setScrollX(x);
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <img src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTMuNzg5IDcuMTU1Yy4xNDEtLjEwOC4zLS4xNTcuNDU2LS4xNTcuMzg5IDAgLjc1NS4zMDYuNzU1Ljc0OXY4LjUwMWMwIC40NDUtLjM2Ny43NS0uNzU1Ljc1LS4xNTcgMC0uMzE2LS4wNS0uNDU3LS4xNTktMS41NTQtMS4yMDMtNC4xOTktMy4yNTItNS40OTgtNC4yNTgtLjE4NC0uMTQyLS4yOS0uMzYtLjI5LS41OTIgMC0uMjMuMTA3LS40NDkuMjkxLS41OTEgMS4yOTktMS4wMDIgMy45NDUtMy4wNDQgNS40OTgtNC4yNDN6Ii8+PC9zdmc+"/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
            <img src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTAuMjExIDcuMTU1Yy0uMTQxLS4xMDgtLjMtLjE1Ny0uNDU2LS4xNTctLjM4OSAwLS43NTUuMzA2LS43NTUuNzQ5djguNTAxYzAgLjQ0NS4zNjcuNzUuNzU1Ljc1LjE1NyAwIC4zMTYtLjA1LjQ1Ny0uMTU5IDEuNTU0LTEuMjAzIDQuMTk5LTMuMjUyIDUuNDk4LTQuMjU4LjE4NC0uMTQyLjI5LS4zNi4yOS0uNTkyIDAtLjIzLS4xMDctLjQ0OS0uMjkxLS41OTEtMS4yOTktMS4wMDItMy45NDUtMy4wNDQtNS40OTgtNC4yNDN6Ii8+PC9zdmc+"/>
            </div>


            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}