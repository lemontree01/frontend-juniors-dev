import React from 'react'

interface AnimeCardProps {
  img?: string,
  name: string,
  lastEpisode: number
}

const AnimeCard:React.FC<AnimeCardProps> = ({name, lastEpisode, img = ""}) => {
  return (
    <div className='anime-card'>
      
    </div>
  )
}

export default AnimeCard