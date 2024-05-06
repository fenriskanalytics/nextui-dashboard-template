// src/components/RangeSelectorCard.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardBody, ButtonGroup, Button } from '@nextui-org/react';
import { fetchData } from '../services/fetchData';
import { ChartComponent } from './ChartComponent';

export default function RangeSelectorCard() {
    const [data, setData] = useState([]);
    const [range, setRange] = useState('YTD');

    useEffect(() => {
        // Example API call parameters
        fetchData('AAPL', '2023-01-01', '2023-10-10').then(setData);
    }, [range]);

    return (
        <Card>
            <CardBody>
                <ButtonGroup size="sm" color="primary">
                    <Button auto flat onClick={() => setRange('5D')}>5D</Button>
                    {/* Other buttons */}
                </ButtonGroup>
                <ChartComponent data={data} />
            </CardBody>
        </Card>
    );
}
