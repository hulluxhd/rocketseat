import { RepositoryItem } from "./RepositoryItem"
import React from 'react';
import '../styles/repositories.scss'
export function RepositoryList() {
    let repository = {
        name: 'unform',
        desc: 'Forms in React',
        adress: 'https://github.com/unform/unform'
    }
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}