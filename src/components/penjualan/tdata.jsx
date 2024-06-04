function Tdata(params) {
    return (
        <>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Senin, 1 Mei 2024
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Rp. 3.230.000
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline mx-3">Edit</a>
                        <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline mx3">Delete</a>
                    </td>
                    <td className="px-6 py-4">
                    <button className="inline-flex items-center text-green-600 bg-white border border-green-700 focus:outline-none hover:bg-emerald-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <a href="/detailpenjualan" className="">Detail</a>
                    </button>
                    </td>
                </tr>

            </tbody>
        </>
    )
}

export default Tdata;