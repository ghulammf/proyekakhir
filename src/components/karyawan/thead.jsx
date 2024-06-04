function Thead(params) {
    return (
        <>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-16 py-3">
                        Tanggal
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Total Pengeluaran
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                    <th scope="col" class="px-6 py-3">
                        
                    </th>
                </tr>
            </thead>
        </>
    )
}

export default Thead;