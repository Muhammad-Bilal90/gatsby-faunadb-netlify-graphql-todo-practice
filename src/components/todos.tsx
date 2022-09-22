import React, { useRef } from 'react';
import { Form, FormControl, ListGroup, Button } from 'react-bootstrap';
import { RouteComponentProps } from "@reach/router";


const Todos: React.FC<RouteComponentProps> = (props) => {

    const inputRef = useRef<any>();

    return(
        <div className='mt-5'>
            <div className="d-flex justify-content-between">
            <h3 >Bilal's Todos</h3>
            <Button className="h-25" variant="dark">Logout</Button>
            </div>
            <hr />
            <div className='mt-5'>
                <FormControl ref={inputRef} type="text" placeholder='Add Todo...' />
                <Button className='my-3 w-100' variant='dark'>Add Todo</Button>
            </div>
            <ListGroup className='mt-3'>
                <ListGroup.Item className='mb-2 '>
                    <div className='d-flex'>
                    <Form.Check
                        defaultChecked={false}
                        disabled={false}
                        type="checkbox"
                    />
                    <p className='ms-3'>My Todo</p>
                    </div>
              </ListGroup.Item>
                <ListGroup.Item className='mb-2'>
                    <div className='d-flex'>
                        <Form.Check
                            defaultChecked={false}
                            disabled={false}
                            type="checkbox"
                        />
                        <p className='ms-3'>My Todo</p>
                    </div>
              </ListGroup.Item>
                <ListGroup.Item className='mb-2'>
                    <div className='d-flex'>
                        <Form.Check
                            defaultChecked={false}
                            disabled={false}
                            type="checkbox"
                        />
                        <p className='ms-3'>My Todo</p>
                    </div>
              </ListGroup.Item>
                <ListGroup.Item className='mb-2'>
                    <div className='d-flex'>
                        <Form.Check
                            defaultChecked={false}
                            disabled={false}
                            type="checkbox"
                        />
                        <p className='ms-3'>My Todo</p>
                    </div>
              </ListGroup.Item>
                <ListGroup.Item className='mb-2'>
                    <div className='d-flex'>
                        <Form.Check
                            defaultChecked={false}
                            disabled={false}
                            type="checkbox"
                        />
                        <p className='ms-3'>My Todo</p>
                    </div>
              </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Todos;