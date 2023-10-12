import { useState } from "react";

function Registhub() {
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(`https://api.github.com/search/repositories?q=${keyword}`)
        .then(respone => respone.json())
        .then(data => setData(data.items))
        .catch(err => console.error(err))
    }

    return (
        <div className="App">
            <input value={keyword} onChange={e => setKeyword(e.target.value)}/>
            <button onClick={fetchData}>Fetch</button>

            <table>
                <tbody>
                    {
                        data.map(repo => 
                            <tr>
                                <td>{repo.full_name}</td>
                                <td><a href={repo.html_url}>repo.html_url</a></td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}


export default Registhub;