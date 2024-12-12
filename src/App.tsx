import React, { useEffect, useState } from 'react'
import './App.css'
import { Animal } from '../interface'

interface Animals {
  name: string
  url: string
}

export interface Cat {
  id: number
  isOpend: boolean
}

const App: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [nextUrl, setNextUrl] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'
  )
  const [virtualAnimals, setVirtualAnimals] = useState<Animal[]>([])

  const fetchData = async (url: string) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    setNextUrl(data.next)
    data.results.forEach((animal: Animals) => {
      fetch(animal.url)
        .then((response) => response.json())
        .then((data) => {
          setVirtualAnimals((virtualAnimals) => [...virtualAnimals, data])
        })
    })
  }

  useEffect(() => {
    fetchData(nextUrl)
  }, [])

  const handleScroll = () => {
    const bottomOfWindow =
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.offsetHeight

    if (bottomOfWindow) {
      fetchData(nextUrl)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [nextUrl])

  return (
    <div className='container'>
      <div className='grid-container'>
        {virtualAnimals.map((animal, index) => (
          <div key={index} className='grid-item'>
            <div
              className='card'
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr',
                justifyItems: 'center',
                alignItems: 'center',
                gap: '5px',
                backgroundColor: '#f5f5f5',
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s'
              }}
            >
              <h2>{animal.name}</h2>
              <button className='btn'>
                <img
                  src={animal.sprites.front_default}
                  alt={animal.name}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

