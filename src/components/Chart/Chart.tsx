import { Card, CardContent, CardMedia, Typography, Grid, Button, Divider } from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        "Active User": 4000,
    },
    {
        name: 'Page B',
        "Active User": 3000,
    },
    {
        name: 'Page C',
        "Active User": 2000,
    },
    {
        name: 'Page D',
        "Active User": 2780,
    }
];


const Chart = ({ title, data, type }: any) => {

    return (
        <>
        <Typography sx={{mb: 2.5, fontWeight: 'bold'}}>{title}</Typography>
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
                <XAxis dataKey="name" stroke="#8884d8" />
                <Line type="monotone" dataKey={type == 'users' ? "Active Users" : "Sales"}  stroke="#8884d8" />
                <Tooltip />
                <Legend />
            </LineChart>
        </ResponsiveContainer></>
    );
}

export default Chart;
