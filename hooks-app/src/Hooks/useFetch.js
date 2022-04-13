import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []) // Dependencia vacia, que solo lo haga la primera vez que el componente se carga

  const [state, setState] = useState({
    data: null, 
    loading: true, 
    error: null
  })

  useEffect(() => {
    setState({
      loading: true,
      data: null,
      error: null     
    })

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // evita que ocuarra un error cuando el componente se ha desmontado y no se ha solucionado la promesa
        // para setear el nuevo estado. setTimeout para pruebas y replica del error
        // setTimeout(() => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data: data
            })
          } else {
            console.info(`[${Date.now().toString()}]: No se puede establacer el nuevo estado del useFetch porque el componente fue desmontado`)
          }
        // }, 4000);
      }) 
  }, [ url ])

  return state;
}
