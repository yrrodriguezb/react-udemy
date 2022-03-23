import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => { 
  test('Debe traer 10 elementos', async() => { 
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(10)
  })

  test('Debe devolver un array vacio sino se envia la categoria', async() => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0)
  })
})