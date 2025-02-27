
import SearchBar from "../searchbar"
import Table from "./table"

function Content() {
    return(
        <>
        <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <SearchBar/>
                    <Table/>
                </div>
            </div>
        </>
    )
}

export default Content