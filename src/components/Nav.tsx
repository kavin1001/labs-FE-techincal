import Search from "./SearchBar";
import ShowCartButton from "./ShowCartButton";

export default function Nav({updateSearchQuery}:{updateSearchQuery: (newSearchString:string) => any}) {
  return (
    <div className="border-b-2 justify-content-left">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold py-6 px-2">Penn Course Cart</h1>
        <div className="flex items-center px-2">
          <Search updateSearchQuery={updateSearchQuery} />
          <ShowCartButton />
        </div>
      </div>
    </div>
  )
}
