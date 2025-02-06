import React from 'react'
import Form from 'next/form'

export default function ComponentForm() {
  return (
    <div>
        <h1>Recherche</h1>
        <Form action="/search">
            <input name='query' placeholder='Rechercher' />
            <button type='submit'>Soumettre</button>
        </Form>
    </div>
  )
}
