import React, { useState, useEffect} from 'react'

export default function Todos() {
    
    
    const [list, setList] = useState([]);

    
    const getList = () => {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        const newList = [];
        jsonResponse.forEach(item => {
            if(item.title.charAt(0) === 's') {
                console.log(item.title)
                newList.push(item.title)
            }
        })
        setList(newList);
    });
}

useEffect(() => {
    getList();
},[]);
    
    return (
        <div>
            {list.map(title => (
                <p className={title.slice(-1) === 'e' ? "red" : ""}>{title}</p>
            ))}
        </div>
    )
}
