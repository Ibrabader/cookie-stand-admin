
const ReportTable = (props) => {
    if (props.report.length === 0) {
        return (
            <h2 className="mx-auto my-8 text-xl font-semibold text-center">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <table className='w-3/4 mx-auto mt-20 mb-20 text-center border rounded-md border-emerald-500'>

                <thead className='border border-green-300 bg-emerald-500'>
                    <th className='px-2'>Location</th>
                    {
                        props.workingHours.map(item => {
                            return (
                                <th>{item} </th>
                            )
                        })
                    }
                    <th>Totals</th>
                </thead>

                <tbody>
                    {
                        props.report.map((store, idx) => {

                            const element =
                                <>
                                    <td className='px-2 border border-black' >{store.location}</td>
                                    {
                                        store.hourlySales.map(item => {
                                            return (
                                                <td className='border border-black'> {item} </td>
                                            )
                                        })
                                    }
                                    <td className='border border-black'>{store.total}</td>
                                </>

                            if (idx % 2 == 0) {
                                return (
                                    <tr className='bg-emerald-500'>
                                        {element}
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr className='bg-emerald-300'>
                                        {element}
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>

                <tfoot className='bg-emerald-300'>
                    <td className='px-2 font-semibold border border-black'>Totals</td>
                    {
                        props.totals.map(item => {
                            return (
                                <td className='font-semibold border border-black'>{item}</td>
                            )
                        })
                    }
                </tfoot>
            </table>
        )
    }
}

export default ReportTable
