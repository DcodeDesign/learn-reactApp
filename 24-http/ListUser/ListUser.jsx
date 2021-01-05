import React from 'react';

export default (props) => {
    const selected = (obj) => {
        return obj === props.selected ? { border : "1px solid red", width: '250px'} : { width: '250px'};
    }

    const users = props.users;
    return (
        <div className={"w-100 d-flex flex-row flex-wrap justify-content-center my-3"}>
            {users && users.length ? (
                users.map((u, index) => (
                    <div key={u.id}
                         onClick={() => {
                             props.selectedUser(index)
                         }}
                         className={"card m-2"}
                         style={selected(u)}>
                        <div className={"card-header"}>{u.name}</div>
                        <div className={"card-body"}>
                            <ul className={"list-group"}>
                                <li className={"list-group-item"}>{u.username}</li>
                                <li className={"list-group-item"}>{u.email}</li>
                            </ul>
                            <button className={"btn btn-danger"} onClick={() => props.deleteUser(u.id) }>Delete</button>
                        </div>
                    </div>
                ))
            ) : (<h1 className={"text-center"}> No user ... </h1>)}
        </div>
    );
}
