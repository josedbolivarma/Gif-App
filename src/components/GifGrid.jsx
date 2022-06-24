import { GifItem, ErrorMessage } from './index'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3>{ category }</h3>
        {/* <LoadingMessage isLoading={ isLoading } /> */}
    {
        ( <ErrorMessage isLoading={isLoading} message='Cargando nuevos gifs...'/> ) 
    }

       <div className='card-grid'>
           {
            images.map((image) => (
                <GifItem 
                key={ image.id }
                { ...image }
                />
            ))
           }
       </div>
    </>
  )
}