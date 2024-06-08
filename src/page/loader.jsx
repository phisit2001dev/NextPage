import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';
function Loader() {
    const [dogs, setDogs] = useState("");
    const [loding, setLoading] = useState(false);
    const fetcDataDog = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setDogs(response.data);
        }
        catch (error) {
            console.error("Some thing went wrong", error);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetcDataDog();
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <h1>Loading Page test</h1>
            <table style={{ borderBlock: "solid" }} >
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อ</th>
                        <th>ภาพสุนัข</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Doggy</td>
                        <td>{loding ? (<InfinitySpin
                            visible={true}
                            width="200"
                            color="#4fa94d"
                            ariaLabel="infinity-spin-loading"
                        />) : <div><img src={dogs.message} alt="" width={"150px"} height={"100px"} /></div>}</td>

                    </tr>
                </tbody>
                <tfoot>
                    <Button onClick={fetcDataDog} variant="contained" >Random Dog</Button>
                </tfoot>
            </table>
        </div>
    )
}

export default Loader