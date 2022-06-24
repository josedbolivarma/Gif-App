export const ErrorMessage = ({ isLoading, message = 'Cargando...' }) => {
  return (
    <>
        {
            isLoading && (<h2>{ message }</h2>)
        }
    </>
  )
}
