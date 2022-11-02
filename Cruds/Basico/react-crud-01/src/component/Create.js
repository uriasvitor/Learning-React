import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import api from '../services/api';

export default function Create() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    
    const postData = ()=>{
        api.post("/user/create",{
            first_name,
            last_name
            
        }).then((res)=>{
            console.log(res)
            
        }).catch((err)=>{
            console.log(err)
        });

        console.log(first_name,last_name)
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input 
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>

                    <input 
                        placeholder='Last Name' 
                        onChange={(e) => setLastName(e.target.value)}
                    />

                </Form.Field>
                    <Button type='submit' onClick={postData} >Submit</Button>
            </Form>
        </div>
    )
}

