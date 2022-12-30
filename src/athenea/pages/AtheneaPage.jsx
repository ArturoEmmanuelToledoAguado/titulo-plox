import { FileList, Login, Profile } from "../components/index"
import { AtheneaLayout } from "../layout/AtheneaLayout"
import { NoteView } from "../views/NoteView"

export const AtheneaPage = () => {
  return (
    <AtheneaLayout>
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit distinctio dolor nam pariatur quo laboriosam eligendi exercitationem, quae odit voluptatibus rerum eum quam sint porro quod hic dolorum amet repellat.</Typography> */}
      {/* <Login />OK */}
      {/* <Profile/>OK */}
      <NoteView/>
      {/* {NothingSelected} */}

    </AtheneaLayout>
  )
}
