import { Book } from "./types/mainTypes"

export const ListingNames = (props: Book) => {
  return (
    <li>{props.name}</li>
  )
}
