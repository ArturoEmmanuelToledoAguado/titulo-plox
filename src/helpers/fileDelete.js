
/**
 * Trying to fetch the URL, if it is not ok, it will throw an error. If it is ok, it will return the
 * secure_url
 * @param id - The id that you want to upload.
 * @returns The secure_url.
 */
export const fileDelete = async(id) => {
    /* Checking if the file exists, if it doesn't, it will throw an error. */
    if (!id) throw new Error("Y el archivo? 🥴")
    const URL = 'URL de mongose :v/'

    try {
        const resp = await fetch(URL, { method: 'Delete', id })
        if (!resp.ok) throw new Error('No se puede borrar el archivo')
    } catch (error) {
        throw new Error (error.message)
    }
}