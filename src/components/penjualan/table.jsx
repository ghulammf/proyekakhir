import Tdata from "./tdata";
import Thead from "./thead";

function Table() {
    return (
        <div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <Thead/>
                    <Tdata/>
                    <Tdata/>
                    <Tdata/>
                </table>
            </div>

        </div>
    )
}

export default Table;