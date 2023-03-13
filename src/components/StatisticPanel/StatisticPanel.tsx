import { Box, Grid, Typography, Divider } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { Chart } from '../../components'

const StatisticPanel = ({ statisticState, statisticActions}: any) => {
    const [userStats, setUserStats]: any = useState([]);
    const [orderStats, setOrderStats]: any = useState([]);

    const MONTHS = useMemo(()=> ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],[])

    useEffect(() => {
        statisticActions.getUserStatistics();
        statisticActions.getOrderStatistics();
    },[statisticActions])

    useEffect(() => {
        statisticState.userStats && statisticState.userStats.map((item: any) => {
            setUserStats((prev: any) => [
                ...prev,
                { name: MONTHS[item._id-1], "Active Users": item.total}
            ])
        })
        statisticState.orderStats && statisticState.orderStats.map((item: any) => {
            setOrderStats((prev: any) => [
                ...prev,
                { name: MONTHS[item._id-1], "Sales": item.total}
            ])
        })
    }, [MONTHS])


    console.log(userStats)
    return (
        <><Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} sx={{ p: 1 }}>
                <Grid item sm={12} md={12}>
                    <Typography variant="h3" align='left' color={'#624c59'} >
                        Overview
                    </Typography>
                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                    <Chart title={'Active Users'} data={userStats} type={'users'}/>
                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                    <Chart title={'Sales'} data={orderStats} type={'sales'}/>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default StatisticPanel;