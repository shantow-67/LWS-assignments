/* eslint-disable react/prop-types */
const Table = ({ classdata, avatar, classname }) => {
    return (
        <>
            <table className="w-full">
                <thead>
                    <tr className="bg-[#0F694D]">
                        <td className="p-5 text-sm md:text-xl" colSpan={4}>
                            {classname}
                        </td>
                    </tr>
                    <tr className="border-b border-[#FFFFFF0D]">
                        <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                            ID
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold text-left">
                            Name
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold">
                            Scores
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold">
                            Percentage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- className two --> */}

                    {classdata.map((item, index) => (
                        <tr key={index}>
                            <td className="p-5 text-sm md:text-xl">
                                {item.id}
                            </td>
                            <td className="p-5 text-sm md:text-xl">
                                <div className="flex space-x-3 items-center">
                                    <img
                                        className="w-8 h-8"
                                        src={avatar}
                                        width="32"
                                        height="32"
                                        alt="John Smith"
                                    />
                                    <span className="whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </div>
                            </td>
                            <td className="p-5 text-sm md:text-xl text-center">
                                {item.score}
                            </td>
                            <td className="p-5 text-sm md:text-xl text-center">
                                {item.percentage}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
