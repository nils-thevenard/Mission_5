import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_ENDPOINT}/api/get-data`)
            .then((res) => {
                console.log(res.data);
                setData(res.data[0].message);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1>FRONTEND</h1>
            <div>message: {JSON.stringify(data)}</div>
            {/* <p>{import.meta.env.VITE_API_ENDPOINT}</p> */}
        </>
    );
}

export default App;
