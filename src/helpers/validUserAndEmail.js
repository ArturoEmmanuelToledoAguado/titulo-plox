export const validUserAndEmail = (displayName, email) => {
    const newname = displayName.toLowerCase().split(' ')
    try {
        const searchLastName = newname.map((element, index) => {if(element === email.substr(1, (email.indexOf(email.match(/(\d+)/g)[0])-2))) return index+1 }).filter(numero =>  Number.isInteger(numero)).pop()
        const letter = (searchLastName === 1)?newname[searchLastName+1]:newname[searchLastName*0].substr(0, 1)
        return email.substr(0,email.search('@')).includes(letter + (searchLastName === 1)?newname[searchLastName*0]:newname[searchLastName-1] + newname[searchLastName].substr(0, 1))
    } catch (error) {
        return false
    }
}