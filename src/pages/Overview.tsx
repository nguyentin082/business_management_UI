import { useState } from 'react';
import AlertSuccess from '../components/Alert/AlertSuccess';
import { fakeDataForOverview1 } from '../constants/constants';
import SmallWidget from '../components/Widget/SmallWidget';
import MediumWidget from '../components/Widget/MediumWidget';
import LargeWidget from '../components/Widget/LargeWidget';
import { BarChart, LineChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const listItems1 = fakeDataForOverview1;

const palette = ['lightcoral', 'slateblue'];

export const platforms = [
    {
        label: 'Mobile',
        value: 59.12,
    },
    {
        label: 'Desktop',
        value: 40.88,
    },
];

const colorPerItem = [
    { ...platforms[0], color: 'orange' },
    { ...platforms[1], color: 'gray' },
];

const pieParams = {
    height: 200,
    margin: { right: 5 },
    slotProps: { legend: { hidden: true } },
};

export const desktopOS = [
    {
        label: 'Windows',
        value: 72.72,
    },
    {
        label: 'OS X',
        value: 16.38,
    },
    {
        label: 'Linux',
        value: 3.83,
    },
    {
        label: 'Chrome OS',
        value: 2.42,
    },
    {
        label: 'Other',
        value: 4.65,
    },
];

export const mobileOS = [
    {
        label: 'Android',
        value: 70.48,
    },
    {
        label: 'iOS',
        value: 28.8,
    },
    {
        label: 'Other',
        value: 0.71,
    },
];

const normalize = (v: number, v2: number) =>
    Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
    ...mobileOS.map((v) => ({
        ...v,
        label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
        value: normalize(v.value, platforms[0].value),
    })),
    ...desktopOS.map((v) => ({
        ...v,
        label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
        value: normalize(v.value, platforms[1].value),
    })),
];

// export const valueFormatter = (item: { value: number }) =>
//     `${item.value}%`;

export const dataset = [
    {
        facebook: 59,
        tiktok: 57,
        youtube: 86,
        website: 21,
        month: 'T01',
    },
    {
        facebook: 50,
        tiktok: 62,
        youtube: 90,
        website: 30,
        month: 'T02',
    },
    {
        facebook: 70,
        tiktok: 53,
        youtube: 80,
        website: 28,
        month: 'T03',
    },
    {
        facebook: 65,
        tiktok: 60,
        youtube: 100,
        website: 40,
        month: 'T04',
    },
    {
        facebook: 80,
        tiktok: 73,
        youtube: 95,
        website: 50,
        month: 'T05',
    },
    {
        facebook: 90,
        tiktok: 65,
        youtube: 110,
        website: 60,
        month: 'T06',
    },
    {
        facebook: 85,
        tiktok: 75,
        youtube: 120,
        website: 70,
        month: 'T07',
    },
    {
        facebook: 92,
        tiktok: 80,
        youtube: 130,
        website: 80,
        month: 'T08',
    },
    {
        facebook: 88,
        tiktok: 78,
        youtube: 125,
        website: 85,
        month: 'T09',
    },
    {
        facebook: 95,
        tiktok: 85,
        youtube: 140,
        website: 90,
        month: 'T10',
    },
    {
        facebook: 100,
        tiktok: 90,
        youtube: 150,
        website: 95,
        month: 'T11',
    },
    {
        facebook: 110,
        tiktok: 100,
        youtube: 160,
        website: 100,
        month: 'T12',
    },
];

export function valueFormatter(value: number | null) {
    return `${value} người`;
}

const chartSetting = {
    yAxis: [
        {
            label: 'Số người tiếp cận',
        },
    ],
    width: 500,
    height: 300,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};

function Overview() {
    // HOOKS
    const [toggleSuccessVisible, setToggleSuccessVisible] =
        useState<boolean>(false);

    return (
        <div className="max-w-screen-xl ml-48 py-10 mx-auto px-4 md:px-8 bg-neutral-50">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                        />
                    </svg>
                    <h3 className="ml-2 text-gray-800 text-xl font-bold sm:text-2xl">
                        Tổng quan doanh nghiệp
                    </h3>
                </div>
            </div>
            {/* Button to test alert component */}
            <div>
                {/* <button
                    onClick={() => {
                        return (
                            setToggleSuccessVisible(true),
                            setTimeout(() => {
                                setToggleSuccessVisible(false);
                            }, 3000)
                        );
                    }}
                    className="rounded-lg border px-4 py-2"
                >
                    Test Success Alert
                </button> */}
                {/* Success Alert */}
                <AlertSuccess
                    isVisible={toggleSuccessVisible}
                    setIsVisible={setToggleSuccessVisible}
                    title="Thành công"
                    content="Thành công......"
                />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                {listItems1.map((item, index) => (
                    <SmallWidget
                        key={index}
                        icon={item.icon}
                        value={item.value}
                        title={item.name}
                        bgColor={item.bgColor}
                    />
                ))}
            </div>
            <div className="mt-4 flex flex-row gap-4">
                <div className="basis-2/3">
                    <LargeWidget
                        options={[
                            {
                                content: 'Tháng này',
                                value: '1Month',
                            },
                            {
                                content: 'Quý này',
                                value: '3Months',
                            },
                            {
                                content: 'Nửa năm nay',
                                value: '6Months',
                            },
                            {
                                content: 'Cả năm',
                                value: '12Months',
                            },
                        ]}
                        title="Biểu đồ tiếp cận qua kênh truyền thông"
                        graph={
                            <BarChart
                                dataset={dataset}
                                xAxis={[
                                    { scaleType: 'band', dataKey: 'month' },
                                ]}
                                series={[
                                    {
                                        dataKey: 'facebook',
                                        label: 'Facebook',
                                        valueFormatter,
                                        color: '#0766FF',
                                    },
                                    {
                                        dataKey: 'tiktok',
                                        label: 'TikTok',
                                        valueFormatter,
                                        color: '#281115',
                                    },
                                    {
                                        dataKey: 'youtube',
                                        label: 'YouTube',
                                        valueFormatter,
                                        color: '#FF0200',
                                    },
                                    {
                                        dataKey: 'website',
                                        label: 'Website',
                                        valueFormatter,
                                        color: '#F1AA1E',
                                    },
                                ]}
                                {...chartSetting}
                            />
                        }
                    />
                </div>
                <div className="basis-1/3">
                    <MediumWidget
                        title="Tỉ lệ khách chốt sale"
                        options={[
                            {
                                content: 'Tuần này',
                                value: '1Week',
                            },
                            {
                                content: 'Nửa tháng này',
                                value: '2Weeks',
                            },
                            {
                                content: 'Tháng này',
                                value: '1Month',
                            },
                            {
                                content: 'Quý này',
                                value: '3Months',
                            },
                            {
                                content: 'Nửa năm nay',
                                value: '6Months',
                            },
                            {
                                content: 'Cả năm',
                                value: '12Months',
                            },
                        ]}
                        graph={
                            <Gauge
                                value={75}
                                startAngle={-110}
                                endAngle={110}
                                sx={() => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40,
                                    },
                                    [`& .${gaugeClasses.valueText} text`]: {
                                        fill: '#02DB35', // <-- change text color
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: '#02DB35', // <-- change pointer color
                                    },
                                })}
                                text={({ value }) => `${value} %`}
                            />
                        }
                    />
                </div>
            </div>
            <div className="mt-4 flex flex-row gap-4">
                <div className="basis-1/3">
                    <MediumWidget
                        title="Tỉ lệ thu chi"
                        options={[
                            {
                                content: 'Tuần này',
                                value: '1Week',
                            },
                            {
                                content: 'Nửa tháng này',
                                value: '2Weeks',
                            },
                            {
                                content: 'Tháng này',
                                value: '1Month',
                            },
                            {
                                content: 'Quý này',
                                value: '3Months',
                            },
                            {
                                content: 'Nửa năm nay',
                                value: '6Months',
                            },
                            {
                                content: 'Cả năm',
                                value: '12Months',
                            },
                        ]}
                        graph={
                            <LineChart
                                series={[
                                    {
                                        curve: 'natural',
                                        data: [
                                            0, 5, 2, 6, 3, 9.3, 6, 8, 1, 10, 12,
                                            62,
                                        ],
                                    },
                                    {
                                        curve: 'natural',
                                        data: [
                                            6, 3, 7, 9.5, 4, 2, 4, 8, 5, 6, 8,
                                            19,
                                        ],
                                    },
                                ]}
                            />
                        }
                    />
                </div>
                <div className="basis-2/3">
                    <LargeWidget
                        title="Biểu đồ thu chi"
                        options={[
                            {
                                content: 'Tháng này',
                                value: '1Month',
                            },
                            {
                                content: 'Quý này',
                                value: '3Months',
                            },
                            {
                                content: 'Nửa năm nay',
                                value: '6Months',
                            },
                            {
                                content: 'Cả năm',
                                value: '12Months',
                            },
                        ]}
                        graph={
                            <Stack
                                direction="row"
                                width="100%"
                                textAlign="center"
                                spacing={2}
                            >
                                <Box flexGrow={1}>
                                    <Typography>Default</Typography>
                                    <PieChart
                                        series={[
                                            {
                                                data: platforms,
                                            },
                                        ]}
                                        {...pieParams}
                                    />
                                </Box>
                                <Box flexGrow={1}>
                                    <Typography>Palette</Typography>
                                    <PieChart
                                        colors={palette}
                                        series={[
                                            {
                                                data: platforms,
                                            },
                                        ]}
                                        {...pieParams}
                                    />
                                </Box>
                                <Box flexGrow={1}>
                                    <Typography>Item</Typography>
                                    <PieChart
                                        series={[
                                            {
                                                data: colorPerItem,
                                            },
                                        ]}
                                        {...pieParams}
                                    />
                                </Box>
                            </Stack>
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Overview;
