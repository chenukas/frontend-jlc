import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, type }: any) => {

    return (
        <>
            <Typography sx={{ mb: 2.5, fontWeight: 'bold' }}>{title}</Typography>
            <ResponsiveContainer width="100%" height="32.5%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#624c59" />
                    <Line type="monotone" dataKey={type == 'users' ? "Active Users" : "Sales"} stroke="#624c59" />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer></>
    );
}

export default Chart;
