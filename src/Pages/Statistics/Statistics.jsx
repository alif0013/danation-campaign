import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const donatedItems = JSON.parse(localStorage.getItem("donation"));
    const donationLength = donatedItems.length;
    const totalDonations = 12;

    // Calculate the percentages
    const donatedPercentage = (donationLength / totalDonations) * 100;
    const remainingPercentage = 100 - donatedPercentage;

    // Create data for the Pie Chart
    const data = [
        { name: "Your Donation", value: donatedPercentage },
        { name: "Total Donation", value: remainingPercentage },
    ];

    // Define COLORS array for the Pie Chart
    const COLORS = ["#00C49F", "#FF444A"]; 

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className='flex px-5 gap-3 md:justify-center'>
                <div className='flex items-center gap-2'>
                    Your Donation: <div className='bg-[#00C49F] rounded-sm border-solid w-16 h-2'></div>
                </div>
                <div className='flex items-center gap-2'>
                    Total Donation: <div className='bg-[#FF444A] rounded-sm border-solid w-16 h-2'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
