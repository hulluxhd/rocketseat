import React from 'react';
export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name || 'default'}</strong>
            <p>{props.repository.desc}</p>
            <a href={props.repository.adress} target='_blank'>
                Acessar repositório
            </a>
        </li>
    )
}