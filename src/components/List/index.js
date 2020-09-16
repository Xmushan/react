import React from 'react'

export default class List extends React.Component {

    render() {
        const users = [
            { username: 'Jerry', age: 21, gender: 'male' },
            { username: 'Tomy', age: 22, gender: 'male' },
            { username: 'Lily', age: 19, gender: 'female' },
            { username: 'Lucy', age: 20, gender: 'female' }
        ]
        return (
            <div>
                <ul>
                    {
                        users.map((item, index) => <li key={index}>{item.username}---{item.age}---{item.gender}</li>)
                    }
                </ul>
            </div>
        )
    }
}