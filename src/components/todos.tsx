import React, { useRef, useContext, useState } from 'react';
import { Form, FormControl, ListGroup, Button } from 'react-bootstrap';
import { RouteComponentProps } from "@reach/router";
import { IndentityContext } from '../context/authContext';
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';

// const ADDTOO = gql`
//     mutation AddTodo($value: String!){
//         addTodo(value: $value){
//             value
//         }
//     }
// `

// const GET_TODOS = gql`
//     query GetTodos {
//         todos {
//             id
//             value
//             completed
//         }
//     }
// `

// const UPDATE_TODO = gql`
//     mutation UpdateTodo($id: ID!, $completed: Boolean!){
//         updateTodo(id: $id, completed: $completed){
//             value
//             done
//         }
//     }
// `

// const REMOVE_TODO = gql`
//     mutation RemoveTodo($id: ID!){
//         removeTodo(id: $id){
//             value
//         }
//     }
// `


// const ADD_TODO = gql`
//   mutation addTodo($value: String!) {
//     addTodo(value: $value) {
//       id
//     }
//   }
// `

// const GET_TODOS = gql`
//   query GetTodos {
//     todos {
//       id
//       value
//       done
//     }
//   }
// `

// const UPDATE_TODO_DONE = gql`
//   mutation UpdateTodo($id: ID!) {
//     updateTodoDone(id: $id) {
//       value
//       done
//     }
//   }
// `

const TodosArea: React.FC<RouteComponentProps> = (props) => {


    // const [addTodo] = useMutation(ADD_TODO)
    // const [updateTodoDone] = useMutation(UPDATE_TODO_DONE)
    // let { loading, error, data, refetch } = useQuery(GET_TODOS,{fetchPolicy:"cache-first"})
    // const [reminder, setterReminder] = useState<string>("")
    // const [sendLoading, setLoading] = useState(false);
    // const { user, identity } = useContext(IndentityContext)
    // const inputRef = useRef<any>()
    // const [text, setText] = useState("");
    // const [addTodo] = useMutation(ADDTOO);
    // const [updateTodo] = useMutation(UPDATE_TODO);
    // const [removeTodo] = useMutation(REMOVE_TODO);
    // const { loading, error, data, refetch } = useQuery(GET_TODOS,{fetchPolicy:"cache-first"});
    const { user, identity } = useContext(IndentityContext);
    // const inputRef = useRef<any>();

    // React.useEffect(()=>{
    //     async function fetchData(){
    //         await refetch();
    //     }
    
    //     fetchData()
    
    //   },[user]);

  //   const Submit = () => {
  //     setLoading(true);
  //     addTodo({
  //         variables : {
  //             value : reminder
  //         },
  //         refetchQueries: [{query:GET_TODOS}],
  //     })
  //     setterReminder("");
  //     setLoading(false);
  // }

    return(
        <div className='mt-5'>
            <div className="d-flex justify-content-between">
            <h3 >{user && (user.user_metadata?.full_name)}'s Todos</h3>
            <Button className="h-25" variant="dark" onClick={() => {identity.open()}}>Logout</Button>
            </div>
            <hr />
            <div className='mt-5'>
                {/* <FormControl ref={inputRef} type="text" placeholder='Add Todo...' /> */}
                {/* <input type="text" value={text} onChange={e => setText(e.target.value)}/> */}
                <Button className='my-3 w-100' variant='dark'
                    // onClick={async () => {
                    //     console.log(inputRef.current.value)
                    //     await addTodo({ variables: { value: inputRef.current.value } })
                    //     inputRef.current.value = ""
                    //     await refetch()
                    //   }}
                >
                  Add Todo
                </Button>
{/* 
                <input
                    value={reminder} name="reminder" onChange={({target}) => setterReminder(target.value)}
                    // ref={inputRef}
                    type="text"
                    placeholder="Add a new task"
                />
                <Button
                    onClick={Submit}
                    >
                    Add Task
                </Button> */}
            </div>
            {/* <ListGroup variant="flush">
                {(loading ) ? <div>Loading...</div> : 
                error ? <div>Error: {error.message}</div> : 
                (data.todos.length === 0 ? (
                    <h5>Your todo list is empty</h5>
                ) : (
                    data.todos.map(todo => (
                    <ListGroup.Item key={todo.id}>
                        <div>
                        <Form.Check
                            defaultChecked={todo.done}
                            disabled={todo.done}
                            // className={styles.checkBox}
                            type="checkbox"
                            // onClick={async e => {
                            // await updateTodo({ variables: { id: todo.id } })
                            // await refetch()
                            // }}
                        />
                        <p >{todo.value}</p>
                        </div>
                    </ListGroup.Item>
                    ))
                ))}
            </ListGroup> */}
            {/* <ListGroup className='mt-3'>
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
            </ListGroup> */}
        </div>
    );
}

export default TodosArea;