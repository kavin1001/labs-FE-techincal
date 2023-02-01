import Search from "./SearchBar";
import ShowCartButton from "./ShowCartButton";

// The nav bar that is sticky at the top of the page

export default function Nav({updateSearchQuery}:{updateSearchQuery: (newSearchString:string) => any}) {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b-2 w-full bg-white justify-content-left">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold py-6 px-4">Penn Course Cart</h1>
          <div className="flex items-center px-2">
            <Search updateSearchQuery={updateSearchQuery} />
            <ShowCartButton />
          </div>
        </div>
      </div>
    </header>
  )
}
