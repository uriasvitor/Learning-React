import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import api from "../services/api";

export default function Read() {
    const [Apidata, setAPIData] = useState([]);
    
    useEffect(()=>{
        api.get().then((response)=>{
            setAPIData(response.data)
            console.log(response)

        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div>
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                { Apidata.map((data,index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{data.first_name}</Table.Cell>
                            <Table.Cell>{data.last_name}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell> 
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    </div>
    )
}