/* Importing the async function from the firebase util. */
import { async } from "@firebase/util";

/**
 * Trying to fetch the URL, if it is not ok, it will throw an error. If it is ok, it will return the
 * secure_url
 * @param file - The file that you want to upload.
 * @returns The secure_url.
 */
export const fileUpload = async(file) => {
    /* Checking if the file exists, if it doesn't, it will throw an error. */
    if (!file) throw new Error("Y el archivo? 🥴")
    //                                              ⬇ enviroment variable
    const URL = 'https://api.cloudinary.com/v1_1/dzvrpgyxy/image/upload'
    const body = new FormData()
    /* Creating a new FormData object, and appending the file to it. */
    body.append('upload_preset', 'reactJournal')
    body.append('file', file)
    /* A try catch block. It is trying to fetch the URL,
    if it is not ok, it will throw an error.If it
    is ok, it will return the secure_url. */
    try {
        const resp = await fetch(URL, { method: 'POST', body })
        if (!resp.ok) throw new Error('No se puede cargar el archivo')
        const cloudResp = await resp.json()
        return cloudResp.secure_url
    } catch (error) {
        throw new Error (error.message)
    }
}